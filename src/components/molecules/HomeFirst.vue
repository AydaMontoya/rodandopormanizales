<template>
  <div>
    <div class="container_all" id="container__all">
      <div class="cover">
        <!--INICIO WAVE-->

        <div class="bg_color"></div>
        <div class="wave w1"></div>
        <div class="wave w2"></div>

        <!--FINAL WAVE-->

        <div class="container__cover">
          <div class="container__info">
            <h1>RODANDO POR</h1>
            <h2>MANIZALES</h2>
            <p>
              Aqui encontraras las mejores rutas con su nivel de dificultad y
              distancia, para que salgas a rodar con tus amigos, vivas
              encantadoras aventuras y explores el maravilloso paisaje que tiene
              manizales para ti.
            </p>
            <!-- <input type="button" value="Get Started"> -->
          </div>
          <div class="container__vector">
            <img src="@/assets/img3dHome.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.container_all {
  position: relative;
  right: 0;
  transition: all 300ms;
}

/*COVER*/

.cover {
  width: 100%;
  padding-bottom: 170px;
  /* font-family: 'Poppins', sans-serif; */
  padding-top: 100px;
  position: relative;
  overflow: hidden;
}

/*WAVE INICIO*/

.bg_color {
  width: 100%;
  height: 70%;
  background: #0c233e;
  position: absolute;
  top: 0;
}

.wave {
  width: 6000px;
  height: 100%;
  position: absolute;
  top: 150px;
  left: 0;
  background-image: url(@/assets/wd1.svg);
  background-position: bottom;
}

.w1 {
  animation: w1 7s linear infinite;
}

.w2 {
  animation: w2 7s linear -0.125s infinite,
    desplazamiento 7s ease -0.125s infinite;
  opacity: 0.5;
}

@keyframes w1 {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes w2 {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes desplazamiento {
  0%,
  100% {
    transform: translateY(-25px);
  }

  50% {
    transform: translateY(10px);
  }
}
/*WAVE FINAL*/

.container__cover {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;

  *background-image: url(@/assets/background-cover.svg);
  background-size: cover;
  background-position: bottom;
}

.cover .container__info {
  max-width: 470px;
  margin-top: 40px;
  z-index: 2;
}

.cover h1 {
  max-width: 400px;
  font-size: 55px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  color: #fff;
  margin-top: -90px;
  margin-bottom: 10px;
}

.cover h2 {
  font-size: 55px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  color: #feba0b;
  margin-top: -20px;
}

.cover p {
  margin-top: 10px;
  color: #fff;
  font-size: 20px;
}

.container__vector {
  position: relative;
}

.container__vector img {
  position: absolute;
  bottom: -60px;
  right: 0px;
  width: 470px;
  transition: all 300ms;
  animation: move_vector 5s ease-in-out infinite;
}

@keyframes move_vector {
  0% {
    transform: translateX(10px);
  }
  25% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(10px);
  }
}

@media screen and (max-width: 920px) {
  .container__vector img {
    width: 500px;
  }
}

@media screen and (max-width: 760px) {
  .container__nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__menu {
    display: flex;
  }

  nav {
    height: 100%;
    background: #f1faff;
    position: fixed;
    top: 0;
    right: -180px;
    padding: 0px 40px;
    transition: all 300ms;
  }

  .move_nav {
    right: 0px;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 20px 0px;
  }

  .container__vector img {
    transform: scale(0);
    animation: none;
  }
}
</style>
