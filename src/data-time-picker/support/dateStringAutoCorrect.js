import dayInYear from './dayInYear.js';
/**
 * Автоматически корректирует переданную строку 
 * в человеко понятный формат даты
 *
 * @param {array} x Строка разбитая regExp на подстроки.
 * @param {number} maxYear Передонный при инициализации максимальный год.
 * @param {number} minYear Передонный при инициализации минимальный год.
 * @param {object} monthSelect DOM элемент в котором перечисленны месяца с англоизычным названием.
 * @param {object} fullDateInput DOM элемент input который валидируется.
 * @return {string} Нормализованная строка.
 */
const func = (x, maxYear, minYear, monthSelect, fullDateInput)  => {
    x[1] = (x[1] > 31) ? 31 : x[1]; 
    x[2] = (x[2] > 12) ? 12 : x[2]; 
    x[3] = (x[3] > maxYear) ? maxYear : x[3]; 
    if (x[2] > 1 && x[3] > minYear) {
      let maxDay = dayInYear(x[3], monthSelect.options[x[2] - 1].value);
      x[1] = (x[1] > maxDay) ? maxDay : x[1];
      fullDateInput.classList.remove("invalid-date-input");
    } else {
      fullDateInput.classList.add("invalid-date-input");
    }
    return !x[2] ? x[1] : x[1] + "." + x[2] + (x[3] ? "." + x[3] : "");
  };
  
  export default func;