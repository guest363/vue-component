<template>
  <div
    class="dropZone"
    @dragenter="enter($event)"
    @dragleave="leave($event)"
    @dragover="over($event)"
    @drop="drop($event)"
  >
    <form class="flex-center dropZone--form">
      <p class="dropZone--form--text">{{ textMain }}</p>
      <label
        v-show="showButton"
        class="common--button dropZone--form--button flex-center"
      >
        {{ textButton }}
        <input
          @change="selectInput($event)"
          type="file"
          class="dropZone--hide"
          title="Загрузите одну или несколько фотографий"
          required
          multiple
          accept="image/*"
        />
      </label>
      <p v-show="showLimits" class="dropZone--form--text--limits">
        {{ textLimits }}
      </p>
    </form>
    <!-- Локальная загрузка довольна быстрая, полоса загрузки не требуется
    <progress id="dropZone--progress-bar" max=100 value=0></progress>-->
    <div class="dropZone--gallery">
      <div class="dropZone--gallery--thumbnail"></div>
      <div class="dropZone--gallery--full"></div>
    </div>
  </div>
</template>

<script>
import Compressor from "compressorjs";

/**
 * Создает область для drag and drop загрузки изображения,
 * стили встроены
 * @emits dropImage имитит событие "dropImage" при
 * каждом добавлении картинки, в этом событии картинка
 * сжимается до большого размера. Пример подписи на
 * событие у родителя
 * @dropImage="imageHendler('SHELTER', $event)"
 * @emits dropThumbnail здесь сильно уменьшенное превью
 * @requires Compressor для сжатия изображений
 */
export default {
  name: "drag-and-drop",
  data: () => {
    return {
      image: [],
      thumbnail: [],
    };
  },
  /** Параметры для инициализации компонента
   * @param {Boolean} showButton показ\скрытие кнопку выбора файлов, по умолчанию показать
   * @param {Boolean} showLimits показ\скрытие строки с ограничениями, по умолчанию скрыть
   * @param {String} textMain основной текст, поясняющий что можно делать с элементом
   * @param {String} textButton текст для кнопки
   * @param {String} textLimits текст ограничений
   */
  props: {
    showButton: {
      type: Boolean,
      default: true,
    },
    showLimits: {
      type: Boolean,
      default: false,
    },
    textButton: {
      type: String,
      default: "Выбрать изображения",
    },
    textMain: {
      type: String,
      default: "Перетащите или выберите изображение",
    },
    textLimits: {
      type: String,
      default: "Файлы до 2 мегабайт",
    },
  },
  methods: {
    /**
     * Прерывает дефолтные действия браузера.
     * Если вы этого не сделаете, то браузер в конечном итоге откроет
     * файл, который вы перетаскиваете, вместо того,
     * чтобы отправить его в обработчик события drop.
     */
    defaultAсtion(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    enter(event) {
      this.defaultAсtion(event);
      this.$el.classList.add("highlight");
    },
    drop(event) {
      this.leave(event);
      const files = event.dataTransfer.files; //FileList переданных файлов
      this.handleFiles(files);
    },
    leave(event) {
      this.defaultAсtion(event);
      this.$el.classList.remove("highlight");
    },
    over(event) {
      /* Аналогично событию enter */
      this.enter(event);
    },
    selectInput(event) {
      this.defaultAсtion(event);
      const files = event.target.files;
      this.handleFiles(files);
    },
    handleFiles(files) {
      const vm = this;
      /**
       * Шаблон для работы с библиотекой Compressor
       * @param {File} element файл который нужно сжать
       * @param {Object} initParam
       * @param {Number} initParam.quality степерь сжатия изображения, поумолчанию 0.85
       * @param {String} initParam.width ширина изображения на выходе
       * @param {String} initParam.height высота изображения на выходе
       * @param {String} initParam.htmlAppendElem DOM элемент к которому прикрепится изображение
       * @param {String} initParam.htmlAppendClass класс для прикрепленного изображения
       * @param {Array} initParam.base64Result ссылка на массив где хранятся сжатые изображения в
       * формате base64, они в последствии эмитятся родительскому эллементу
       * @param {String} initParam.event имя события ['dropImage', 'dropThumbnail']
       */
      const compessorWorker = (element, initParam) => {
        const imageContainer = this.$el.querySelector(
          `.${initParam.htmlAppendElem}`
        );
        new Compressor(element, {
          quality: initParam.quality,
          maxWidth: initParam.width,
          maxHeight: initParam.height,
          success(result) {
            const reader = new FileReader();
            reader.readAsDataURL(result);
            reader.onloadend = () => {
              const img = document.createElement("img");
              /* reader.result это закодированное изображение  */
              const imgBase64 = reader.result;
              initParam.base64Result.push(imgBase64);
              img.src = imgBase64;
              img.className = initParam.htmlAppendClass;
              imageContainer.appendChild(img);
              /* Отправляем именно base64, т.е. часть с
              'data:image;base64,' удаляется перед отправкой */
              vm.$emit(initParam.event, imgBase64.split(",")[1]);
            };
          },
          error(error) {
            /* TODO: можно добавить изображение с каким нибудь шаблоном
            для тех файлов что по какой либо причине не загрузились и
            выводить их в DOM. Но надо ли? */
            console.log(error.message);
          },
        });
      };
      const encodeImageFileAsURL = (element) => {
        compessorWorker(element, {
          quality: 0.85,
          width: 1200,
          height: 1200,
          htmlAppendElem: `dropZone--gallery--full`,
          htmlAppendClass: "dropZone--gallery--full--img",
          base64Result: vm.image,
          event: "dropImage",
        });
      };
      const makeThumbnail = (element) => {
        compessorWorker(element, {
          quality: 0.85,
          width: 400,
          height: 400,
          htmlAppendElem: `dropZone--gallery--thumbnail`,
          htmlAppendClass: "dropZone--gallery--thumbnail--img",
          base64Result: vm.thumbnail,
          event: "dropThumbnail",
        });
      };

      [...files].forEach((element) => {
        encodeImageFileAsURL(element);
        makeThumbnail(element);
      });
    },
  },
};
</script>

<style src="./css/index.less" lang="less" scoped></style>
