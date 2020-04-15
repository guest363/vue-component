# Компоненте выбора цвета

Компонент выводит палитру заданных цветов. Цвета можно задавать обычными словами (список в файле colorDictionary.js), в форматах rgb, hex, hsla;

По цветам можно кликать, компонент возвращает названия выбранных цветов.

При наведении на элемент цвета всплывает подсказда с его русским наименованием или если цвет задан через rgb, hex или hsla то выводятся их значения.

Эмитет событие 'colorPiked' c массивом выбранных цветов.

## Входные параметры

```js
{
  colors: ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"];
}
```

## Выходные параметры

```js
["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"];
```

## Инициализация

Пример:

```js
<template>
  <div>
    <color-picker :colors='color' v-on:colorPiked="colorPiked = $event"></color-picker>
  </div>
</template>

<script>
import colorPicker from '/path/color-piсker.vue';

export default {
  name: "Name",
  data: () => {
    return {
        colorPiked: '',
        color: ["black", "grey", "saddlebrown"]
    };
  },
  components: {
        "color-picker": colorPicker,
  },
  methods: {

  },
  mounted() {}
};
</script>

```

## Доступные человекочитаемые цвета

```js
{
  black: "черный",
  dimgray: "тускло-серый",
  grey: "серый",
  darkgray: "темно-серый",
  silver: "серебристый",
  lightgrey: "светло-серый",
  gainsboro: "Гейнсборо",
  whitesmoke: "дымчатый",
  white: "белый",
  snow: "снежный",
  rosybrown: "розово-коричневый",
  lightcoral: "светло-коралловый",
  indianred: "индийский красный",
  brown: "коричневый",
  firebrick: "кирпичный",
  maroon: "густой красно-коричневый",
  darkred: "темно-красный",
  red: "красный",
  salmon: "лососевый",
  mistyrose: "туманно-розовый",
  tomato: "томатный",
  darksalmon: "темно-лососевый",
  coral: "коралловый",
  orangered: "оранжево-красный",
  lightsalmon: "светло-лососевый",
  sienna: "сиена (охра)",
  seashell: "морской раковины",
  saddlebrown: "кожаного седла",
  chocolate: "шоколадный",
  peachpuff: "персиковый",
  sandybrown: "рыжеватый",
  linen: "льняной",
  peru: "Перу",
  bisque: "бисквитный (светло-коричневый)",
  darkorange: "темно-оранжевый",
  antiquewhite: "древний (античный) белый",
  tan: "дубильной коры (желтовато-коричневый)",
  burlywood: "плотной древесины",
  blanchedalmond: "миндальный (чищеного миндаля)",
  navajowhite: "навахо белый",
  papayawhip: "побега папайи",
  moccasin: "мокасиновый",
  oldlace: "старого кружева",
  wheat: "пшеничный",
  orange: "оранжевый",
  floralwhite: "цветочно-белый",
  goldenrod: "золотисто-красный",
  darkgoldenrod: "темный золотисто-красный",
  cornsilk: "молодой кукурузы  ",
  gold: "золотистый",
  lemonchiffon: "лимонного шифона",
  khaki: "хаки",
  palegoldenrod: "бледный золотисто-красный",
  darkkhaki: "темный хаки",
  ivory: "слоновой кости",
  beige: "беж",
  lightyellow: "светло-желтый",
  olive: "оливковый",
  yellow: "желтый",
  olivedrab: "нежно-оливковый",
  yellowgreen: "желто-зеленый",
  darkolivegreen: "темный оливково-зеленый",
  greenyellow: "зелено-желтый",
  lawngreen: "зеленой лужайки",
  chartreuse: "шартрез (бледно-зеленый)",
  honeydew: "медовой росы",
  darkseagreen: "темный морской волны",
  lightgreen: "светло-зеленый",
  palegreen: "бледно-зеленый",
  forestgreen: "лесной зелени",
  limegreen: "зеленого лайма  ",
  darkgreen: "темно-зеленый",
  green: "зеленый",
  lime: "лайма  ",
  seagreen: "морской волны",
  mediumseagreen: "умеренный морской волны",
  mintcream: "мятного крема",
  springgreen: "весенней зелени",
  mediumspringgreen: "умеренный весенней зелени",
  mediumaquamarine: "умеренный аквамариновый",
  aquamarine: "аквамариновый (зеленовато-голубой)",
  turquoise: "бирюзовый",
  lightseagreen: "светлый морской волны",
  mediumturquoise: "умеренный бирюзовый",
  azure: "лазурный",
  paleturquoise: "бледно-бирюзовый",
  darkslategray: "темный аспидно-серый (темно-синевато-серый)",
  teal: "чирок",
  darkcyan: "темно-циановый",
  aqua: "морской волны",
  cyan: "циановый",
  lightcyan: "светло-циановый",
  darkturquoise: "темно-бирюзовый",
  cadetblue: "синий кадет",
  powderblue: "голубой пороши",
  lightblue: "светло-голубой",
  deepskyblue: "насыщенный небесно-голубой",
  skyblue: "небесно-голубой",
  lightskyblue: "светлый небесно-голубой",
  steelblue: "голубовато-стальной",
  aliceblue: "Алиса синяя",
  slategray: "аспидно-серый",
  lightslategray: "светлый аспидно-серый",
  dodgerblue: "синяя уловка",
  lightsteelblue: "светлый голубовато-стальной",
  cornflowerblue: "васильковый",
  royalblue: "королевский голубой",
  ghostwhite: "призрачно-белый",
  lavender: "лавандовый (бледно-лиловый)",
  midnightblue: "синей полночи",
  navy: "флотский",
  darkblue: "темно-синий",
  mediumblue: "умеренный голубой (синий)",
  blue: "голубой (синий)",
  darkslateblue: "темный аспидно-синий",
  slateblue: "аспидно-синий",
  mediumslateblue: "умеренный аспидно-синий",
  mediumpurple: "умеренный пурпурный",
  blueviolet: "сине-фиолетовый",
  indigo: "индиго",
  darkorchid: "темно-лиловый",
  darkviolet: "темно-фиолетовый",
  mediumorchid: "умеренный лиловый",
  thistle: "чертополоха",
  plum: "сливовый (темно-фиолетовый с оттенками бордового)",
  violet: "темно-лиловый, фиолетовый",
  purple: "пурпурный  ",
  darkmagenta: "темный фуксин",
  fuchsia: "фуксии",
  magenta: "фуксин, красная анилиновая краска",
  orchid: "лиловый",
  mediumvioletred: "умеренный лилово-красный",
  deeppink: "насыщенный розовый",
  hotpink: "яркий розовый",
  lavenderblush: "лавандового румянца",
  palevioletred: "бледный лилово-красный",
  crimson: "малиновый, темно-красный, кармазинный",
  pink: "розовый",
  lightpink: "светло-розовый"
};
```

## Как выглядит

Для таких входных параметров ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]

![5 цветов ](https://github.com/guest363/vue-component/blob/master/color-piker/example/1.jpg)

При клике по нескольким элементам

![несколько кликов](https://github.com/guest363/vue-component/blob/master/color-piker/example/2.jpg)

При наведении на эллемент

![При наведении](https://github.com/guest363/vue-component/blob/master/color-piker/example/3.jpg)
