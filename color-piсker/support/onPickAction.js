export default {
  colorElemts: '',
  className: 'color-pick--select',
  /**
   * По клику добавляет\удаляет класс class: 'color-pick--select
   *
   * @param {event} event Событие кликау.
   */
  click: className => event => {
    event.target.focus();
    event.target.isSelect = !event.target.isSelect;
    if (event.target.isSelect === true) {
      event.target.classList.add(className);
      return;
    } 
    event.target.classList.remove(className);
  },
  /**
   * Возвращает массив выбранных цветов, тех эл. которые
   * содержат класс 'color-pick--select'
   *
   * @return {Array} Массив выбранных цветов.
   */
  whatIsSelect: function () {
    return this.colorElemts.reduce((acc, elem) => {
      if (elem.classList.contains(this.className)) {
        return [...acc, elem.getAttribute("value")];
      } else return acc;
    }, []).reverse();
  },
  /**
   * Навешивает событие click на каждый элемент цвета
   *
   * @param {string} elementClassName Название имени класса на эл. которого
   * навешать событие
   */
  makePiker: function (elementClassName) {
    this.colorElemts = [].slice.call(
      document.getElementsByClassName(elementClassName)
    );
    this.colorElemts.forEach(element => {
      element.addEventListener("click", this.click(this.className), false);
      element.isSelect = false;
    });
  }
};
