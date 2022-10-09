<template>
  <div>
    <NavBar/>
    <router-view/>
    <routeFooter />
  </div>
</template>

<script>
import NavBar from "./components/organisms/NavBar.vue";
import routeFooter from "@/components/organisms/RouteFooter.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    routeFooter,
  },
};
</script>

<style>
#app {
  font-family: "Nunito", sans-serif;
  background: #f2f2f2;
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color1: #ffc200;
  --color2: #2a2f35;
  --color3: #0c233e;
  --color4: #364a61;
  --fondo: #f2f2f2;
  --titulos: 33px;
  --margenes: 60px;
  --espacios: 10px;
  --espacios-contenido: 45px;
}

</style>
