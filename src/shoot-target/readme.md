# История стрельб

Создает canvas с изображением мишени для стрельбы из пистолета Макарова № 4.

Компоненту передается количество выстрелов которые возможно занести на мишень и критерий оценки (упражнение).

При клике по мишени подсчитывается количество набранных очков и выставляется оценка.

## Входные параметры

```js
props: {
    maxShoots: {
      type: String,
      default: `10`,
    },
    exercise: {
      type: String,
      default: `2`,
    },
  }
```

## Выходные параметры

Обьект вида:

```js
{
 count: 0,
 values: [],
 sum: '',
 mark: '',
 x: [],
 y: [],
}
```

## Инициализация

Пример:

```js
<template>
  <div>
      <shoot-target @shoot="print" :maxShoots="10" :exercise="2" />
  </div>
</template>

<script>
import shootTarget from './path/shoot-target.vue';

export default {
  components: {
    "shoot-target": shootTarget,
  },
  methods: {
    print(item) {
      console.log(item);
    },
  },
};
</script>

```

## Как выглядит

Инициализированный элемент

![инит](https://github.com/guest363/vue-component/blob/master/shoot-target/example/1.jpg)

Для входных данных
{
count: '3',
exercise: '1'
}

![3 выстрела](https://github.com/guest363/vue-component/blob/master/shoot-target/example/2.jpg)

Для входных данных
{
count: '10',
exercise: '2'
}

![10 выстрелов](https://github.com/guest363/vue-component/blob/master/shoot-target/example/3.jpg)
