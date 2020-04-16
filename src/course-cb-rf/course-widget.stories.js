import {
  withKnobs,
  array,
  boolean,
  text,
  number,
} from "@storybook/addon-knobs";
/* ------------------- */
import courseWidget from "./course-widget.vue";
import readme from "./readme.md";

export default {
  title: "Виджет с курсом валют полученных от ЦБ РФ",
  decorators: [withKnobs],
  parameters: { notes: readme },
  component: courseWidget,
};

export const exampleWithKnobs = () => ({
  components: { courseWidget },
  props: {
    showHeader: {
      default: boolean("Показывать заголовок", true),
    },
    textHeader: {
      default: text("Заголовок", "Курсы валют"),
    },
    cash: {
      default: array("Список валют", ["USD", "EUR", "GBP"]),
    },
    cashAll: {
      default: array("Список всех доступных валют", ["USD", "EUR", "GBP", "INR", "JPY", "KRW"]),
    },
    round: {
      default: number("Округление", 1000),
    },
  },
  template: `<course-widget :showHeader='showHeader' :textHeader="textHeader" :cash="cash" :round="round"> </course-widget>`,
});
