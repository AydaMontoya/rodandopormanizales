<template>
  <homeFirst/>
  <benefits/>
</template>

<script>
import benefits from "@/components/molecules/Benefits.vue";
import homeFirst from "@/components/molecules/HomeFirst.vue";

export default {
  name: "Home",
  components: {
    benefits,
    homeFirst,
},
};
</script>
