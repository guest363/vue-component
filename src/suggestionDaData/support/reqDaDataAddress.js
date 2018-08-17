import suggestion from './httpDaData.js';

/**
 * Формирует правильный запрос для получения гранулированной подсказки адреса от сервиса DaData
 * @param {object} data Обьект содержащий поле Адрес и Фиас
 * @return {Array} Возвращает проммис который по завершению станет массивом из 5 подсказок адреса
 */
export default async (data, key) => {
	return await suggestion(
		'address',
		`{ "query": "${data.address}", 
            "count": 5 ,
            "from_bound":  { "value": "street" }, 
            "locations": [
            {
                "city_fias_id": "${data.fias}"
            }
            ], 
            "restrict_value": true
        }`,
		key
	);
};
