<template>
  <div class="color-picker-wrap">
      <div v-for="item in data.color" v-on:click="$emit('colorPiked', whatIsSelect())">
          <div tabindex="-1" class="color-pick" v-bind:value="item"
          v-bind:style="{ background: item }"></div>
        </div>
 </div>

</template>

<script>
const dictionary = {
    "black": "черный",
    "dimgray": "тускло-серый",
    "grey": "серый",
    "darkgray": "темно-серый",
    "silver": "серебристый",
    "lightgrey": "светло-серый",
    "gainsboro": "Гейнсборо",
    "whitesmoke": "дымчатый",
    "white": "белый",
    "snow": "снежный",
    "rosybrown": "розово-коричневый",
    "lightcoral": "светло-коралловый",
    "indianred": "индийский красный",
    "brown": "коричневый",
    "firebrick": "кирпичный",
    "maroon": "густой красно-коричневый",
    "darkred": "темно-красный",
    "red": "красный",
    "salmon": "лососевый",
    "mistyrose": "туманно-розовый",
    "tomato": "томатный",
    "darksalmon": "темно-лососевый",
    "coral": "коралловый",
    "orangered": "оранжево-красный",
    "lightsalmon": "светло-лососевый",
    "sienna": "сиена (охра)",
    "seashell": "морской раковины",
    "saddlebrown": "кожаного седла",
    "chocolate": "шоколадный",
    "peachpuff": "персиковый",
    "sandybrown": "рыжеватый",
    "linen": "льняной",
    "peru": "Перу",
    "bisque": "бисквитный (светло-коричневый)",
    "darkorange": "темно-оранжевый",
    "antiquewhite": "древний (античный) белый",
    "tan": "дубильной коры (желтовато-коричневый)",
    "burlywood": "плотной древесины",
    "blanchedalmond": "миндальный (чищеного миндаля)",
    "navajowhite": "навахо белый",
    "papayawhip": "побега папайи",
    "moccasin": "мокасиновый",
    "oldlace": "старого кружева",
    "wheat": "пшеничный",
    "orange": "оранжевый",
    "floralwhite": "цветочно-белый",
    "goldenrod": "золотисто-красный",
    "darkgoldenrod": "темный золотисто-красный",
    "cornsilk": "молодой кукурузы  ",
    "gold": "золотистый",
    "lemonchiffon": "лимонного шифона",
    "khaki": "хаки",
    "palegoldenrod": "бледный золотисто-красный",
    "darkkhaki": "темный хаки",
    "ivory": "слоновой кости",
    "beige": "беж",
    "lightyellow": "светло-желтый",
    "olive": "оливковый",
    "yellow": "желтый",
    "olivedrab": "нежно-оливковый",
    "yellowgreen": "желто-зеленый",
    "darkolivegreen": "темный оливково-зеленый",
    "greenyellow": "зелено-желтый",
    "lawngreen": "зеленой лужайки",
    "chartreuse": "шартрез (бледно-зеленый)",
    "honeydew": "медовой росы",
    "darkseagreen": "темный морской волны",
    "lightgreen": "светло-зеленый",
    "palegreen": "бледно-зеленый",
    "forestgreen": "лесной зелени",
    "limegreen": "зеленого лайма  ",
    "darkgreen": "темно-зеленый",
    "green": "зеленый",
    "lime": "лайма  ",
    "seagreen": "морской волны",
    "mediumseagreen": "умеренный морской волны",
    "mintcream": "мятного крема",
    "springgreen": "весенней зелени",
    "mediumspringgreen": "умеренный весенней зелени",
    "mediumaquamarine": "умеренный аквамариновый",
    "aquamarine": "аквамариновый (зеленовато-голубой)",
    "turquoise": "бирюзовый",
    "lightseagreen": "светлый морской волны",
    "mediumturquoise": "умеренный бирюзовый",
    "azure": "лазурный",
    "paleturquoise": "бледно-бирюзовый",
    "darkslategray": "темный аспидно-серый (темно-синевато-серый)",
    "teal": "чирок",
    "darkcyan": "темно-циановый",
    "aqua": "морской волны",
    "cyan": "циановый",
    "lightcyan": "светло-циановый",
    "darkturquoise": "темно-бирюзовый",
    "cadetblue": "синий кадет",
    "powderblue": "голубой пороши",
    "lightblue": "светло-голубой",
    "deepskyblue": "насыщенный небесно-голубой",
    "skyblue": "небесно-голубой",
    "lightskyblue": "светлый небесно-голубой",
    "steelblue": "голубовато-стальной",
    "aliceblue": "Алиса синяя",
    "slategray": "аспидно-серый",
    "lightslategray": "светлый аспидно-серый",
    "dodgerblue": "синяя уловка",
    "lightsteelblue": "светлый голубовато-стальной",
    "cornflowerblue": "васильковый",
    "royalblue": "королевский голубой",
    "ghostwhite": "призрачно-белый",
    "lavender": "лавандовый (бледно-лиловый)",
    "midnightblue": "синей полночи",
    "navy": "флотский",
    "darkblue": "темно-синий",
    "mediumblue": "умеренный голубой (синий)",
    "blue": "голубой (синий)",
    "darkslateblue": "темный аспидно-синий",
    "slateblue": "аспидно-синий",
    "mediumslateblue": "умеренный аспидно-синий",
    "mediumpurple": "умеренный пурпурный",
    "blueviolet": "сине-фиолетовый",
    "indigo": "индиго",
    "darkorchid": "темно-лиловый",
    "darkviolet": "темно-фиолетовый",
    "mediumorchid": "умеренный лиловый",
    "thistle": "чертополоха",
    "plum": "сливовый (темно-фиолетовый с оттенками бордового)",
    "violet": "темно-лиловый, фиолетовый",
    "purple": "пурпурный  ",
    "darkmagenta": "темный фуксин",
    "fuchsia": "фуксии",
    "magenta": "фуксин, красная анилиновая краска",
    "orchid": "лиловый",
    "mediumvioletred": "умеренный лилово-красный",
    "deeppink": "насыщенный розовый",
    "hotpink": "яркий розовый",
    "lavenderblush": "лавандового румянца",
    "palevioletred": "бледный лилово-красный",
    "crimson": "малиновый, темно-красный, кармазинный",
    "pink": "розовый",
    "lightpink": "светло-розовый"
    }
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
const makeTooltip = {
    showingTooltip: '',
    make: elem => {
      const target = elem.target;
      const tooltipElem = document.createElement("div");
      const st = tooltipElem.style;
      // Приходится использовать инлайн стиль из за области видимости postcss
      st.position = 'fixed';
      st.padding = '5px';
      st.margin = '0';
      st.border = '1px solid #7d7d7d';
      st.textAlign = 'center';
      st.color = '#353434';
      st.background = '#fff';
      st.boxShadow = '1px rgba(0, 0, 0, .3)';
      st.maxWidth = '200px';
      st.fontSize = '12px';
      const engProp = elem.path[0].getAttribute("value");
      tooltipElem.innerHTML = `${dictionary[engProp]}`;
      document.body.appendChild(tooltipElem);
      const coords = target.getBoundingClientRect();

      let left =
        coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не вылезать за левую границу окна

      let top = coords.top - tooltipElem.offsetHeight - 10;
      if (top < 0) {
        // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + "px";
      tooltipElem.style.top = top + "px";

      this.showingTooltip = tooltipElem;
    },
    del: elem => {
      if (this.showingTooltip) {
        document.body.removeChild(this.showingTooltip);
        this.showingTooltip = null;
      }
    }
}
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
    const tooltip = document.getElementsByClassName("color-pick");
    const allTooltipElem = Array.prototype.map.call(tooltip, elem => {
      elem.onmouseover = makeTooltip.make;
      elem.onmouseout = makeTooltip.del;
    });
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
