/**
 * Определяет сколько дней должно быть в месяце
 * с учетом выскокосности года.
 *
 * @param {number} year Год.
 * @param {string} month Англоязычное название месяца.
 * @return {number} Колличество дней.
 */
const func = (year, month) => {
	// 31 or 30 days?
	if (
		month === 'January' ||
		month === 'March' ||
		month === 'May' ||
		month === 'July' ||
		month === 'August' ||
		month === 'October' ||
		month === 'December'
	) {
		return 31;
	} else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
		return 30;
	} else {
		// If month is February, calculate whether it is a leap year or not
		const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		return leap ? 29 : 28;
	}
};
export default func;