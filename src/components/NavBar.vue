<template>
  <div class="header">
    <div class="logo-header">
      <a href=""><img src="../assets/Logorpm.png"  alt="Logo de mi proyecto" /></a>
    </div>
    <nav class="nav-menu">

      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="menu-icon"><img src="../assets/hamburguesa.png" alt="icono hamburguesa"></i>
      </label>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/rutas">Rutas</router-link></li>
        <li><router-link to="/ciclismo">Ciclismo Colombiano</router-link></li>
        <li><a href="#">Registrarse</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
      export default {
      name: 'NavBar',
      props: {
        msg: String
      }
    }
</script>

<style scoped>

  *{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }

  a, li{
    color: #2A2F35;
    font-size: 20px;
  }

  .logo-header img{
    width: 120px;
  }

  .header{
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 25px;
  }
  
  .nav-menu ul{
    display: flex;
    align-items: center;
  /*   background: transparent; */
  }

  .nav-menu li{
    margin-right: 1.5rem;
    color: #FFC200;
  }

  .nav-menu a:hover{
    color: #FFC200;
  }

  .nav-menu li:last-child{
    background-color: #FFC200;
    border: 2px solid;
    padding: .25rem .75rem;
    border-radius: .2rem;
  }

  .nav-menu li:last-child:hover{
    background: transparent;
    border: 2px solid #FFC200;
  }

    .menu-icon img{
      width: 35px;
      height: 35px;
      border-radius: 2px;
    }

    .menu-icon, #check{
      display: none;
    }

    @media (max-width:768px){
    .checkbtn{
        display: block
    }

    .menu-icon{
        display: block;
        position: fixed;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .nav-menu ul{
      display: block;
      position: fixed;
      top: 95px;
      left: -100%;
      background:#f2f2f2;
      width: 100%;
      height: 100vh;
      right: 0;
    }

    .nav-menu ul li{
      padding: 3px;
      display: flex;
      justify-content: right;
      margin: 0;
    }

    .nav-menu ul li:last-child{
      background: none;
      border: none;
    }

    #check:checked ~ ul{
      left: 0;
      transition: all .25s;
    }
  }
</style>
   
