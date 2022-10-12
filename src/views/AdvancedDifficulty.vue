<template>
    <div>
      <mainTitle title="Selecciona tu desafío"/>
    </div>

    <div class="dificult">
      <routeDifficulty
        image="/assets/Letras.jpg"
        ruta="Alto de letras"
        distancia="71.21 km"
        desnivel="1.894 m"
        tipodebicicleta="MTB-RUTA"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1v_qcP1-3-x4lxEsQUSZoemRvjskGxDo&ll=5.046769353140595%2C-75.46761233507284&z=12"
      />
      <routeDifficulty
        image="/assets/Chinchina.jpg"
        ruta="Chinchiná"
        distancia="45.42 km"
        desnivel="1.056 m"
        tipodebicicleta="MTB"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1ZnjDKfwpByScKOBP92SHr8WSj1cqTVE&ll=5.022052745657499%2C-75.57414900030611&z=13"
      />
      <routeDifficulty
        image="/assets/Neira.jpg"
        ruta="Neira"
        distancia="41.44 km"
        desnivel="1.116 m"
        tipodebicicleta="MTB"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1pT4jZZWsMLOm7ZD2N3O2VhIlIunhVoA&ll=5.121860284899141%2C-75.55627368302952&z=12"
      />
    </div>
  </template>
  
  <script>
  import routeDifficulty from "@/components/molecule/RouteDifficulty.vue";
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
  
  .dificult{
    background: var(--fondo);
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
  