<template>
    <div class="video-container">
      <div class="video-item video-1">
        <h3 class="subtitle">Comsumo de una API general</h3>
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

<!-- <script>
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
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response) => { this.info = response; });
        },
        mounted_format() {
          axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response) => { this.info = response.data.bpi; });
        },
      },
    };
    </script> -->