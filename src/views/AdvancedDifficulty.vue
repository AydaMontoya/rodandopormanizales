<template>
    <div>
      <mainTitle title="Selecciona tu aventura"/>
    </div>

    <div class="dificultades">
      <routeDifficulty
        image="/assets/Letras.jpg"
        ruta="Alto de letras"
        distancia="71.21 km"
        desnivel="1.894 m"
        tipodebicicleta="MTB-RUTA"
      />
      <routeDifficulty
        image="/assets/Chinchina.jpg"
        ruta="Chinchina"
        distancia="45.42 km"
        desnivel="1.056 m"
        tipodebicicleta="MTB"
      />
      <routeDifficulty
        image="/assets/Neira.jpg"
        ruta="Neira"
        distancia="41.44 km"
        desnivel="1.116 m"
        tipodebicicleta="MTB"
      />
    </div>
  </template>
  
  <script>
  import routeDifficulty from "@/components/molecules/RouteDifficulty.vue";
  import mainTitle from "@/components/atomos/MainTitle.vue";
  
  export default {
    name: "advancedDifficulty",
    components: {
      routeDifficulty,
      mainTitle
    },
  };
  </script>
  
  <style scoped>
  
  .dificultades {
    background: #f2f2f2;
    width: 90%;
    margin: 0 auto;
    padding: 100px 0px 80px 0px;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 4.2em;
    flex-wrap: wrap;
  }
  </style>
  