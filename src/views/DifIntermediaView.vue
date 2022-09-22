<template>
  <div class="titulo">
    <h1>Escoge tu aventura !!!</h1>
  </div>
  <div class="dificultades">
    <componentDificultad
      image="/assets/Acuaparque.jpg"
      ruta="Acuaparque"
      distancia="29.68 km"
      desnivel="723 m"
      tipodebicicleta="MTB-RUTA"
    />
    <componentDificultad
      image="/assets/La puerta.jpg"
      ruta="La puerta"
      distancia="18.98 km"
      desnivel="451 m"
      tipodebicicleta="MTB"
    />
    <componentDificultad
      image="/assets/ReservadelRuiz.jpg"
      ruta="Reserva del ruiz"
      distancia="34.38 km"
      desnivel="794 m"
      tipodebicicleta="MTB"
    />
  </div>
</template>

<script>
import componentDificultad from "@/components/ComponentDificultad.vue";

export default {
  name: "HomeView",
  components: {
    componentDificultad,
  },
};
</script>

<style>
.titulo {
  color: #0c233e;
  text-align: center;
}

.dificultades {
  background: #f2f2f2;
  width: 90%;
  margin: 0 auto;
  padding: 100px 0px 0px 0px;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 4.2em;
  flex-wrap: wrap;
}
</style>
