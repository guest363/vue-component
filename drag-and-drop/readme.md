# Drag-and-Drop

Компонент создает поле в которое можно перемещать drag-and-drop изображения или же выбирать их через меню проводника. 

Из переданных изображений формируется превью а сами они доступны в base64 для дальнейшего использования
## Входные параметры

```
 dataForDND: {
        show: {
          button: true,
          limits: true
        },
        text: {
          main: 'Загрузите изображения с помощью диалога выбора файлов или перетащив нужные изображения в выделенную область',
          button: 'Выбрать изображения',
          limits: '*Изображение должно быть квадратным.'
        }
  }
```
## Выходные параметры

```
Отсутствуют. Для того чтобы извлечь картинки в base64 в массив base64


const imgages = document
        .getElementById("dropZone--gallery")
        .getElementsByTagName("img");

const base64 = [];

[...imgages].forEach(elem => {
  base64.push(elem.src);
});
```
## Инициализация

Пример:

```
<template>
  <div>
     <drag-and-drop :data='dataForDND'> </drag-and-drop>
  </div>
</template>

<script>
import dnd from './path/drag-and-drop.vue';

export default {
  name: "Name",
  components: {
    "drag-and-drop": dnd,
  },
  data: () => {
    return {
        dataForDND: {
          show: {
            button: true,
            limits: true
          },
          text: {
            main: 'Загрузите изображения с помощью диалога выбора файлов или перетащив нужные изображения в выделенную область',
            button: 'Выбрать изображения',
            limits: '*Изображение должно быть квадратным.'
          }
      }
    };
  },
  methods: {
    getBase64() {
      const imgages = document
        .getElementById("dropZone--gallery")
        .getElementsByTagName("img");

      const base64 = [];

      [...imgages].forEach(elem => {
        base64.push(elem.src);
      });

      return base64;
    }
  },
  mounted() {}
};
</script>

```
## Установка

Достаточно скопировать файл с расширением "vue"
## Как выглядит
Инициализированный эллемент 

![инит](https://github.com/guest363/vue-component/blob/master/drag-and-drop/exemple/1.jpg)

Загруженно несколько картинок

![несколько картинок](https://github.com/guest363/vue-component/blob/master/drag-and-drop/exemple/2.jpg)
