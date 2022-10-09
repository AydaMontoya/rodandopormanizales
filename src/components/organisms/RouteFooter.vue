<template>
  <div>
    <footer>
      <div class="footer-center">
        <h2 class="final-title">
          <img
            class="bike-love"
            src="@/assets/bikeLove.png"
            alt="Amor por la bici"
          />
          &copy; Creado por <spam> | Ayda Montoya Henao </spam>
          <a href="https://github.com/AydaMontoya" target="_blanck">
            <img class="git-logo" src="@/assets/github.png" alt="gitlogo"
          /></a>
        </h2>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ComponentFooter",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
footer {
  background:var(--color3);
  overflow: hidden;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-center {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}

.final-title {
  text-align: center;
  font-size: 20px;
  margin: auto;
  color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.git-logo {
  width: 30px;
  margin-left: 4px;
  border-radius: 70%;
}

.bike-love {
  width: 150px;
}

@media screen and (max-width: 900px) {
  footer {
    background-position: center;
  }

  h2 {
    max-width: 800px;
  }
}
</style>
