<template>
  <div class="container">
    <div class="card">
      <img src="../assets/CerroOro2.jpg" alt="Avatar" style="width: 100%" />
      <div class="containerdatos">
        <h4>
          <b>{{ titleComponentCardDificultad }} </b>
        </h4>
        <p>Architect & Engineer</p>
        <p>{{ altitud }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: Image,
    titleComponentCardDificultad: String,
    altitud: String,
  },
};
</script>

<style scope>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 400px;
  width: 300px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
/* Add some padding inside the card container */
.containerdatos {
  padding: 2px 16px;
}
</style>
