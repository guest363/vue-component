<template>
  <div id="wrapper"></div>
</template>

<script>
const type = {
  dots: function() {
    const addDomElement = (rootElem, number, color) => {
      const svgNS = "http://www.w3.org/2000/svg";
      const fragment = document.createDocumentFragment();
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", 300);
      svg.setAttribute("height", 150);
      for (let index = 0; index < number; index++) {
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttributeNS(null, "class", "circle");
        const position = () => {
          if (number % 2 > 0) {
            return (
              300 / 2 -
              number * 30 +
              (((number - 1) / 2) * 30 + 15) +
              15 +
              index * 30
            );
          } else
            return 300 / 2 - number * 30 + (number / 2) * 30 + 15 + index * 30;
        };
        circle.setAttributeNS(null, "cx", position());
        circle.setAttributeNS(null, "cy", 75);
        circle.setAttributeNS(null, "r", "10");
        circle.style.fill = color[index];
        fragment.appendChild(circle);
      }
      svg.appendChild(fragment);
      rootElem.appendChild(svg);
    };
    const loaderInit = () => {
      const circle = Array.prototype.slice.call(
        document.getElementsByClassName("circle")
      ); //remember
      let currentAnimationTime = 0;
      const centreY = 75;
      const animate = () => {
        circle.reduce((latency, c) => {
          c.setAttribute(
            "cy",
            centreY + 20 * Math.sin(currentAnimationTime + latency)
          );
          return latency + 1;
        }, 0);
        currentAnimationTime += 0.15; //speed
        requestAnimationFrame(animate);
      };
      animate();
    };

    addDomElement(this.wrapper, this.number, this.color);
    loaderInit();
  },
};

const SVGloaders = {
  name: "SVGloaders",
  props: {
    type: {
      type: String,
      default: "dots",
    },
    number: {
      type: Number,
      default: 3,
    },
    colors: {
      type: Array,
      default: ["#fff59b", "#6a5548", "#f5f5f5"],
    },
  },
  mounted() {
    this.wrapper = this.$el;
    this.type[this.type].call(this);
  },
};
export default SVGloaders;
</script>

<style scoped>
#wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
