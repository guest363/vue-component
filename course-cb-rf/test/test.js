const assert = require('assert');
import getCourse from '../course-support/course-mane.js';


describe('getCourse', function () {
    it('Получаем данные либо с сайта ЦБ либо с зеркала', function (done) {
        getCourse().then(item => {
         console.log(item);
        });
    })
})