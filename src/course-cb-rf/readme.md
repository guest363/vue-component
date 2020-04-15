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

Все параметры опциональные

```
    showHeader: true, // Видимость заголовка
    textHeader: 'Курсы валют', // Текст заголовка
    cash: ["USD", "EUR"], // Валюты которые будут в выдаче
    round: 1000 // Степень округления
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
     <course-widget :showHeader='showHeader' :textHeader="textHeader" :cash="cash" :round="round"> </course-widget>
  </div>
</template>

<script>
import courseWidget from './path/course-widget.vue';

export default {
  name: "Name",
  components: {
    "course-widget": courseWidget
  },
  data: () => {
    return {
        showHeader: true,
        textHeader: 'Курсы валют',
        cash: ["USD", "EUR"],
        round: 1000
    };
  }
};
</script>

```

## Установка

import { courseCB } from './docs/bundle.js'

## Как выглядит

["USD", "EUR"]

![для двух валют](https://github.com/guest363/vue-component/blob/master/course-cb-rf/example/1.jpg)

["USD", "EUR", "GBP", "INR", "JPY", "KRW"]

![все валюты](https://github.com/guest363/vue-component/blob/master/course-cb-rf/example/2.jpg)
