import {
  withKnobs,
  boolean,
  text,
  object,
  select,
} from "@storybook/addon-knobs";
/* ------------------- */
import customInput from "./custom-input.vue";
import readme from "./readme.md";

export default {
  title: "Кастомный input",
  decorators: [withKnobs],
  parameters: { notes: readme },
  component: customInput,
};

export const exampleWithKnobs = () => ({
  components: { customInput },
  data() {
    return {
      text: "",
    };
  },
  props: {
    textLabel: {
      default: text("Подпись поля ввода", "Логин"),
    },
    dadataType: {
      default: text("Тип автоподсказки для dadata", ""),
    },
    value: {
      default: text("Значение", ""),
    },
    placeholder: {
      default: text("Плэйсхолдер", "Placeholder"),
    },
    pattern: {
      default: text("Паттерн ввода", ""),
    },
    rows: {
      default: text("Если это textarea то колличество строк", "10"),
    },
    readonly: {
      default: boolean("Только для чтения", false),
    },
    /**
     * При помощи Cleave.js автоматически форматирует вводимую информацию
     * https://nosir.github.io/cleave.js/
     * @param {object} obj - параметри смотреть по ссылке
     */
    formatterExapmle: {
      default: select("Форматирование для cleave", {
        phone: {
          phone: true,
          phoneRegionCode: "{RU}",
        },
        date: {
          date: true,
          delimiter: "-",
          datePattern: ["Y", "m", "d"],
        },
        time: {
          time: true,
          timePattern: ["h", "m", "s"],
        },
        customOpt: {
          blocks: [4, 3, 3, 4],
          uppercase: true,
        },
        delimer: {
          delimiters: [".", ".", "-"],
          blocks: [3, 3, 3, 2],
          uppercase: true,
        },
        prefix: {
          prefix: "PREFIX",
          delimiter: "-",
          blocks: [6, 4, 4, 4],
          uppercase: true,
        },
      }),
    },
    maxlength: {
      default: text("Максимальная длина", "40"),
    },
    cols: {
      default: text("Если это textarea то колличество колонок", "10"),
    },
    disabled: {
      default: boolean("Заблокирован ли ввод", false),
    },
    required: {
      default: boolean("Обязателен ли ввод", false),
    },
    type: {
      default: select("Тип", ["text", "number", "tel", "password" ,"email", "url", "textarea"]),
    },
  },
  template: ` <custom-input
  :textLabel="textLabel"
  :value="value"
  :placeholder="placeholder"
  :pattern="pattern"
  :row="rows"
  :readonly="readonly"
  :formatter="formatterExapmle"
  :maxlength="maxlength"
  :cols="cols"
  :disabled='disabled'
  :required="required"
  :type="type"
  v-model="text"
/> `,
});
