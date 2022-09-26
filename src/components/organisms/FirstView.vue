<template>
  <div class="hero">
    <figure class="hero_picture">
      <img
        src="@/assets/img3dHome.png" alt="" class="hero_img"/>
    </figure>

    <div class="hero_texts">
      <h1 class="hero_title">Rodando por Manizales</h1>
      <p class="hero_paragraph">
        Aqui encontraras las mejores rutas con su nivel de dificultad y
        distancia, para que salgas a rodar con tus amigos, vivas encantadoras
        aventuras y explores el maravilloso paisaje que tiene manizales para ti.
      </p>
    </div>

<!--     <div class="wave" style="height: 50px; overflow: hidden">
      <svg
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #f2f2f2"
        ></path>
      </svg>
    </div> -->
  </div>
  <descripcion />
</template>

<script>
export default {
  name: "ComponentHome",
  props: {
    msg: String,
  },
};
</script>

<style scope>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
/*     outline: 1px solid rebeccapurple; */
}

.hero{
    width: 100%;
    height: 70vh;
    width: 100%;
/*     margin: 0 auto; */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:  #0c233e;
}

.hero_picture{
    margin-bottom: 1em;
}

.hero_img{
    display: block;
    width: 380px;
    max-width: 300px;
    margin: 0 auto;
    animation: movimiento 1.9s linear infinite;
}

.hero_texts{
    flex-basis: 50%;
    color: aliceblue;
}

.hero_paragraph{
    line-height: 1.5;
    font-weight: 400;
    padding: 7px 30px 0px 0px ;
/*     font-size: 20px; */
}

@media screen and (min-width:850px){
    .hero{
        flex-direction: row;
        align-items: center;
    }

    .hero_picture{
        flex-grow: 1;
    }

    .hero_img{
        max-width: none;
    }
    
}

@keyframes movimiento{
    0%{
        transform: translateX(0);
    }
    50%{
        transform: translateX(20px);
    }
    100%{
        transform: translateX(0);
    }
}
/* 
.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
} */
</style>
