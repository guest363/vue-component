import { withKnobs, boolean, text } from "@storybook/addon-knobs";
/* ------------------- */
import dragAndDrop from "./drag-and-drop.vue";
import readme from "./readme.md";

export default {
  title: "Drag-and-Drop для изображений и перевода их в base64",
  decorators: [withKnobs],
  parameters: { notes: readme },
  component: dragAndDrop,
};

export const exampleWithKnobs = () => ({
  components: { dragAndDrop },
  props: {
    showButton: {
      default: boolean("Показывать кнопку загрузки", true),
    },
    showLimits: {
      default: boolean("Показывать ограничения", true),
    },
    textButton: {
      default: text("Текст кнопки", "Выбрать изображения"),
    },
    textMain: {
      default: text("Основной текст", "Перетащите или выберите изображение"),
    },
    textLimits: {
      default: text("Текст ограничений", "Файлы до 2 мегабайт"),
    },
  },
  methods: {
    print(item) {
      console.log(item);
    },
  },
  template: `<drag-and-drop @dropThumbnail="print" :showButton='showButton' :showLimits="showLimits" :textButton="textButton" :textMain="textMain" :textLimits="textLimits" />`,
});
