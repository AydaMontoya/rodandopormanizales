<template>
  <firtsView/>
  <benefits/>
</template>

<script>
import benefits from "@/components/molecules/Benefits.vue";
import firtsView from "@/components/organisms/FirstView.vue";

export default {
  name: "Home",
  components: {
    benefits,
    firtsView,
  },
};
</script>
