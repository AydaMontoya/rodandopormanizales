<template>
  <mainTitle title="Colombia tiene grandes referentes en el ciclismo internacional" subtitle="a continuación veremos algunos de ellos"/>
  <cycling />
</template>

<script>
import cycling from "@/components/organisms/Cycling.vue";
import mainTitle from "@/components/atomos/MainTitle.vue";

export default {
  name: "colombianCycling",
  components: {
    cycling,
    mainTitle,
  },
};
</script>

