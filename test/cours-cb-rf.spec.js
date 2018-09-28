// Импортируем Vue и тестируемый компонент
require('jasmine-ajax');
import {
    mount
} from 'vue-test-utils';
import courcCB from '../src/course-cb-rf/course-widget.vue';
import httpDaily from '../src/course-cb-rf/course-support/cbr-xml-dailyDataHttp.js';
import httpCB from '../src/course-cb-rf/course-support/cb-rf-cashDataHttp.js';


describe('Тестируем HTTP запрос к ЦБ РФ', () => {
    beforeEach(function () {
        jasmine.Ajax.install();
    });
    afterEach(function () {
        jasmine.Ajax.uninstall();
    });
    it('Запрос должен хоть как-то завершиться', async () => {
        const req = [x => x, '', ['EUR']];
        await httpCB(req);
        expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://cors-anywhere.herokuapp.com/www.cbr.ru/scripts/XML_daily.asp');
    });
});

/* describe('Тестируем HTTP запрос к www.cbr-xml-daily.ru', () => {
    it('Запрос должен хоть как-то завершиться', async () => {
        const cashArr = ['EUR'];
        await expectAsync(httpDaily(cashArr)).toBeResolved();
      });
});
 */

/* 
describe(`Тестирование виджета курса`, () => {
    const wrapper = mount(courcCB, {
      attachToDocument: true
    });
  
    it('Установлены параметры по умолчанию', () => {
      const defaultData = wrapper.props().prop;
      expect(defaultData.cash).toEqual(["USD", "EUR"]);
    });
    
    it('Проверяем что данные получаются хотябы из одного источника', () => {
        const cashValue = wrapper.vm.$data.cashValue;
        expect(cashValue).toBe(!void 0);
    });
  
    wrapper.destroy();
  });
  
describe(`Валидация входных параметров виджета`, () => {
    it('установить новые корректные входные параметры', () => {
      const wrapper = mount(courcCB, {
        propsData: {
          prop: {
            cash: ["EUR"],
            round: 10
          }
        }
      });
      expect(wrapper.props().prop.cash).toEqual(["EUR"])
    });
  
    it('Ошибка при установки несуществующей валюты', () => {
      expect(function () {
        mount(courcCB, {
          propsData: {
            prop: {
              cash: ["der122"],
              round: 10
            }
          }
        });
      }).toThrow(new Error('допустимы только значения из множества "USD", "EUR", "GBP", "INR", "JPY", "KRW"'));
    });

    it('Установлена только валюта а округление не задано', () => {
        expect(function () {
          mount(courcCB, {
            propsData: {
              prop: {
                cash: ["EUR"],
              }
            }
          });
        }).toThrow(new Error('параметр round должен быть числом!'));
      });

      it('Установлены только не обязательные параметры', () => {
        expect(function () {
          mount(courcCB, {
            propsData: {
              prop: {
                showHeader: true,
                textHeader: "Курсы валют",
              }
            }
          });
        }).toThrow(new Error('cash должен быть массивом!'));
      });
  }); */