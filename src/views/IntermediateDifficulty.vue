<template>
    <div>
      <mainTitle title="Elige el nuevo reto"/>
    </div>
    <div class="dificultades">
      <routeDifficulty
        image="/assets/Acuaparque.jpg"
        ruta="Acuaparque"
        distancia="29.68 km"
        desnivel="723 m"
        tipodebicicleta="MTB-RUTA"
      />
      <routeDifficulty
        image="/assets/La puerta.jpg"
        ruta="La puerta"
        distancia="18.98 km"
        desnivel="451 m"
        tipodebicicleta="MTB"
      />
      <routeDifficulty
        image="/assets/ReservadelRuiz.jpg"
        ruta="Reserva del ruiz"
        distancia="34.38 km"
        desnivel="794 m"
        tipodebicicleta="MTB"
      />
    </div>
  </template>
  
  <script>
  import routeDifficulty from "@/components/molecules/RouteDifficulty.vue";
  import mainTitle from "@/components/atoms/MainTitle.vue";
  
  export default {
    name: "intermediateDifficulty",
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
  