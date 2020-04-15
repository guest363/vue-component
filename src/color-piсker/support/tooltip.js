import dictionary from "./colorDictionary.js";

export default {
  showingTooltip: null,
  make: function(target) {
    const tooltipElem = document.createElement("div");

    const colorName = target.getAttribute("value");
    const set = {
      style: style => {
        style.position = "fixed";
        style.padding = "5px";
        style.margin = "0";
        style.border = "1px solid #7d7d7d";
        style.textAlign = "center";
        style.color = "#353434";
        style.background = "#fff";
        style.boxShadow = "1px rgba(0, 0, 0, .3)";
        style.maxWidth = "200px";
        style.fontSize = "12px";
      },
      coordinate: (coordinate, offset) => {
        const colorWidth = target.offsetWidth;
        const tooltipWigth = tooltipElem.offsetWidth;
        const tooltipHeight = tooltipElem.offsetHeight;

        const realLeft = coordinate.left + (colorWidth - tooltipWigth) / 2;
        const normolizeLeft = realLeft < 0 ? 0 : realLeft;
        const top = coordinate.top - tooltipHeight - 9;

        offset.left = normolizeLeft + "px";
        offset.top = top + "px";
      }
    };

    set.style(tooltipElem.style);
    tooltipElem.innerHTML = dictionary[colorName] || colorName;
    target.appendChild(tooltipElem);
    set.coordinate(target.getBoundingClientRect(), tooltipElem.style);
    this.showingTooltip = tooltipElem;
  },
  del: function(target) {
    if (this.showingTooltip) {
      target.removeChild(this.showingTooltip);
      this.showingTooltip = null;
    }
  }
};
