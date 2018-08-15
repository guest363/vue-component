<template>
  <form autocomplete="off">
    <div class="autocomplete" v-for="(item, i) in inputs" :key="i">
      <input type="text" class="autocomplete--input" name="city" 
        :id=item.type v-model="client[item.type]" 
        v-on:input="autocomplete('default', null , [item.type])"
        @keydown.enter="autocomplete('enter', null , [item.type])" 
        @keydown.down="autocomplete('down', null , [item.type])" 
        @keydown.up="autocomplete('up', null , [item.type])"
        :placeholder=item.placeholder 
        :disabled=item.disabled 
        pattern=".*" required>
      <ul class="autocomplete--results" v-show="suggestion[item.type].show">
        <li class="autocomplete--result" 
        v-on:click="autocomplete('select', result, [item.type])" v-for="(result, i) in suggestion[item.type].answer.suggestions"
        :key="i" :class="{ 'is-active': i === suggestion[item.type].arrowCounter }">
          {{result.value}}
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import xhrCity from './support/reqDaDataCity.js';
import xhrAddress from './support/reqDaDataAddress.js';
import trottle from "./support/trottle.js";

export default {
  data: () => {
    return {
      suggestion: {
        city: {
          show: false,
          answer: "",
          arrowCounter: -1
        },
        address: {
          show: false,
          answer: "",
          arrowCounter: -1
        }
      },
      client: {
        city: "",
        address: "",
        fias: "tmp",
      }
    };
  },
  props:  {
    inputs: {
      type: Object,
      default: function() {
        return {
          city: {
            type: "city",
            placeholder: "Город, населенный пункт",
            disabled: false
          },
          address: {
            type: "address",
            placeholder: "Домашний адрес",
            disabled: true
          },
        };
      }
    },
    keyForDaData: {
      type: String,
      default: function() {
        return '';
      }
    }
  },
  methods: {
    getCityFromDaData: trottle(async function() {
      const result = await xhrCity(this.client.city, this.keyForDaData);
      this.suggestion.city.answer = result;
    }, 1000),
    getAddressFromDaData: trottle(async function() {
      const sendData = {
              address: this.client.address,
              fias: this.client.fias
            };
      const result = await xhrAddress(sendData, this.keyForDaData);
      this.suggestion.address.answer = result;
    }, 1000),
    autocomplete(action = "default", data = null, field) {
      const actions = {
        default: () => {
          switch (field[0]) { // Почему стал массивом ? Из-за v-for?
            case "city":
              this.getCityFromDaData();
              this.inputs.address.disabled = false;
              break;
            case "address":
            this.getAddressFromDaData();
              break;
            default:
              break;
          }
          this.suggestion[field].show = true;
        },
        select: () => {
          this.client[field] = data.value;
          if (field[0] === "city") {
            this.client.fias = data.data.city_fias_id;
          }
          this.$emit('suggestion', this.client);
          this.suggestion[field].show = false;
          this.suggestion[field].arrowCounter = -1;
        },
        enter: () => {
          this.client[field] = this.suggestion[field].answer.suggestions[
            this.suggestion[field].arrowCounter
          ].value;
          if (field[0] === "city") {
            this.client.fias = this.suggestion.city.answer.suggestions[
              this.suggestion[field].arrowCounter
            ].data.city_fias_id;
          }
          this.$emit('suggestion', this.client);
          this.suggestion[field].show = false;
          this.suggestion[field].arrowCounter = -1;
        },
        up: () => {
          this.suggestion[field].arrowCounter > 0
            ? this.suggestion[field].arrowCounter--
            : "";
        },
        down: () => {
          this.suggestion[field].arrowCounter <
          this.suggestion[field].answer.suggestions.length
            ? this.suggestion[field].arrowCounter++
            : "";
        }
      };
      actions[action]();
    }
  }
};
</script>

<style>
.autocomplete {
  position: relative;
  width: 100%;
}

.autocomplete--input,
#phone,
#fio {
  width: 100%;
  padding: 10px 20px;
  border: #3f3f3f 2px solid;
  margin-top: 15px;
}

.autocomplete--results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: auto;
  overflow: auto;
  z-index: 20;
  width: 100%;
  background-color: #ffffff;
  padding: 0 20px;
  border: #3f3f3f 1px solid;
  border-top: none;
  position: absolute;
}

.autocomplete--result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.is-active,
.autocomplete--result:hover {
  background-color: #faf4be;
  color: #353434;
}
#address:disabled {
  background: #ffffff;
}
#address:focus,
#city:focus{
  background-color: #fbf9df;
  outline: none;
  font-family: "Montserrat-b";
  color: #3f3f3f;
}
#address,
#city {
  font-family: "Montserrat-b";
  color: #3f3f3f;
}
#address::placeholder,
#city::placeholder {
  font-family: "Montserrat";
  color: #828282;
}
</style>
