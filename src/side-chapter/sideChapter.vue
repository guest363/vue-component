<template>
  <div class="content">
    <h4 id="content--header">Содержание:</h4>
    <ul id="addingElement" ref="sideNav">
      <li>Загрузка содержания</li>
    </ul>
  </div>
</template>


<script>
/* Совсем не vue style зато легко перенести на читый js*/
export default {
  name: "sideChapter",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    makeMenu: function() {
      setTimeout(() => {
        // отложить до отрисовки контента
        const el = document.getElementById(this.data.sourceID); // контейнер с содержимым Вики страницы
        let allH = el.querySelectorAll("h1, h2, h3, h4, h5, h6"); // Найти все заголовки
        const add = this.$refs.sideNav; // Список ul где выводится содержимое
        const fragment = document.createDocumentFragment(); // Чтобы не отрисовывать каждый раз страницу
        // элементы списка добавляются во фрагмент а затем уже весь фрагмент в DOM
        allH = Array.prototype.slice.call(allH); // теперь allH - массив, так удобнее работать
        // в частности появляется метот reduce
        const addList = (item, position) => {
          item.setAttribute("id", `C${position}`); // присвоить заголовку в ВИКИ страничке id с нумерацией
          // для навигации по разделам
          let newLi = document.createElement("li");
          let link = document.createElement("a");
          link.title = "Навигация";
          link.innerHTML = `<${item.tagName}> ${item.textContent} </${item.tagName}> `; // добавть к ссылке тег и содержимое заголовка
          link.href = `#C${position}`; // присвоить закладку на заголовок в ВИКИ
          newLi.appendChild(link);
          fragment.appendChild(newLi);
        };

        allH.reduce((acc, item) => {
          // Создать раздел содержимое
          addList(item, acc);
          return acc + 1;
        }, 0);
        add.innerHTML = ""; // удаляет всех потомков элемента.
        add.appendChild(fragment); // загружает .
      }, 1000);
    },
  },
  mounted() {
    this.makeMenu();
  },
};
</script>
<style src="./css/index.less" lang="less" scoped></style>
