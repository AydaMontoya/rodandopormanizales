<template>
  <mainTitle title="Colombia tiene grandes referentes del ciclismo internacional"/>
  <cycling />
</template>

<script>
import cycling from "@/components/organisms/Cycling.vue";
import mainTitle from "@/components/atoms/MainTitle.vue";

export default {
  name: "colombianCycling",
  components: {
    cycling,
    mainTitle,
  },
};
</script>

