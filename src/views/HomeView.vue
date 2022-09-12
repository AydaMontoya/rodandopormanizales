<template>
<div class="vistahome">
  <div class="textos-header">
            <h1>RODANDO POR MANIZALES</h1>
            <h2>Aqui encontraras las mejores rutas con la informacion necesaria para salir a rodar en compañia de tus amigos, seremos tu mejor aliado para que puedas disfrutar los maravillosos paisajes caldenses.</h2>
        </div>
        <div class="wave" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill:  #f2f2f2;"></path>
            </svg>
        </div>          
</div>
<descripcion/>
</template>

<script >
import descripcion from '@/components/ComponentDescripcion.vue';

export default {
  name: 'HomeView',
  components: {
    descripcion,
},
}
</script>

<style scope>
.vistahome {
    width: 100%;
    height: 600px;
    background: #bc4e9c;
    background: /* -webkit-linear-gradient(to right, hsla(340, 95%, 50%, 0.459), hsla(317, 45%, 52%, 0.664)), */ url(../assets/imagenP3.jpg);
    background: /* linear-gradient(to right, hsla(340, 95%, 50%, 0.459), hsla(317, 45%, 52%, 0.664)), */ url(../assets/imagenP3.jpg);
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    opacity: 0.7;
}
.vistahome .textos-header{
    display: flex;
    height: 430px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.textos-header h1{
    color:#fff;
}

.textos-header h2{
    font-weight: 300;
    color:#fff;
}

.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}

h2{
    padding: 20px 0px 0px 0px ;
}
</style>
