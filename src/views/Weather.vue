<template>
    <apiweather/>
</template>
  
  <script>
  import apiweather from "@/components/organisms/ApiWeather.vue";
  
  export default {
    name: "Weather",
    components: {
        apiweather
    },
  };
  </script>