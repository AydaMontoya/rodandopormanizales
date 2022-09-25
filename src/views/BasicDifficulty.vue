<template>
    <div>
      <mainTitle title="Escoge tu aventura" />
    </div>
    <div class="dificultades">
      <routeDifficulty
        image="/assets/Bosquepopular.jpg"
        ruta="Bosque Popular"
        distancia="11.84 km"
        desnivel="257 m"
        tipodebicicleta="MTB-RUTA"
      />
      <routeDifficulty
        image="/assets/CerrodeOro.jpg"
        ruta="Cerro de Oro"
        distancia="6.4 km"
        desnivel="142 m"
        tipodebicicleta="MTB-RUTA"
      />
      <routeDifficulty
        image="/assets/Chipre.jpg"
        ruta="Chipre"
        distancia="8.2 km"
        desnivel="134 m"
        tipodebicicleta="MTB-RUTA"
      />
    </div>
  </template>
  
  <script>
  import routeDifficulty from "@/components/molecules/RouteDifficulty.vue";
  import mainTitle from "@/components/atoms/MainTitle.vue";
  
  export default {
    name: "basicDifficulty",
    components: {
      routeDifficulty,
      mainTitle,
    },
  };
  </script>
  
  <style scoped>
  
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
  