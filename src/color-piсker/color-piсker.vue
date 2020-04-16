<template>
  <div class="wrapper">
    <div
      v-for="(item, index) in colors"
      v-on:click="$emit('colorPiked', whatIsSelect())"
      v-bind:key="index"
    >
      <div
        @mouseover="drawTooltip($event)"
        @mouseout="delTooltip($event)"
        @click="selectColor($event)"
        tabindex="-1"
        class="color-pick"
        v-bind:value="item"
        v-bind:style="{ background: item }"
      ></div>
    </div>
  </div>
</template>

<script>
import makeTooltip from "./support/tooltip.js";
import { propValidatorByDictionary } from "./support/propValidator.js";
const CLASS_NAME = "color-pick--select";
const RGB_HEX_HSLA_REG = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/;

export default {
  data() {
    return {
      selectedColors: new Map(),
    };
  },
  props: {
    colors: {
      type: Array,
      validator: function(value) {
        // Проверяет есть ли цвета в словаре, словарь для ускорения проверки
        return (
          value.every((element) => propValidatorByDictionary(element)) ||
          RGB_HEX_HSLA_REG.test(value)
        );
      },
      default: function() {
        return ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"];
      },
    },
  },
  methods: {
    /**
     * Возвращает массив выбранных цветов, тех эл. которые
     * содержат класс 'color-pick--select'
     *
     * @return {MapIterator} Массив выбранных цветов.
     */
    whatIsSelect() {
      return this.selectedColors.keys();
    },
    drawTooltip(event) {
      return makeTooltip.make(event.target);
    },
    delTooltip(event) {
      return makeTooltip.del(event.target);
    },
    /**
     * По клику добавляет\удаляет класс из переменной CLASS_NAME
     * и навешивает фокус
     *
     * @param {event} event Событие клика.
     */
    selectColor(event) {
      const target = event.target;
      const color = target.getAttribute("value");
      this.selectedColors.has(color)
        ? this.selectedColors.delete(color)
        : this.selectedColors.set(color, color);
      target.focus();
      target.classList.toggle(CLASS_NAME);
    },
  },
};
</script>

<style src="./css/index.less" lang="less" scoped></style>
