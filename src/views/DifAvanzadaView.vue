<template>
  <div class="titulo">
    <h1>Escoge tu aventura !!!</h1>
  </div>
  <div class="dificultades">
    <componentDificultad
      image="/assets/Letras.jpg"
      ruta="Alto de letras"
      distancia="71.21 km"
      desnivel="1.894 m"
      tipodebicicleta="MTB-RUTA"
    />
    <componentDificultad
      image="/assets/Chinchina.jpg"
      ruta="Chinchina"
      distancia="45.42 km"
      desnivel="1.056 m"
      tipodebicicleta="MTB"
    />
    <componentDificultad
      image="/assets/Neira.jpg"
      ruta="Neira"
      distancia="41.44 km"
      desnivel="1.116 m"
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
