<template>
  <div class="demo">
    <div class="demo-nav">
        <nav>
            <h2>Навигация</h2>
        </nav>
    </div>
    <div class="demo--components">
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
      <h3> Выбрана дата: </h3>
      <hr>
      <h2>Color-Picker</h2>
      <color-picker class="al-left" :data='dataForColorPiker' v-on:colorPiked="colorPiked = $event"></color-picker>
    </div>
  </div>
</template>

<script>
import courseCB from './course-cb-rf/course-widget.vue';
import DTPicker from './data-time-picker/DTPicker.vue';
import colorPicker from './color-piсker/color-piсker.vue';

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
            dataForColorPiker: {
                color: ["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]
            },
            selectedDate: '',
            colorPiked: ''
        };
    },
    components: {
        "course-widget": courseCB,
        "data-time-picker": DTPicker,
        "color-picker": colorPicker
    },
  };
  
</script>

<style>
  * {
    box-sizing: border-box;
  }

  :root {
    --nav-bg-color: #f3f3f3;
  }
  body{
      margin: 0;
  }
  .demo {
      display:grid;
      grid-template-areas: "nav main";
    grid-template-columns: 300px auto;
      grid-column-gap: 20px;
      height: 100vh;
  }
  .demo--components {
    display: flex;
    flex-direction: column;
    margin: 10px 30px;
    grid-area: main;
    align-items: flex-start;
  }
  .demo-nav{
    grid-area: nav;
    display: flex;
    position: fixed;
    height: 100%;
    flex-direction: column;
    background: var(--nav-bg-color);
    color: #141414;
    align-items: center;
    max-width: 300px;
    width: 100%;
  }
  nav{
      padding: 10px 30px;
      width: 100%;
  }
  .al-left{
    margin: 0!important;
  }
  hr{
     border-top: 1px solid black;
    width: 100%;
    height: 2px;
  }
</style>

