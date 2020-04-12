import { storiesOf } from "@storybook/vue";
import { withKnobs, array } from "@storybook/addon-knobs";
import colorPicker from "./color-piсker.vue";

export default { title: "Выбор цвета", decorators: [withKnobs] };

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
  template: `<color-picker :colors='color'></color-picker>`
});
