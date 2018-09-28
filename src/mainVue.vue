<template>
  <div class="demo">
    <hr>
    <course-widget :prop='dataForCourse'> </course-widget>
    <hr>
    <h2>Fallback для выбора даты вида Input</h2>
    <span>Выбор даты:</span><data-time-picker :initData='dataForDTPicker1' v-on:selectDate="selectedDate = $event"></data-time-picker>
<!--     <div>
      <pre> 
            dataForDTPicker1: {
                date: true,
                type: 'input',
                maxYear: 2030,
                minYear: 1990
            }
      </pre>
    </div> -->
    <br>
    <span>Выбор времени:</span><data-time-picker :initData='dataForDTPicker2' v-on:selectDate="selectedDate = $event"></data-time-picker>
<!--           <pre> 
            dataForDTPicker2: {
                date: false,
                type: 'input'
            }
      </pre> -->
    <h2>Fallback для выбора даты вида Select</h2>
    <span>Выбор даты:</span><data-time-picker :initData='dataForDTPicker3' v-on:selectDate="selectedDate = $event"></data-time-picker>
<!--     <pre> 
            dataForDTPicker3: {
                date: true,
                type: 'select',
                maxYear: 2030,
                minYear: 1990
            }
      </pre> -->
  </div>
</template>

<script>
import courseCB from './course-cb-rf/course-widget.vue';
import DTPicker from './data-time-picker/DTPicker.vue';

  export default {
    name: "App",
    data: () => {
        return {
           dataForCourse: {
            showHeader: true,
            textHeader: 'Курсы валют',
            cash: ["USD", "EUR"],
            round: 1000
            },
            dataForDTPicker1: {
                date: true,
                type: 'input',
                maxYear: 2030,
                minYear: 1990
            },
            dataForDTPicker2: {
                date: false,
                type: 'input'
            },
            dataForDTPicker3: {
                date: true,
                type: 'select',
                maxYear: 2030,
                minYear: 1990
            },
            selectedDate: ''
        };
    },
    components: {
        "course-widget": courseCB,
        "data-time-picker": DTPicker
    },
  };
  
</script>

<style>
  .demo {
    display: flex;
    flex-direction: column;
    margin: 10px 30px;
  }
</style>

