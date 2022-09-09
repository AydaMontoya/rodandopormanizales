<template>
  <div class="fondo">
<!--     <NavBar/> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <HelloWorld/>
  <router-view/>
  <ComponentFooter/>
 </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import ComponentFooter from '@/components/ComponentFooter.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ComponentFooter,
},
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  background:  #f2f2f2;
  margin: 0%;
}

:root{
  --color1:#FFC200;
  --color2: #2A2F35;
  --color3: #0C233E;
  --color3:#364A61;
  --fondo: #f2f2f2;
  --titulos: 33px;
  --margenes: 60px;
  --espacios: 10px;
  --espacios-contenido:45px;
}
</style>
