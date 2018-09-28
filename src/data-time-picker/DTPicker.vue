<template>
  <div class="data-time-picker">
    <div class="nativeDatePicker">
      <input type="date" id="native-DTPicker"  v-show='isSupport && initData.date === true'
        name="native-DTPicker" v-on:change='changeDate()'>

      <input type="time" id="native-DTPicker--time"  v-show='isSupport && initData.date === false'
        name="native-DTPicker--time" v-on:change='changeTime($event.target)' value="13:30">
    </div>

    <div class="fallbackDatePicker">
      <div class="fallbackDatePicker--select" v-show='initData.type === "select" && initData.date === true && !isSupport'>
        <span>
          <label for="day-DTPicker">День:</label>
          <select class="common-select" :id="'day-DTPicker' + id" name="day-DTPicker" v-on:change='changeDate()'>
          </select>
        </span>
        <span>
          <label for="month-DTPicker">Месяц:</label>
          <select class="common-select" :id="'month-DTPicker' + id" name="month-DTPicker" v-on:change='changeDate()'>
            <option value="January">Января</option>
            <option value="February">Февраля</option>
            <option value="March">Марта</option>
            <option value="April">Апреля</option>
            <option value="May">Мая</option>
            <option value="June">Июня</option>
            <option value="July">Июля</option>
            <option value="August">Августа</option>
            <option value="September">Сентября</option>
            <option value="October">Октября</option>
            <option value="November">Ноября</option>
            <option value="December">Декабря</option>
          </select>
        </span>
        <span>
          <label for="year-DTPicker">Год:</label>
          <select class="common-select" :id="'year-DTPicker' + id" name="year-DTPicker" v-on:change='changeDate()'>
          </select>
        </span>
      </div>
      <div class='fallbackDatePicker--input' v-show='initData.type === "input" && initData.date === true && !isSupport'>
          <input class="common-input" type="text" id="full-DTPicker" name="full-DTPicker" placeholder="01.06.2018" 
            v-on:input="validFullDate($event.target)" pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}" 
            title="Дата" />
      </div>

      <div class='fallbackDatePicker--time' v-show='initData.date === false && initData.type === "input" && !isSupport'>
          <input class="common-input common-input--time" type="text" id="time-DTPicker" name="time-DTPicker" placeholder="12:00" 
            v-on:input="validTime($event.target)" pattern="[0-1][0-9]|2[0-3]):([0-5][0-9]" 
            title="Время" />
      </div>

    </div>
  </div>
</template>

<script>
import Modernizr from './support/modernizr.js';
import populateDays from './support/populateDays.js';
import populateYears from './support/populateYears.js';
import dayInYear from './support/dayInYear.js';
import dateStringAutoCorrect from './support/dateStringAutoCorrect.js';
import timeStringAutoCorrect from './support/timeStringAutoCorrect.js';
import timeToDateObject from './support/timeToDateObject.js';

export default {
   data: () => {
        return {
           selectDate: new Date(),
           isSupport: true,
           id: null
        };
    },
  props: {
    initData: {
      type: Object,
      default: function() {
        return {
          date: true,
          type: 'input',
          maxYear: 2030,
          minYear: 1990
        };
      }
    }
  },
  methods: {
    changeDate() {
      if (!Modernizr.inputtypes.date) {
        const yearSelect = document.querySelector('#year-DTPicker' + this.id).value;
        const monthSelect = document.querySelector('#month-DTPicker' + this.id).value;
        const daySelect = document.querySelector('#day-DTPicker' + this.id).value;
        const dateString = daySelect + ' ' + monthSelect + ' ' + yearSelect;
        const dateType = Date.parse(dateString);

        this.selectDate = dateType;
      } else {
        const nativeDate = document.querySelector('#native-DTPicker' + this.id).value;

        this.selectDate = Date.parse(nativeDate);
      }
      this.$emit('selectDate', this.selectDate);
    },
    changeTime(timeNative) {
        this.selectDate = timeToDateObject( timeNative.value);
    },
    validFullDate(fullDate) {
      const monthSelect = document.querySelector('#month-DTPicker' + this.id);
      let x = fullDate.value
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
      fullDate.value = dateStringAutoCorrect(x, this.initData.maxYear, this.initData.minYear, monthSelect, fullDate);
      let preparedDate = fullDate.value.replace(/\./g, " ");
      this.selectDate = Date.parse(preparedDate);
      this.$emit('selectDate', this.selectDate);
    },
    validTime(inputTime) {
      let x = inputTime.value
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,2})/);
      inputTime.value = timeStringAutoCorrect(x);
      this.selectDate = timeToDateObject(inputTime.value);
      this.$emit('selectDate', this.selectDate);
    }
  },
  created() {
    this.id = this._uid;
  },
  mounted() {
    const nativePicker = document.querySelector('.nativeDatePicker');
    const fallbackPicker = document.querySelector('.fallbackDatePicker');

    const yearSelect = document.querySelector('#year-DTPicker' + this.id);
    const monthSelect = document.querySelector('#month-DTPicker' + this.id);
    const daySelect = document.querySelector('#day-DTPicker' + this.id);

    //preserve day selection
    let previousDay;

    // when the month or year <select> values are changed, rerun populateDays()
    // in case the change affected the number of available days
    yearSelect.onchange = () => populateDays(monthSelect.value, daySelect, yearSelect, previousDay);

    monthSelect.onchange = () => populateDays(monthSelect.value, daySelect, yearSelect, previousDay);

    // update what day has been set to previously
    // see end of populateDays() for usage
    daySelect.onchange = () => {
      previousDay = daySelect.value;
    }

    // hide fallback initially
    fallbackPicker.style.display = 'none';
    // fallBack
    if (!Modernizr.inputtypes.date) {
      // hide the native picker and show the fallback
      nativePicker.style.display = 'none';
      fallbackPicker.style.display = 'block';
      this.isSupport = false;
      // populate the days and years dynamically
      // (the months are always the same, therefore hardcoded)
      populateDays(monthSelect.value, daySelect, yearSelect, previousDay);
      populateYears(yearSelect);
      // set current month and day
      monthSelect.options[new Date().getMonth()].selected = true;
      const currentMonthString = monthSelect.options[new Date().getMonth()].value;
      populateDays(currentMonthString, daySelect, yearSelect, previousDay);
      daySelect.options[new Date().getDate() - 1].selected = true;
    }
  }

  
};
</script>

<style scoped>

.common-input {
  width: 100px;
  padding: 10px 20px;
  border: #3f3f3f 2px solid;
  margin-top: 15px;
  font-size: 16px;
}
.common-input--time{
  width: 40px;
}

.common-input {
  font-family: "Sans-serif";
  font-weight: bold;
  color: #3f3f3f;
}

.common-input:placeholder {
  font-weight: normal;
  color: #828282;
}

.common-input:disabled {
  background: #ffffff;
}

.common-input:focus {
  background-color: #fbf9df;
  outline: none;
  font-weight: bold;
  color: #3f3f3f;
}
.invalid-date-input {
  background-color: #fcd2d2;
}

.common-select {
  padding: 5px 5px;
  margin: 0 5px;
  border: none;
  background-color: #eeeeee;
  margin-top: 15px;
  font-size: 16px;
  width: 130px;
}
</style>
