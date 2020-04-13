import { storiesOf } from "@storybook/vue";
/* Addons to storybook */
import { withKnobs, array } from "@storybook/addon-knobs";
/* ------------------- */
import colorPicker from "./color-piсker.vue";

export default {
  title: "Компонент выбора цвета",
  decorators: [withKnobs],
  component: colorPicker
};

export const defaultElem = () => ({
  components: { colorPicker },
  template: `<color-picker></color-picker>`
});

export const setColors = () => ({
  data: () => {
    return {
      color: ["black", "grey", "saddlebrown"]
    };
  },
  components: { colorPicker },
  template: `<color-picker :colors='color'></color-picker>`
});
export const exampleWithKnobs = () => ({
  components: { colorPicker },
  props: {
    color: {
      default: array("colors", [
        "black",
        "saddlebrown",
        "whitesmoke",
        "navajowhite"
      ])
    }
  },
  methods: {
    print(item) {
      console.log(item);
    }
  },
  template: `<color-picker v-on:colorPiked='print($event)' :colors='color'></color-picker>`
});
