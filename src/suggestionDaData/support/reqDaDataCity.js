import suggestion from './httpDaData.js';

export default async (data, key) => {
	return await suggestion(
		'address',
		`{ "query": "${data}", 
        "count": 5 , 
        "from_bound":  { "value": "city" }, 
        "to_bound":  { "value": "settlement" } 
        }`,
		key
	);
};
