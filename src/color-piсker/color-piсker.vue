<template>
  <div class="color-picker-wrap">
    <div
      v-for="(item, index) in colors"
      v-on:click="$emit('colorPiked', whatIsSelect())"
      v-bind:key="index"
    >
      <div
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
import onPickAction from "./support/onPickAction.js";
import propValidator from "./support/propValidator.js";

export default {
  props: {
    colors: {
      type: Array,
      validator: function(value) {
        // Проверяет есть ли цвета в словаре
        let isCorrect = true;
        value.forEach(element => {
          if (!propValidator(element)) {
            isCorrect = false;
            throw new Error(
              "допустимы только значения определенных цветов, см. colorDictionary.js"
            );
          }
        });
        return isCorrect;
      },
      default: function() {
        return ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"];
      }
    }
  },
  methods: {
    whatIsSelect: () => {
      return onPickAction.whatIsSelect();
    }
  },
  mounted() {
    onPickAction.makePiker("color-pick");
    const tooltip = document.getElementsByClassName("color-pick");
    const allTooltipElem = [].map.call(tooltip, elem => {
      elem.onmouseover = makeTooltip.make;
      elem.onmouseout = makeTooltip.del;
    });
  }
};
</script>

<style src="./css/index.less" lang="less"></style>
