# Кастомный input

Легко настраиваемый компонент инпута с возможностью подсказок от dadata.

## Зависимости

- axios
- cleave.js

## Входные параметры

```js
  props: {
    textLabel: String,
    onEnter: {
      type: Function,
      default: null,
    },
    dadataType: {
      type: String,
      default: null,
    },
    value: "",
    placeholder: String,
    pattern: String,
    rows: String,
    max: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * При помощи Cleave.js автоматически форматирует вводимую информацию
     * https://nosir.github.io/cleave.js/
     * @param {object} obj - параметри смотреть по ссылке
     */
    formatter: {
      type: Object,
      default() {
        return {};
      },
    },
    maxlength: {
      default: 500,
    },
    cols: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        return [
          "text",
          "number",
          "password",
          "email",
          "tel",
          "url",
          "textarea",
        ].indexOf(value) !== -1
          ? true
          : console.error(
              `Параметры могут быть только "text", "number", "tel", "password" ,"email", "url" или "textarea"`
            );
      },
    },
  },
```

## Инициализация

Такой частоиспользуемый компонент лучше сделать глобальным. В index.js

```js
/* Свои компоненты с глобальной регистрацией */
import customInput from "./components/custom-html/custom-input.vue";
Vue.component("custom-input", customInput);
```

Пример использования:

```js
<template>
  <div>
    <custom-input
            :textLabel="`Логин`"
            :placeholder="`ivanov490`"
            :maxlength="`30`"
            :required="true"
            v-model="user.login"
            :type="`text`"
          />
  </div>
</template>

<script>

export default {
  name: "Name",
  data: () => {
    return {
         user: {
          displayName: "",
          login: "",
          password: "",
        }
    };
  },
};
</script>

```

## Как выглядит

В окне авторизации

![В окне авторизации ](https://github.com/guest363/vue-component/blob/master/custom-input/example/1.jpg)
