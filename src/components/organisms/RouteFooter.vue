<template>
  <div>
    <footer>
      <div class="footer-center">
      <h2 class="titulo-final"><img class="bike-love" src="@/assets/footer2.png" alt="gitlogo"/>
        &copy; Creado por | Ayda Montoya
        <a href="https://github.com/AydaMontoya" target="_blanck">
          <img
            class="git-logo"
            src="@/assets/github2.png"
            alt="gitlogo"
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

<style>

footer {
  background:#1A2849;;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-center{
  display: flex;
  justify-content: space-evenly; 

}
.titulo-final {
  text-align: center;
  font-size: 20px;
  margin: auto;
  color: #f9f4f4;
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

.bike-love{
  width: 140px;
}

@media screen and (max-width: 900px) {
  footer {
    background-position: center;
  }
}
</style>
