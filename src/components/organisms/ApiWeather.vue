<template>
  <div class="hero">
        <div class="promo">
          <h1>Comprueba la predicción del clima para que tu salida a rodar sea perfecta</h1>
          <hr />
          <h2>Selecciona tu ruta</h2>
          <button v-on:click="weather">
            Clima Manizales
          </button>
          <div id="app">
            <h1>{{ ciudad }}</h1>
            {{ clima }} <br>
            <p>{{ temperaturaCelcius }}</p>
            <p>{{ humedad }}</p>
          </div>
      </div>
    <video muted autoplay loop src="@/assets/fondo.mp4" type="video/mp4">
      </video>
      <div class="capa"></div>
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
      temperatura: null,
      temperaturaCelcius: null,
      ciudad: null,
    };
  },
  methods: {
    weather() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=5.068&lon=-75.517&appid=5f3e2ffb975979235a637c386a62fb9a"
        )
        .then((response) => {
          this.info = response.data.weather;
          this.ciudad = response.data.name;
          this.clima = this.info[0].description;
          this.temperatura = response.data.main.temp_max;
          this.humedad = response.data.main.humidity;
          this.temperaturaCelcius = parseFloat(this.temperatura);
          this.temperaturaCelcius = (this.temperaturaCelcius - 273.15).toFixed(
            2
          );
        });
    },
  },
};
</script>

<style scoped>

.promo{
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  position: absolute;
  z-index: 2;
}

button{
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  background: #ffc200;
  color: #0c233e;
  cursor: pointer;
}

.hero{
  min-height: 80vh;
  position: relative;

}

.video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.capa{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.1;
  /* mix-blend-mode: overlay; */
}


@media screen and (min-width:360px){
    .hero{
        flex-direction: row;
        align-items: center;
    }

    .video{
        flex-grow: 1;
        max-width: none;
    }
    
}
</style>
