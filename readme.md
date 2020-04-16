# Компоненты для Vue

Набор компонентов, который можно использовать в своих целях.

Посмотерть и поиграть с параметрами компонентов можно в сторибуке по ссылке.

[Storybook](https://guest363.github.io/vue-component/)

## Require

Для всех компонентов - Vue.js версии 2

Для Drag-and-Drop - compressorjs

# Превью компонентов

- [Color-piсker](#Color-piсker)
- [Course-cb-rf](#Course-cb-rf)
- [Suggestion DaData](#suggestionDaData)
- [Drag-and-Drop](#Drag-and-Drop)
- [Shoot-target](#Shoot-target)
- [Side-chapter](#Side-chapter)
- [Svg-loader](#Svg-loader)
- [Custom-input](#Custom-input)

# Color-piсker

Компонент выводит палитру заданных цветов. Цвета можно задавать обычными словами (список в файле colorDictionary.js), в форматах rgb, hex, hsla;

По цветам можно кликать, компонент возвращает названия выбранных цветов.

При наведении на элемент цвета всплывает подсказда с его русским наименованием или если цвет задан через rgb, hex или hsla то выводятся их значения.

Эмитет событие 'colorPiked' c массивом выбранных цветов.

![5 цветов ](https://github.com/guest363/vue-component/blob/master/src/color-piсker/example/1.jpg)

# Course-cb-rf

Компонент выводит курсы валют на текущую дату по отношению к рублю.

Данные получает с ЦБ РФ или в случае недоступности ЦБ РФ с сайта www.cbr-xml-daily.ru.

Справа от курса отражается рост\падение по отношению к прошедшему дню.

Доступны курсы валют из списка: "USD", "EUR", "GBP", "INR", "JPY", "KRW".

В компонент встроены иконки с сайта fontello.

![для двух валют](https://github.com/guest363/vue-component/blob/master/src/course-cb-rf/example/1.jpg)

# suggestionDaData

Выводит 2 input в которых вводимые данные дополняются подсказками от сервиса DaData.

Инициализация

![Инициализация](https://github.com/guest363/vue-component/blob/master/src/suggestionDaData/example/1.png)

Пример подсказки

![Пример подсказки](https://github.com/guest363/vue-component/blob/master/src/suggestionDaData/example/2.png)

# Drag-and-Drop

Компонент создает поле в которое можно перемещать drag-and-drop изображения или же выбирать их через меню проводника.

Из переданных изображений формируется превью а сами они доступны в base64 для дальнейшего использования

![инит](https://github.com/guest363/vue-component/blob/master/src/drag-and-drop/example/1.jpg)

# Shoot-target

Создает canvas с изображением мишени для стрельбы из пистолета Макарова № 4.

Компоненту передается количество выстрелов которые возможно занести на мишень и критерий оценки (упражнение).

При клике по мишени подсчитывается количество набранных очков и выставляется оценка.

![3 выстрела](https://github.com/guest363/vue-component/blob/master/src/shoot-target/example/2.jpg)

# Side-chapter

Компонент создает оглавление из тегов h1-h6 с возможностью быстрого перехода при клике.

![пример на статье](https://github.com/guest363/vue-component/blob/master/src/side-chapter/example/1.jpg)

# Svg-loader

Анимации загрузки в SVG

![Пример с кругами](https://github.com/guest363/vue-component/blob/master/src/svg-loaders/example/1.gif)

# Custom-input

Легко настраиваемый компонент инпута с возможностью подсказок от dadata.

## Зависимости

- axios
- cleave.js

![В окне авторизации ](https://github.com/guest363/vue-component/blob/master/src/custom-input/example/1.jpg)
