/**
 * Автоматически корректирует переданную строку 
 * в человеко понятный формат времени
 *
 * @param {array} x Строка разбитая regExp на подстроки.
 * @param {object} fullDateInput DOM элемент input который валидируется.
 * @return {string} Нормализованная строка.
 */
const func = (x, timeInput)  => {
    x[1] = (Number(x[1]) > 23) ? '00' : x[1]; 
    x[2] = (Number(x[2]) > 59) ? '00' : x[2]; 
    return !x[2] ? x[1] : x[1] + ":" + x[2];
  };
  
  export default func;