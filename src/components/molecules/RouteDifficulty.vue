<template>
  <div class="card">
    <div class="imgBx">
      {{ image }}
      <img :src="image" alt="" />
    </div>
    <div class="content">
      <div class="details">
        <h2>{{ ruta }}<br /><!-- <span></span> --></h2>
        <div class="data">
          <h3>{{ distancia }}<br /><span>Distancia</span></h3>
          <h3>{{ desnivel }}<br /><span>Desnivel</span></h3>
          <h3>{{ tipodebicicleta }}<br /><span>Tipo de bicicleta</span></h3>
        </div>
        <div class="actionBtn">
          <button><a :href="mapa" target="_blanck">Ver mapa</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  image: String,
  ruta: String,
  distancia: String,
  desnivel: String,
  tipodebicicleta: String,
  mapa: String,
});
</script>

<style scoped>

.titulo {
  color: #0c233e;
  text-align: center;
}

.card {
  position: relative;
  width: 300px;
  height: 180px;
  background: #f2f2f2;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgb(135, 132, 132);
  transition: 0.5s;
  margin-bottom: 20px;
}

.card:hover {
  height: 420px;
}

.imgBx {
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #f2f2f2;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.614);
  overflow: hidden;
  transition: 0.5s;
}

.card:hover .imgBx {
  width: 250px;
  height: 250px;
}

.imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.card .content .details {
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(150px);
}

.card:hover .content .details {
  transform: translateY(0px);
  padding: 30px;
}

.card .content .details h2 {
  font-size: 1.25em;
  font-weight: 600;
  color: #364a61;
  line-height: 1.2em;
}

/* .card .content .details h2 span {
  font-size: 0.75em;
  font-weight: 500;
  opacity: 0.5;
}
 */
.card .content .details .data {
  display: flex;
  justify-content: space-between;
  margin: 30px 0; /* ojo espacio entre la img y el cont */
}

.card .content .details .data h3 {
  font-size: 0.9em;
  color: #364a61;
  line-height: 1.2em;
  font-weight: 600;
}

.card .content .details .data h3 span {
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.5;
}

.card .content .details .actionBtn {
  display: flex;
  justify-content: center;
  /* gap: 20px; */
}

.card .content .details .actionBtn button {
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  background: #ffc200;
  color: #0c233e;
  cursor: pointer;
}

.card .content .details .actionBtn button a {
  text-decoration: none;
}

.card .content .details .actionBtn button:nth-child(2) {
  border: 1px solid #364a61;
  color: #364a61;
  background: #f2f2f2;
}

@media screen and (max-width: 327px) {
  .card .content .details {
  padding: 11px;
  width: 100%;
  transform: translateY(130px);
}

.card:hover .imgBx {
  width: 200px;
  height: 200px;

}

.card:hover {
  height: 390px;
}

}
</style>
