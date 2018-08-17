# Shoot-Target

Компонент создает canvas с изображением мишени для стрельбы из пистолета Макарова № 4. 

Компоненту передается количество выстрелов которые возможно занести на мишень и критерий оценки (упражнение).

При клике по мишени подсчитывается количество набранных очков и выставляется оценка.
## Входные параметры

```
 dataToTarget: {
        count: '10',
        exercise: '2'
  }
```
## Выходные параметры

```
Обьект вида:
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

```
<template>
  <div>
      <shoot-target :data='dataToTarget' v-on:shoot="dataFromTarget = $event"></shoot-target>
  </div>
</template>

<script>
import shootTarget from './path/shoot-target.vue';

export default {
  name: "Name",
  components: {
    "shoot-target": shootTarget,
  },
  data: () => {
    return {
      dataFromTarget: '',
      dataToTarget: {
           count: '10',
           exercise: '2'
      }
    };
  },
};
</script>

```
## Установка

Достаточно скопировать файл с расширением "vue"

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

