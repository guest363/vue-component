# SVG loaders

Анимации загрузки в SVG

## Входные параметры

```js
 props: {
    type: {
      type: String,
      default: "dots",
    },
    number: {
      type: Number,
      default: 3,
    },
    colors: {
      type: Array,
      default: ["#fff59b", "#6a5548", "#f5f5f5"],
    },
  },
```

## Выходные параметры

```
Отсутствуют
```

## Инициализация

Пример:

```js
<template>
  <div>
      <svg-loaders :type="type" :number="number" :color="color"></svg-loaders>
  </div>
</template>

<script>
import sideChapter from './path/side-chapter.vue';

export default {
  name: "Name",
  components: {
    "svg-loaders": svgLoaders
  },
  data: () => {
    return {
     type: "dots",
     number: 3,
     color: ["#f5f5f5", "#fff59b", "#6a5548"]
    };
  },
};
</script>

```

## Как выглядит

Пример с кругами

![Пример с кругами](https://github.com/guest363/vue-component/blob/master/svg-loaders/example/1.gif)
