<template>
  <div class="header">
    <div class="logo-header">
      <a href=""
        ><img src="@/assets/logoRPM.png" alt="Logo del proyecto"
      /></a>
    </div>
    <nav class="nav-menu">
      <label for="check" class="checkbtn">
        <i class="menu-icon"
          ><img src="@/assets/hamburguesa.png" alt="icono hamburguesa"
        /></i>
      </label>
      <input name="check" type="checkbox" id="check" />
      <ul>
        <li><router-link :onclick="ejemplo" to="/">Inicio</router-link></li>
        <li>
          <router-link :onclick="ejemplo" to="/bikeRoutes">Rutas</router-link>
        </li>
        <li>
          <router-link :onclick="ejemplo" to="/weather"
            >Valida el clima</router-link
          >
        </li>
        <li>
          <router-link :onclick="ejemplo" to="/colombianCycling"
            >Ciclismo Colombiano</router-link
          >
        </li>
        <li>
          <router-link :onclick="ejemplo" to="/login">Registrarse</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  methods: {
    ejemplo: function () {
      document.getElementById("check").click();
    },
  },
};
</script>

<style scoped>

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

a, li {
  color: var(--color2);
  font-size: 20px;
}

.logo-header img {
  width: 150px;
}

.header {
  background-color: var(--fondo);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 25px;
}
.nav-menu ul {
  display: flex;
  align-items: center;
}
.nav-menu li {
  margin-right: 1.5rem;
  color: var(--color1);
}
.nav-menu a:hover {
  color: var(--color1);
}
.nav-menu li:last-child {
  background-color: var(--color1);
  border: 2px solid;
  padding: 0.25rem 0.75rem;
  border-radius: 0.2rem;
}
.nav-menu li:last-child:hover {
  background: transparent;
  border: 2px solid var(--color1);
}
.menu-icon img {
  width: 35px;
  height: 35px;
  border-radius: 2px;
}

.menu-icon, #check {
  display: none;
}

@media (max-width: 896px) {
  .checkbtn {
    display: block;
  }
  .menu-icon {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .nav-menu ul {
    display: block;
    position: absolute;
    overflow-y: hidden;
    z-index: 1000;
    top: 95px;
    left: -100%;
    background: var(--fondo);
    width: 100%;
    right: 0;
  }
  .nav-menu ul li {
    padding: 3px;
    display: flex;
    justify-content: center;
    margin: 0;
  }
  .nav-menu ul li:last-child {
    background: none;
    border: none;
  }

  #check:checked ~ ul {
    left: 0;
    transition: all 0.25s;
  }
}
</style>
