<template>
      <div>
      <mainTitle title="Elige la dificultad a la que deseas enfrentarte" />
    </div>
  <routesType/>
</template>

<script>
import routesType from "@/components/organisms/RoutesType.vue";
import mainTitle from "@/components/atomos/MainTitle.vue";

export default {
  name: "bikeRoutes",
  components: {
    routesType,
    mainTitle,
  },
};
</script>
