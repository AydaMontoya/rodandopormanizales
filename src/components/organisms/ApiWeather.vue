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
        {{ clima }}
      </div>
      <p>{{temperatura_maxima}} temperatura</p>
      <h1>{{ciudad}}</h1>
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
      ciudad:null
    };
  },
  methods: {
    weather() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5f3e2ffb975979235a637c386a62fb9a"
        )
        .then((response) => {
          this.info = response.data.weather;
          this.clima = this.info[0].description;
          this.temperatura_maxima = response.data.main.temp_max;
          this.ciudad=response.data.name;
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