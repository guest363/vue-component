# Side Chapter

Компонент создает оглавление из тегов h1-h6 с возможностью быстрого перехода при клике.

## Входные параметры

```
 dataToChapter: {
       sourceID: 'IDOfElement'
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
      <side-chapter :data='dataToChapter'></side-chapter>
  </div>
</template>

<script>
import sideChapter from './path/side-chapter.vue';

export default {
  name: "Name",
  components: {
    "side-chapter": sideChapter,
  },
  data: () => {
    return {
      dataToChapter: {
            sourceID: 'IDOfElement'
      }
    };
  },
};
</script>

```
## Установка

Достаточно скопировать файл с расширением "vue"

## Как выглядит
На примере статьи

![пример на статье](https://github.com/guest363/vue-component/blob/master/side-chapter/example/1.jpg)

