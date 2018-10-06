<template>
<div class="color-picker-wrap">
    <div v-for="(item, index) in data.color" v-on:click="$emit('colorPiked', whatIsSelect())" v-bind:key="index">
        <div tabindex="-1" class="color-pick" v-bind:value="item" v-bind:style="{ background: item }"></div>
    </div>
</div>
</template>

<script>
import makeTooltip from "./support/tooltip.js";
import onPickAction from "./support/onPickAction.js";
import propValidator from "./support/propValidator.js";

export default {
  props: {
    data: {
      type: Object,
      validator: function(value) {
        // Проверяет есть ли цвета в словаре
        let isCorrect = true;
        value.color.forEach(element => {
          if (!propValidator(element)) {
            isCorrect = false;
            throw new Error("допустимы только значения определенных цветов, см. colorDictionary.js");
          }
        });
        return isCorrect;
      },
      default: function() {
        return {
          color: ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]
        };
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

<style scoped>
.color-picker-wrap {
  display: flex;
  margin: 28px auto;
  justify-content: center;
  align-items: center;
  height: 36px;
}

.color-pick {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 9px;
  flex-shrink: 0;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.color-pick:focus {
  outline: none;
}

.color-pick--select {
  width: 36px;
  height: 36px;
  margin: 0 4px;
}

.color-pick::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  padding-top: 100%;
}
</style>
