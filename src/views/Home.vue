<template>
  <First/>
  <benefits/>
</template>

<script>
import benefits from "@/components/molecules/Benefits.vue";
import First from "@/components/molecules/First.vue";

export default {
  name: "Home",
  components: {
    benefits,
    First,
},
};
</script>
