import dayInYear from './dayInYear.js';

/**
 * Нормализует кол-во дней в select с днями до того ко-ва
 * сколько дней в месяце. 
 * Например: выбран 31 день января при смене на сентябрь день сменится на 30,
 * т.е. максимально возможный на этот месяц
 * 
 * @param {string} month Англоязычное название месяца.
 * @param {object} daySelect DOM элемент select с выбранным днем.
 * @param {object} yearSelect DOM элемент select с выбранным годом.
 * @param {string} previousDay Выбранный день до при предыдущем вызове функции.
 * @return {null}
 */
const func = (month, daySelect, yearSelect, previousDay) => {
    // delete the current set of <option> elements out of the
    // day <select>, ready for the next set to be injected
    // innerHTML much slower !
    while(daySelect.firstChild){
      daySelect.removeChild(daySelect.firstChild);
    }

    // Create variable to hold new number of days to inject
    let elementHTML;

    // inject the right number of new <option> elements into the day <select>
    /* ie11 ? didn't work
    var option = document.createElement('option');
    yearSelect.appendChild(option); */
    for (let i = 1; i <= dayInYear(yearSelect.value, month); i++) {
    elementHTML += `<option>${i}</option>`;
    }
    daySelect.innerHTML = elementHTML;


    // remember if selected last day of month
    if(previousDay) {
      let pD = (daySelect.options[previousDay - 1] !== null) ? previousDay - 1 :
               (daySelect.options[previousDay - 2] !== null) ? previousDay - 2 : previousDay - 4;
      daySelect.options[pD].selected = true;
    }
  };

  export default func;