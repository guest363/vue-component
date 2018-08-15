/**
 * Получает подсказки по адресу или городу от сервиса DaData
 * 
 * @param {string} type Тип запроса 'address'
 * @param {string} query Запрос нужного формата для гранулированных подсказок
 * @param {string} token Токен полученный при регистрации на сайте DaData
 * @return {Array} Возвращает проммис который по завершению станет массивом из 5 подсказок 
 * выбранного типа
 */
export default (type, query, token) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let respons;
    xhr.open(
      'POST',
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/' + type,
      true,
    );
    xhr.setRequestHeader('Content-Type', 'application/json'); xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Authorization', `Token ${token}`);
    xhr.timeout = 1000; // 1c. для асинхронного запроса
    xhr.ontimeout = () => {
      console.error(`Превышено время ожидание ответа ${xhr.timeout}`);
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState != 4) return;
      // Ждем пока запрос не завершиться
      if (xhr.status != 200) {
        console.error(
          `ошибка ${xhr.status ? xhr.statusText : 'запрос не удался'}`,
        );
      } else {
        try {
          respons = JSON.parse(xhr.responseText);
          resolve(respons);
        } catch (error) {
          console.error(`Данные не могут быть переведены в формат JSON ${error}`);
          reject(new Error(''));
        }
      }
    };
    xhr.send(query);
  });

  return promise;
};