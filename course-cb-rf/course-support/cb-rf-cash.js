/* Для парсинга выдачи ЦБ РФ приведено соотношение ID и валюты */
const cashTemplateName = {
    'USD': "R01235",
    'EUR': "R01239",
    'GBP': "R01035",
    'INR': "R01270",
    'JPY': "R01820",
    'KRW': "R01815"
};

/* Находят в XML файле значение курса и сокращенного названия валюты */
const getCashName = (xmlDoc, id) => {
    return xmlDoc.evaluate(`//Valute[@ID='${id}']`, xmlDoc, null,
        XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.children[1].innerHTML
};
const getCashValue = (xmlDoc, id) => {
    return xmlDoc.evaluate(`//Valute[@ID='${id}']`, xmlDoc, null,
        XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.children[4].innerHTML.replace(",", ".")
};

const roundCash = item => Math.round(item * 1000) / 1000;

/* Парсит XML документ и возващает массив обьектов вида
{
    name: '',
    current: '',
    previous: '',
    isGrow: ''
} 
Так как такой обьект требуется для виджета*/
/*  Еще стоит обратить внимание что функция каррирована 
    Первоначально она заполняет данные курса за текущий день и 
    список используемых валют.
    Затем она принимает данные курса за предыдужий день и 
    заполняет оставшиеся значения обьекта.
*/
export default (xmlDoc, cashName) => yesterdayValue => {
    return cashName.map(item => ({
        name: getCashName(xmlDoc, cashTemplateName[item]),
        current: roundCash(getCashValue(xmlDoc, cashTemplateName[item])),
        previous: roundCash(getCashValue(yesterdayValue, cashTemplateName[item])),
        isGrow: roundCash(getCashValue(xmlDoc, cashTemplateName[item])) > roundCash(getCashValue(yesterdayValue, cashTemplateName[item]))
    }));
};