# Vue components

Набор компонентов, который можно использовать в своих целях.

## Require
Vue.js версии 2

## Install
Компоненты находятся в файле ./dist/vue-component.js

# Превью компонентов
* [Color-piсker](#Color-piсker)
* [Course-cb-rf](#Course-cb-rf)
* [Drag-and-Drop](#Drag-and-Drop)
* [Shoot-target](#Shoot-target)
* [Side-chapter](#Side-chapter)
* [Svg-loader](#Svg-loader)

# Color-piсker
Компонент выводит палитру заданных цветов. 

По цветам можно кликать, компонент возвращает названия выбранных цветов. 

![5 цветов ](https://github.com/guest363/vue-component/blob/master/color-piсker/example/1.jpg)

# Course-cb-rf
Компонент выводит курсы валют на текущую дату по отношению к рублю.

Данные получает с ЦБ РФ или в случае недоступности ЦБ РФ с сайта www.cbr-xml-daily.ru. 

![для двух валют](https://github.com/guest363/vue-component/blob/master/course-cb-rf/example/1.jpg)

# suggestionDaData

Выводит 2 input в которых вводимые данные дополняются подсказками от сервиса DaData.

Инициализация

![Инициализация](https://github.com/guest363/vue-component/blob/master/suggestionDaData/example/1.png)

Пример подсказки

![Пример подсказки](https://github.com/guest363/vue-component/blob/master/suggestionDaData/example/2.png)

# Drag-and-Drop
Компонент создает поле в которое можно перемещать drag-and-drop изображения или же выбирать их через меню проводника. 

Из переданных изображений формируется превью а сами они доступны в base64 для дальнейшего использования

![инит](https://github.com/guest363/vue-component/blob/master/drag-and-drop/example/1.jpg)

# Shoot-target
Компонент создает canvas с изображением мишени для стрельбы из пистолета Макарова № 4. 

Компоненту передается количество выстрелов которые возможно занести на мишень и критерий оценки (упражнение).

![3 выстрела](https://github.com/guest363/vue-component/blob/master/shoot-target/example/2.jpg)

# Side-chapter
Компонент создает оглавление из тегов h1-h6 с возможностью быстрого перехода при клике.

![пример на статье](https://github.com/guest363/vue-component/blob/master/side-chapter/example/1.jpg)

# Svg-loader
Анимации загрузки в SVG

![Пример с кругами](https://github.com/guest363/vue-component/blob/master/svg-loaders/example/1.gif)