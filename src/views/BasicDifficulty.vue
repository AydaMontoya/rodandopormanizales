<template>
    <div>
      <mainTitle title="Escoge tu aventura" />
    </div>
    <div class="dificult">
      <routeDifficulty
        image="/assets/Chipre.jpg"
        ruta="Chipre"
        distancia="8.2 km"
        desnivel="134 m"
        tipodebicicleta="MTB-RUTA"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1DA1FyyO7i7A3Bd-JCnwpPoTb9qiBkUE&ll=5.071086503904409%2C-75.51810352059059&z=15"
      />
      <routeDifficulty
        image="/assets/Bosquepopular.png"
        ruta="Bosque Popular"
        distancia="11.84 km"
        desnivel="257 m"
        tipodebicicleta="MTB-RUTA"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1_T3Akwtwu_5dQkL_jbd9CjrDFdSqlJc&ll=5.043807640211721%2C-75.47479647671528&z=15"
      />
      <routeDifficulty
        image="/assets/CerrodeOro.png"
        ruta="Cerro de Oro"
        distancia="6.4 km"
        desnivel="142 m"
        tipodebicicleta="MTB-RUTA"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1ItmeON8joQzPmZUFtqtxATQu3YYAhB0&ll=5.058048559955546%2C-75.4883409371704&z=15"
      />
    </div>
  </template>
  
  <script>
  import routeDifficulty from "@/components/molecules/RouteDifficulty.vue";
  import mainTitle from "@/components/atomos/MainTitle.vue";
  
  export default {
    name: "basicDifficulty",
    components: {
      routeDifficulty,
      mainTitle,
    },
  };
  </script>
  
  <style scoped>
  
  .dificult {
    background: var(--fondo);
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
  