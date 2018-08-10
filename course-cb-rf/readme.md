# course-widget

Компонент выводит курсы валют на текущую дату по отношению к рублю.
Данные получает с ЦБ РФ или в случае недоступности ЦБ РФ с сайта www.cbr-xml-daily.ru. 
Справа от курса отражается рост\падение по отношению к прошедшему дню.
Доступны курсы валют из списка: "USD", "EUR", "GBP", "INR", "JPY", "KRW".

В компонент встроены иконки с сайта fontello.
Поддерживает иконки:
    Доллар
    Евро
    Фунт
    Рупий
    Йен
    Рубли
    Биткоин
    Вон
    Стрелка вниз
    Стредка вверх

## Входные параметры по умолчанию

```
 prop: {
        showHeader: true,
        textHeader: 'Курсы валют',
        cash: ["USD", "EUR"]
  }
```
## Выходные параметры

```
Отсутствуют

```
## Инициализация

Пример:

```
<template>
  <div>
     <course-widget :prop='dataForCourse'> </course-widget>
  </div>
</template>

<script>
import courseWidget from './path/course-widget.vue.vue';

export default {
  name: "Name",
  components: {
    "course-widget": courseWidget
  },
  data: () => {
    return {
        dataForCourse: {
          showHeader: true,
          textHeader: 'Курсы валют',
          cash: ["USD", "EUR"]
        }
    };
  }
};
</script>

```
## Установка

Достаточно скопировать файл с расширением "vue" и папку course-support.

## Как выглядит
["USD", "EUR"]

![для двух валют](https://github.com/guest363/vue-component/blob/master/course-cb-rf/example/1.jpg)

["USD", "EUR", "GBP", "INR", "JPY", "KRW"]

![все валюты](https://github.com/guest363/vue-component/blob/master/course-cb-rf/example/2.jpg)
