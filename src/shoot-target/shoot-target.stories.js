import { withKnobs, boolean, text } from "@storybook/addon-knobs";
/* ------------------- */
import shootTarget from "./shoot-target.vue";
import readme from "./readme.md";

export default {
  title: "История стрельб",
  decorators: [withKnobs],
  parameters: { notes: readme },
  component: shootTarget,
};

export const exampleWithKnobs = () => ({
  components: { shootTarget },
  props: {
    maxShoots: {
      default: text("Максимальное колличество выстрелов", "10"),
    },
    exercise: {
      default: text("Номер упражнения учебных стрельб.", "2"),
    },
  },
  methods: {
    print(item) {
      console.log(item);
    },
  },
  template: `
  <shoot-target @shoot="print" :maxShoots="maxShoots" :exercise="exercise" />
    `,
});
