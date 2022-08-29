<template>
    <div>
      <!-- El titulo de Rutas aqui -->
        <div class="titulo">
          <h1>Elige la dificultad a la que deseas enfrentarte</h1>
        </div>
        <!-- Las tarjeras aqui -->
        <div class="container">
  <div>  
  <button><router-link to="/difBasica" class="dificultad">Básica</router-link></button>
  <div class="card card0">
    <div class="border">
      <h2>La ciudad</h2>
    </div>
  </div>
  <div class="marcofrase">
    <div class="textofrase">
    <p>No importa lo lento que vayas, siempre y cuando no te detengas</p>
    </div>
  </div>
  </div>
  <div>
  <button><router-link to="/difIntermedia" class="dificultad">Intermedia</router-link></button>
  <div class="card card1">
    <div class="border">
      <h2>de las puertas</h2>
    </div>
  </div>
    <div class="marcofrase">
    <div class="textofrase">
    <p>Que tu bici te lleve donde tu mente soñó</p>
  </div>
  </div>
  </div>
  <div>
  <button><router-link to="/difAvanzada" class="dificultad">Avanzada</router-link></button>
  <div class="card card2">
    <div class="border">
      <h2>abiertas</h2>
    </div>
  </div>
    <div class="marcofrase">
    <div class="textofrase">
    <p>Que tu meta de hoy sea ganarle a tu mejor excusa </p>
  </div>
  </div>
  </div>
  </div>
    </div>
    </template>

<script>
import PiedePagina from '@/components/ComponentFooter.vue'

export default {
  name: 'HomeView',
  components: {
    PiedePagina,
},
}
</script>

<style scoped>
 /* estilos de tarjetas aqui */
  .container {
  padding: 0 24px;
  height: 20vh;
  width: 200vw;
  max-height: 800px;
  max-width: 1280px;
  min-height: 600px;
  min-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.border {
  height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}
.border:hover {
  border: 1px solid #fff;
}
.card {
  height: 379px;
  width: 300px;
  background: #808080;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card0 {
  background: url("https://i.postimg.cc/LXv7HRx5/card0.jpg") center center no-repeat;
  background-size: 300px;
}
.card0:hover {
  background: url("https://i.postimg.cc/LXv7HRx5/card0.jpg") center center no-repeat;
  background-size: 500px;
}
.card0:hover h2 {
  opacity: 1;
}
.card0:hover .fa {
  opacity: 1;
}
.card1 {
  background: url("../assets/DifMedia.jpg") center center no-repeat;
  background-size: 300px;
}
.card1:hover {
  background: url("../assets/DifMedia.jpg") center center no-repeat;
  background-size: 500px;
}
.card1:hover h2 {
  opacity: 1;
}
.card1:hover .fa {
  opacity: 1;
}
.card2 {
  background: url("https://i.postimg.cc/qMNfLxfN/Dif-Avanzada.jpg") center center no-repeat;
  background-size: 300px;
}
.card2:hover {
  background: url("https://i.postimg.cc/qMNfLxfN/Dif-Avanzada.jpg") center center no-repeat;
  background-size: 500px;
}
.card2:hover h2 {
  opacity: 1;
}
.card2:hover .fa {
  opacity: 1;
}
h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}
.icons {
  position: absolute;
  fill: #fff;
  color: #fff;
  height: 130px;
  top: 226px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.dificultad{
  text-decoration: none;
  color: rgb(254, 254, 254);
  font-weight: bold;
  font-size: 20px;
}
.titulo{
  color: #000;
  font-size: 20px;
}
button{
background-color: #f4511e;
border: none;
color: white;
padding: 16px 32px;
text-align: center;
font-size: 16px;
margin: 20px 20px;
opacity: 1;
transition: 0.3s;
border-radius: 5px;
}
button:hover {opacity: 0.6}

.marcofrase{
  align-items: center;
  width: 20px;
  height: 40px;
  background-size: 100px;
}

.textofrase{
width: 301px;
margin: 30px 0px;
background-image: url("../assets/marco.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}

p{
  color:#000;
  font-family: sans-serif;
  font-size: 25px;
  padding: 40px 40px;
}
</style>
