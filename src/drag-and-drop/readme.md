# Drag-and-Drop для изображений и перевода их в base64

Компонент создает поле в которое можно перемещать drag-and-drop изображения или же выбирать их через меню проводника.

Из переданных изображений формируется превью а сами они доступны в base64 для дальнейшего использования

## Зависимости

Сompressorjs

```
import Compressor from "compressorjs";
```

## Входные параметры

```js
 {
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
  }
```

## Выходные параметры

"Эмитет 2 события:

- dropImage - здесь закодированный в base64 оригинал
- dropThumbnail - здесь сжатая превью

## Инициализация

Пример:

```js
<template>
  <div>
     <drag-and-drop @dropThumbnail="setPhoto" />
  </div>
</template>

<script>
import dnd from './path/drag-and-drop.vue';

export default {
  components: {
    "drag-and-drop": dnd,
  },
  methods: {
    setPhoto(base64) {
      this.person.photo = base64;
    }
  }
};
</script>

```


## Как выглядит

Инициализированный эллемент

![инит](https://github.com/guest363/vue-component/blob/master/drag-and-drop/example/1.jpg)

Загруженно несколько картинок

![несколько картинок](https://github.com/guest363/vue-component/blob/master/drag-and-drop/example/2.jpg)
