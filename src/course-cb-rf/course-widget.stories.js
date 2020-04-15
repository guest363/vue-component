import { storiesOf } from "@storybook/vue";
/* Addons to storybook */
import {
  withKnobs,
  array,
  boolean,
  text,
  number,
} from "@storybook/addon-knobs";
/* ------------------- */
import courseWidget from "./course-widget.vue";

export default {
  title: "Виджет с курсом валют полученных от ЦБ РФ",
  decorators: [withKnobs],
  component: courseWidget,
};

export const exampleWithKnobs = () => ({
  components: { courseWidget },
  props: {
    showHeader: {
      default: boolean("Show header", true),
    },
    textHeader: {
      default: text("Header", "Курсы валют"),
    },
    cash: {
      default: array("cash", ["USD", "EUR", "GBP"]),
    },
    round: {
      default: number("Округление", 1000),
    },
  },
  template: `<course-widget :showHeader='showHeader' :textHeader="textHeader" :cash="cash" :round="round"> </course-widget>`,
});
