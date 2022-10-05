<template>
  <firtsView/>
  <HomeFirst/>
  <benefits/>
</template>

<script>
import benefits from "@/components/molecules/Benefits.vue";
import HomeFirst from "@/components/molecules/HomeFirst.vue";
/* import firtsView from "@/components/organisms/FirstView.vue"; */

export default {
  name: "Home",
  components: {
    benefits,
    HomeFirst,
},
};
</script>
