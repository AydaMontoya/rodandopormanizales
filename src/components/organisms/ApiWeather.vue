<template>
  <div class="container">
    <header class="hero">
      <section class="container hero__main">
        <div class="hero__textos">
          <h1 class="title">
            Antes de salir comprueba la
            <span class="title--active">Predicción del clima!!!</span>
          </h1>
          <p class="copy">
            Para que tu salida a rodar sea
            <span class="copy__active">perfecta.</span>
          </p>

          <div class="route-type">
            <p>Selecciona tu ruta</p>

            <select class="select-box" v-model="rutas">
              <option
                class="ciudad"
                value="https://api.openweathermap.org/data/2.5/weather?lat=5.068&lon=-75.517&appid=5f3e2ffb975979235a637c386a62fb9a"
              >
                Manizales
              </option>
              <option
                class="ciudad"
                value="https://api.openweathermap.org/data/2.5/weather?lat=4.982&lon=-75.603&appid=5f3e2ffb975979235a637c386a62fb9a"
              >
                Chinchina
              </option>
              <option
                class="ciudad"
                value="https://api.openweathermap.org/data/2.5/weather?lat=5.166&lon=-75.520&appid=5f3e2ffb975979235a637c386a62fb9a"
              >
                Neira
              </option>
            </select>
          </div>
          <div class="validation">
            <button v-on:click="weather">Validar</button>
            <div class="apiWeather" v-show="mostrar">
              <p><span class="copy__active">Ciudad: </span>{{ ciudad }}</p>
              <p>
                <span class="copy__active">Estado del clima: </span>{{ clima }}
              </p>
              <p>
                <span class="copy__active">Temperatura: </span
                >{{ temperaturaCelcius }}ºC
              </p>
              <p><span class="copy__active">Humedad: </span>{{ humedad }}%</p>
            </div>
          </div>
        </div>
        <img src="@/assets/weatherPage.png" class="mockup" />
      </section>
    </header>
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
      rutas: null,
      mostrar: false,
    };
  },
  methods: {
    weather() {
      this.mostrar = true;
      axios.get(this.rutas).then((response) => {
        this.info = response.data.weather;
        this.ciudad = response.data.name;
        this.clima = this.info[0].description;
        this.temperatura = response.data.main.temp_max;
        this.humedad = response.data.main.humidity;
        this.temperaturaCelcius = parseFloat(this.temperatura);
        this.temperaturaCelcius = (this.temperaturaCelcius - 273.15).toFixed(0);
      });
    },
  },
};
</script>

<style scoped>
.select-box {
  position: relative;
  display: block;
  width: 20px;
  height: 30px;
  margin-left: 15px;
  font-size: 18px;
  color: var(--color3);
  background-color: var(--fondo);
  border-radius: 10px;
  border: solid 2px var(--color1);
}

.select-box option {
  color: var(--color1);
  font-family: "Nunito", sans-serif;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px 0;
  height: auto;
  background: var(--fondo);
}

.hero {
  width: 100%;
  min-height: 100vh;
  background: var(--fondo);
}

.hero__main {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.mockup {
  object-fit: cover;
  width: 48%;
  max-height: 90vh;
}

.hero__textos {
  width: 48%;
}

.title {
  font-size: 56px;
  font-weight: 300;
  color: var(--color3);
}

.title--active {
  color: var(--color1);
  font-weight: 700;
}

.copy {
  font-size: 24px;
  color: var(--color2);
  text-shadow: 0 8px 9px #0000005f;
  margin: 15px 0;
}

.copy__active {
  font-weight: 700;
}

.route-type {
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 24px;
  color: var(--color2);
}

button {
  padding: 7px 15px;
  margin-top: 6px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  background: var(--color1);
  color: var(--color3);
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .mockup {
    width: 60%;
    height: auto;
  }

  .title {
    font-size: 45px;
  }

  .copy {
    font-size: 22px;
  }

  .route-type {
    font-size: 20px;
    text-align: center;
  }

  button {
    padding: 7px 22px;
  }
}

@media screen and (max-width: 700px) {
  main .container {
    padding: 60px 0;
  }

  .hero__main {
    flex-direction: column-reverse;
    justify-content: flex-end;
    min-height: 70px;
    height: auto;
    padding: 30px 0;
  }

  .hero__textos {
    width: 100%;
    text-align: center;
  }

  .mockup {
    width: 60%;
    margin-bottom: 20px;
  }

  .title {
    font-size: 35px;
  }

  .copy {
    font-size: 20px;
  }

  .subtitle {
    font-size: 35px;
    text-align: center;
  }

  .copy__section {
    font-size: 20px;
    text-align: center;
  }

  .route-type {
    font-size: 22px;
    text-align: center;
    justify-content: center;
  }

  button {
    padding: 7px 22px;
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .mockup {
    width: 80%;
    margin-bottom: 15px;
  }
}
</style>
