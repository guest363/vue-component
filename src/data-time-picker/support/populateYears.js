/**
 * Добававдяет необходимое кол-во option 
 * в select с выбором года
 *
 * @param {object} yearSelect DOM элемент select в которвый нужно внести нужное кол-вл лет.
 * @return {null}
 */
const func = yearSelect => {
    // get this year as a number
    const date = new Date();
    const year = date.getFullYear();
    let elementHTML;

    // inject the right number of new <option> elements into the day <select>
    for (let i = 5; i > 0; i--) {
    elementHTML += `<option>${year-i}</option>`;
    }
    for (let i = 0; i <= 5; i++) {
    elementHTML += `<option>${year+i}</option>`;
    }
    yearSelect.innerHTML = elementHTML;
    // set current year
    yearSelect.options[5].selected = true;
  }

  export default func;