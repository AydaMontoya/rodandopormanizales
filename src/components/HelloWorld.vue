<template>
<div class="container"> <!-- HEADER -->
      <div class="containerLogo"> <!-- logo -->
        <a href=""><img src="../assets/Logorpm.png" width="210" height="210" alt="Logo de mi proyecto" /></a>
      </div>  
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/rutas">Rutas</router-link> |
    <router-link to="/ciclismo">Ciclismo Colombiano</router-link>
  </nav>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.container{ /* header */
  display: flex;
  height: 80px;
  background: rgba(255, 254, 254, 0.37);
  justify-content: space-between;
  align-items: center;
  padding: 15px;

}
.containerLogo{ /* logo */
  align-items: center;
  padding: 20px 0px 0px 20px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #18191a;
  padding-right: 15px;
  padding: 30px 50px 0 0;
}

nav a.router-link-exact-active {
  color: hsl(23, 82%, 50%);
}

nav a:hover{
  color: hsl(23, 82%, 50%);
}

@media (max-width:700px){
  .container{
      flex-direction: column;
  }

  nav{
    padding: 10px 0px;
  }
}

</style>
