<template>
  <First/>
  <benefits/>
</template>

<script>
import benefits from "@/components/molecule/Benefits.vue";
import First from "@/components/molecule/First.vue";

export default {
  name: "Home",
  components: {
    benefits,
    First,
},
};
</script>
