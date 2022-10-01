<template>
    <div class="video-container">
      <div class="video-item video-1">
        <h3 class="subtitle">Revisa el clima antes de salir a Rodar</h3>
        <hr />
        <p>
          Trae los datos desde la API
        </p>
        <button v-on:click="mounted"> --> Click aquí para traer
           información</button>
        <div id="app">
          {{ info }}
        </div>
      </div>
    </div>
  </template>

<script>
    import axios from 'axios';
    
    export default {
      name: 'App',
      data() {
        return {
          info: null,
        };
      },
      methods: {
        mounted() {
          axios
            .get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5f3e2ffb975979235a637c386a62fb9a')
            .then((response) => { this.info = response.data.weather });
          console.log(this.info[0])
          }
      },
    };
    </script>