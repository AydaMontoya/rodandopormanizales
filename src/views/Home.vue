<template>
  <HomeFirst/>
  <benefits/>
</template>

<script>
import benefits from "@/components/molecules/Benefits.vue";
import HomeFirst from "@/components/molecules/HomeFirst.vue";

export default {
  name: "Home",
  components: {
    benefits,
    HomeFirst,
},
};
</script>
