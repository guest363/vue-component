# SVG loaders

Анимации загрузки в SVG

## Входные параметры

```
dataForLoaders: {
    type: "dots",
    number: 3,
    color: ["#f5f5f5", "#fff59b", "#6a5548"]
}
```
## Выходные параметры

```
Отсутствуют
```
## Инициализация

Пример:

```
<template>
  <div>
      <svg-loaders :prop="dataForLoaders"></svg-loaders>
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
      dataForLoaders: {
        type: "dots",
        number: 3,
        color: ["#f5f5f5", "#fff59b", "#6a5548"]
      }
    };
  },
};
</script>

```
## Установка

Достаточно скопировать файл с расширением "vue"

## Как выглядит
Пример с кругами

![Пример с кругами](https://github.com/guest363/vue-component/blob/master/svg-loaders/example/1.gif)

