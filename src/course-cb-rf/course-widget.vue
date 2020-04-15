<template>
  <div class="cash">
    <h5 class="cash--header" v-show="showHeader">
      {{ textHeader }}
    </h5>
    <div v-for="item in cashVaule" v-bind:key="item.name">
      <div class="cash--value">
        <span class="cash--value--ico" :class="iconClass(item.name)"></span>
        <span class="cash--value--text">{{ item.current }}</span>
        <span class="cash--value--isgrow" :class="isGrow(item.isGrow)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import curs from "./course-support/course-main.js";

export default {
  data: () => {
    return {
      cashVaule: "",
      updateInterval: "",
    };
  },
  props: {
    showHeader: {
      type: Boolean,
      default: true,
    },
    textHeader: {
      type: String,
      default: "Курсы валют",
    },
    cash: {
      type: Array,
      default: ["USD", "EUR"],
      validator(cash) {
        return cash.every(
          (element) =>
            ["USD", "EUR", "GBP", "INR", "JPY", "KRW"].indexOf(element) !== -1
        );
      },
    },
    round: {
      type: Number,
      default: 1000,
    },
  },
  methods: {
    iconClass(item) {
      return `icon-${item}`;
    },
    isGrow(item) {
      if (item === "unset") return "";
      return item ? `icon-up` : `icon-down`;
    },
  },
  mounted() {
    curs(this.cash, this.round).then((item) => (this.cashVaule = item));
    /* Обновление курсов каждые 10 минут */
    this.updateInterval = setInterval(() => {
      curs(this.cash, this.round).then((item) => (this.cashVaule = item));
    }, 600000);
  },
  updated() {
    clearInterval(this.updateInterval);
    curs(this.cash, this.round).then((item) => (this.cashVaule = item));
    /* Обновление курсов каждые 10 минут */
    this.updateInterval = setInterval(() => {
      curs(this.cash, this.round).then((item) => (this.cashVaule = item));
    }, 600000);
  },
  beforeDestroy() {
    clearInterval(this.updateInterval);
  },
};
</script>

<style src="./css/index.less" lang="less" scoped></style>
