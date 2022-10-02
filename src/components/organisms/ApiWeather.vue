<template>
  <div class="video-container">
    <div class="video-item video-1">
      <h3 class="subtitle">Revisa el clima antes de salir a Rodar</h3>
      <hr />
      <p>Trae los datos desde la API</p>
      <button v-on:click="weather">
        --> Click aquí para traer información
      </button>
      <div id="app">
        <h1>{{ciudad}}</h1>
        {{ clima }}
      <p>{{temperaturaCelcius}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      info: null,
      clima: null,
      temperatura_maxima:null,
      temperaturaCelcius: null,
      ciudad:null
    };
  },
  methods: {
    weather() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=5.06&lon=-75.51&appid=5f3e2ffb975979235a637c386a62fb9a"
        )
        .then((response) => {
          this.info = response.data.weather;
          this.ciudad=response.data.name;
          this.clima = this.info[0].description;
          this.temperatura_maxima = response.data.main.temp_max;
          this.temperaturaCelcius = parseFloat(this.temperatura_maxima);
          this.temperaturaCelcius = (this.temperaturaCelcius-273.15).toFixed(2);
        })
        ;
    },
  },
};
</script>

<style scoped>
#app{
  color:red;
}
</style>