import xmlParcer from './xml-parcer.js';
const xhr = new XMLHttpRequest();

export default (parceFunc, day, cashName, obj) => {
    const promise = new Promise((resolve, reject) => {
    xhr.open(
        "GET",
        `https://cors-anywhere.herokuapp.com/www.cbr.ru/scripts/XML_daily.asp${day}`,
        true
    );
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;
        // Ждем пока запрос не завершиться
        if (xhr.status != 200) {
            console.log(`ошибка ${(xhr.status ? xhr.statusText : 'запрос не удался')}`);
            console.log('Получить данные с сайта ЦБ РФ не вышло, загружаю данные с cbr-xml-daily');
            obj['cbr-xml-daily']();
        } else {
            try {
                const xmlDoc = xmlParcer(xhr.responseText);
                resolve(parceFunc(xmlDoc, cashName));
            } catch (error) {
                console.log(`Данные не могут быть переведены в нужный формат ${error}`);
                reject(new Error(""));
            }
        }
    };


    xhr.setRequestHeader("Origin", 'http://www.cbr.ru');
    xhr.send();
    });
    return promise;
}