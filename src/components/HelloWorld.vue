<template>
<div class="containerNav"> 
      <div class="containerLogo"> 
        <a href=""><img src="../assets/Logorpm.png" width="220" height="110" alt="Logo de mi proyecto" /></a>
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

.containerNav { 
  display: flex;
  height: 150px;
  background:  #f2f2f2;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  flex-wrap: wrap;
  gap: 1rem;
}

.containerLogo{ 
  align-items: center;
  padding: 0px 0px 0px 30px;
  
}

nav a {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #2A2F35;
  padding-right: 15px;
  padding: 30px 50px 0 0;
  flex-basis: 20rem;
  flex-grow: 2;
}

nav a.router-link-exact-active {
  color: #FFC200;
}

nav a:hover{
  color:#FFC200;
}

</style>
