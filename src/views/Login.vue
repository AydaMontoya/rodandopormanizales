<template>
  <div>
    <mainTitle title="Registrate para recibir información de nuevas rutas" />
  </div>
  <checkinLogin />
</template>

<script>
import checkinLogin from "@/components/organisms/CheckinLogin.vue";
import mainTitle from "@/components/atomos/MainTitle.vue";

export default {
  name: "login",
  components: {
    checkinLogin,
    mainTitle,
  },
};
</script>
