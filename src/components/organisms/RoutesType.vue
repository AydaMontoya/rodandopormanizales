<template>
  <div class="container">
    <div class="card">
      <img src="@/assets/nevadoRuiz.jpg" alt="Nevado del Ruiz">
        <p>La vida es como montar en bicicleta, para mantener el equilibrio hay que seguir pedaleando.<br>"Albert Einstein"</p>
        <div class="actionBtn">
        <button>
          <router-link to="/basicDifficulty"
            >Básica</router-link>
        </button>
      </div>
    </div>

    <div class="card">
      <img src="@/assets/catedral.jpg" alt="Catedral de Manizales">
      <p>Montar en bicicleta es la mejor droga antidepresiva y solo tiene buenos efectos secundarios.<br> "Gunnar Rempel"</p>
      <div class="actionBtn">
        <button>
          <router-link to="/intermediateDifficulty"
            >Intermedia</router-link>
        </button>
      </div>
    </div>

    <div class="card">
      <img src="@/assets/cable.jpg" alt="Cable Manizales" />
      <p>Al igual que los perros, las bicicletas son catalizadores sociales que atraen a una categoría superior de personas. <br> "Chip Brown"</p>
      <div class="actionBtn">
        <button>
          <router-link to="/advancedDifficulty"
            >Avanzada</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoutesType",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  height: 100%; /* //modificado */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
}

.container .card {
  width: 260px;
  height: 440px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  margin: 9px;
  margin-bottom: 20px;
  text-align: center;
  transition: all 0.25s;
}

.container .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.25);
}

.container .card img {
  width: 260px;
  height: 260px;
}

.container .card p {
  padding: 2px 1rem;
  font-size: 16px;
  font-weight: 300;
}

.container .card a {
  color: #2a2f35;
  font-weight: 500;
  text-decoration: none;
  padding: 0px 3em;
}

.container .card .actionBtn {
  display: flex;
  justify-content: center;
  padding: 2px;
  font-weight: bold;
}

.container .card .actionBtn button {
  padding: 09px 0px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  background: var(--color1);
  color: var(--color3);
  cursor: pointer;
}

</style>
