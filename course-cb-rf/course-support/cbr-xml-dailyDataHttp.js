const xhr = new XMLHttpRequest();

export default cashName => {
    const promise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            // Ждем пока запрос не завершиться
            if (xhr.status != 200) {
                console.log(`ошибка ${(xhr.status ? xhr.statusText : 'запрос не удался')}`);
            } else {
                try {
                    const roundCash = (name, val) => Math.round(respons.Valute[name][val] * 1000) / 1000;
                    const isGrow = name => roundCash(name, 'Value') > roundCash(name, 'Previous');
                    const respons = JSON.parse(xhr.responseText);
                    const obj = cashName.map(item => ({
                        'name': item,
                        current: roundCash(item, 'Value'),
                        previous: roundCash(item, 'Previous'),
                        isGrow: isGrow(item)
                    }));
                    resolve(obj);
                } catch (error) {
                    console.log(`Данные не могут быть переведены в нужный формат ${error}`);
                    reject(new Error(""));
                }
            }
        };
        xhr.open(
            "GET",
            "https://www.cbr-xml-daily.ru/daily_json.js",
            true
        );
        xhr.send();
    });
    return promise;
};