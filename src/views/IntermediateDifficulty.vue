<template>
    <div>
      <mainTitle title="Elige tu nuevo reto"/>
    </div>
    <div class="dificult">
      <routeDifficulty
        image="/assets/Acuaparque.png"
        ruta="Acquaparque"
        distancia="29.68 km"
        desnivel="723 m"
        tipodebicicleta="MTB-RUTA"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1F1Gb1nsxoZI0uTAbctLif7sRINCebdU&ll=5.037052578096215%2C-75.50634150623236&z=13"
      />
      <routeDifficulty
        image="/assets/Lapuerta.png"
        ruta="La puerta"
        distancia="18.98 km"
        desnivel="451 m"
        tipodebicicleta="MTB"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1mCkOnkt5RHDM_fEuBTqrby2W8Crknxc&ll=5.057919739527988%2C-75.4878794368575&z=14"
      />
      <routeDifficulty
        image="/assets/ReservadelRuiz.png"
        ruta="Reserva del ruiz"
        distancia="34.38 km"
        desnivel="794 m"
        tipodebicicleta="MTB"
        mapa="https://www.google.com/maps/d/u/0/edit?mid=1UM19QYQFZ-kXtia02TrLzkqHLjM84Hk&ll=5.013169578767074%2C-75.49325610398778&z=13"
      />
    </div>
  </template>
  
  <script>
  import routeDifficulty from "@/components/molecules/RouteDifficulty.vue";
  import mainTitle from "@/components/atomos/MainTitle.vue";
  
  export default {
    name: "intermediateDifficulty",
    components: {
      routeDifficulty,
      mainTitle
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
  