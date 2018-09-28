# Data-Time-Fallback

Fallback для компонента date и time input. 

Если браузер поддерживает данные типы, то используются нативные пикеры.

В случае IE и Safari есть два вида fallback элементов которые рисуются в замен нативных. 

## Входные параметры

```
{
    date: true, // true -> date компонент, false -> time компонент
    type: 'input', // тип для fallback input или select
    maxYear: 2030,
    minYear: 1990
}
```

## Выходные параметры

```
Возвращает обьект Date()

```

