<template>
<div class="vistahome">
  <div class="textos-header">
            <h1>RODANDO POR MANIZALES</h1>
            <h2>Tu mejor aliado para salir a rodar</h2>
        </div>
        <div class="wave" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #fff;"></path>
            </svg></div>
            <descripcion/>
            <PiedePagina/>
</div>
</template>

<script >
import descripcion from '@/components/ComponentDescripcion.vue';
import PiedePagina from '@/components/ComponentFooter.vue'

export default {
  name: 'HomeView',
  components: {
    descripcion,
    PiedePagina,
},
}
</script>

<style scope>
.vistahome {
    width: 100%;
    height: 600px;
    background: #bc4e9c;
    background: -webkit-linear-gradient(to right, hsla(340, 95%, 50%, 0.459), hsla(317, 45%, 52%, 0.664)), url(../assets/rodandoxmanizales.jpg);
    background: linear-gradient(to right, hsla(340, 95%, 50%, 0.459), hsla(317, 45%, 52%, 0.664)), url(../assets/rodandoxmanizales2.jpg);
    background-size: cover;
    background-attachment: fixed;
    position: relative;
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
    font-size: 50px;
    color:#fff;
}

.textos-header h2{
    font-size: 30px;
    font-weight: 300;
    color:#fff;
}

.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
