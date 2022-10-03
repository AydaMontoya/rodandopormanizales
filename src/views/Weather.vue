<template>
    <apiWeather/>
  </template>
  
  <script>
  import apiWeather from "@/components/organisms/ApiWeather.vue";
  
  export default {
    name: "Clima",
    components: {
      apiWeather,
    },
  };

  </script>