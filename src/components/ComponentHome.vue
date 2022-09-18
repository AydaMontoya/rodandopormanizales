<template>
    <div class="vistahome">
      <div class="textoHome">
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

<script>
    export default {
      name: 'ComponentHome',
      props: {
        msg: String
      }
    }
</script>

<style scope>
    
    .vistahome {
        width: 100%;
        height: 100vh;
        background: url(../assets/imagenP3.jpg);
        background: url(../assets/imagenP3.jpg);
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        font-size: 13px;
        opacity: 0.9;
        color: #fff;
    }
    
    .textoHome {
        background-color: rgba(1, 4, 9, 0.552);
        padding: 20px 20px 10px 50px;
        text-align: center;
        width: 60%;
        border-radius: 8px;
    }
    
    .wave{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    
    </style>
    