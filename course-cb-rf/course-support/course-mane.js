import parceCash from './cb-rf-cash.js';
import {yesterday, dayReq} from './cb-rf-date.js';
import cbHttpReq from './cb-rf-cashDataHttp.js';
import dailyHttpReq from './cbr-xml-dailyDataHttp.js';

export default (cashName = ['USD', 'EUR']) => {
  const promise = new Promise((resolve, reject) => {
    const typeOfRequest = {
      'ЦБ': () => {
        /* today это частично примененная функция parceCash */
        cbHttpReq(parceCash, '', cashName, typeOfRequest).then(today =>{
          cbHttpReq(today, dayReq(yesterday), cashName, typeOfRequest).then(result => {
            resolve(result);
          });
        })
      },
      'cbr-xml-daily': () => {
        dailyHttpReq(cashName).then(result => resolve(result));
      }
    };
    /*  */
    typeOfRequest['ЦБ']();

  });

  return promise;
};