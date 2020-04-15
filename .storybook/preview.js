import "@storybook/addon-console";
import { addParameters } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/vue";

addParameters({
  docs: {
    inlineStories: true
  }
});

addParameters({
  backgrounds: [
    { name: "default", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ]
});

addDecorator(withKnobs);


