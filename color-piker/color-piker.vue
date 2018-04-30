/* 
    ----==== Описание компонента ====------
    Компонент выводит палитру заданных цветов. По цветам можно кликать, компонент возвращает названия 
    выбранных цветов.
    Цвета задаются через имя, список можно посмотреть здесь http://vvz.nw.ru/Lessons/HTML_Colors/HTMLcolors_HSB.htm
    В родительском элементе указываем свойство, например colorPiked, куда компонент быдет передавить 
    массив из выбранных цветов.
    
    На вход принимает обьект: 
        {
            color: ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]
        }
    Передает массив вида при клике на любом цвете
        ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]

    ----====== Определение компонента =====------
    1 - import colorPicker from '../../reuse/color-piker.vue';
    2 - components: {
        "color-picker": colorPicker,
    }
    3 -   data: () => {
                return {
                colorPiked: '',
                dataForColorPiker: {
                    color: ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]
                }
                };
        },
    4 -  <color-picker :data='dataForColorPiker' v-on:colorPiked="colorPiked = $event"></color-picker>
    ------------------------------------------------
*/

<template>
  <div class="color-picker-wrap">
      <div v-for="item in data.color" v-on:click="$emit('colorPiked', whatIsSelect())">
          <div tabindex="-1" class="color-pick" v-bind:value="item"
          v-bind:style="{ background: item }"></div>
        </div>
 </div>

</template>

<script>
const pick = {
  rootElem: "",
  click: event => {
    event.target.focus();
    event.target.isSelect = !event.target.isSelect;
    if (event.target.isSelect === true) {
      event.target.classList.add("color-pick--select");
    } else event.target.classList.remove("color-pick--select");
  },
  whatIsSelect: () => {
    // Возвращает массив выбранных цветов
    return this.rootElem
      .map(elem => {
        if (elem.classList.contains("color-pick--select")) {
          return elem.getAttribute("value");
        } else return "";
      })
      .filter(elem => {
        return elem !== "";
      });
  },
  makePiker: elementID => {
    this.rootElem = Array.prototype.slice.call(
      document.getElementsByClassName(elementID)
    );
    this.rootElem.forEach(element => {
      element.addEventListener("click", pick.click, false); // обработчик на событие клик
      element.isSelect = false;
    });
  }
};

const colorPiker = {
  name: "color-piker",
  data: () => {
    return {
    };
  },
  computed: {},
  props: ["data"],
  methods: {
      whatIsSelect: function (){
         return pick.whatIsSelect();
      }
  },
  mounted() {
    pick.makePiker("color-pick");
  }
};
export default colorPiker;
</script>

<style scoped>
.color-picker-wrap {
  display: flex;
  margin: 28px auto;
  justify-content: center;
  align-items: center;
  height: 36px;
}

.color-pick {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 9px;
  flex-shrink: 0;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
}

.color-pick:focus {
  outline: none;
}

.color-pick--select {
  width: 36px;
  height: 36px;
  margin: 0 4px;
}

.color-pick::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  padding-top: 100%;
}
</style>
