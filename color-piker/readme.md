# Color-piker

Компонент выводит палитру заданных цветов. 

По цветам можно кликать, компонент возвращает названия выбранных цветов. 

Цвета задаются через имя, список html цветов можно посмотреть здесь [здесь](http://vvz.nw.ru/Lessons/HTML_Colors/HTMLcolors_HSB.htm). 

При наведении на элемент цвета всплывает подсказда с его русским наименованием.

В родительском элементе указываем свойство, например colorPiked, куда компонент будет передавить массив из выбранных цветов.

## Входные параметры

```
{
    color: ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]
}
```
## Выходные параметры

```
["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]
```
## Инициализация

Пример:

```
<template>
  <div>
    <color-picker :data='dataForColorPiker' v-on:colorPiked="colorPiked = $event"></color-picker>
  </div>
</template>

<script>
import colorPicker from '/path/color-piker.vue';

export default {
  name: "Name",
  data: () => {
    return {
        colorPiked: '',
        dataForColorPiker: {
            color: ["black", "grey", "saddlebrown"]
        }
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
## Установка

Достаточно скопировать файл с расширением "vue"
## Как выглядит
Для таких входных параметров ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]

![5 цветов ](https://github.com/guest363/vue-component/blob/master/color-piker/exemple/1.jpg)

При клике по нескольким элементам

![несколько кликов](https://github.com/guest363/vue-component/blob/master/color-piker/exemple/2.jpg)

При наведении на эллемент

![При наведении](https://github.com/guest363/vue-component/blob/master/color-piker/exemple/3.jpg)