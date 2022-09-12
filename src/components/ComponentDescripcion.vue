<template>
    <div class="beneficios">
        <div class="contenedor beneficios">
            <h1 class="titulo">Beneficios de montar en bicicleta</h1>
            <div class="contenedor-beneficios">
                <img src="../assets/bici1.jpg" alt="" class="imagen-catedral">
                <ul class="contenido-textos">
                    <li>Reduce los niveles de estrés</li>
                    <li>Mejora la autoestima</li>
                    <li>Previene el deterioro cognitivo</li>
                    <li>Mejora la memoria</li>
                    <li>Ayuda a controlar las adcciones</li>
                    <li>Mejora el estado animico</li>
                    <li>Reduce la agresividad</li>
                    <li>Te ayuda a ser mas productivo</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ComponentDescripcion',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.beneficios {
    padding: 5px 0 60px 0;
}
.contenedor-beneficios{
    display: flex;
    justify-content: space-evenly;
}

.titulo {
    color: #0C233E;
    text-align: center;
    margin-bottom: 40px;
}

.imagen-catedral{
    width: 30%;
    border-radius: 10%;
    padding: 0px 0px 30px 0px;
}

.beneficios .contenido-textos{
    width: 40%;
    list-style: none;
    padding: 25px 0px 0px 0px;
}

.contenido-textos li{
    margin-bottom: 15px;
    padding: 0px 0px 0px 80px;
    color: #2A2F35;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}


li::before{
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url(../assets/icono.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}

@media screen and (max-width:900px){

    .contenedor-beneficios{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .beneficios .contenido-textos{
        width: 50%;
        padding: 0px 0px 0px 0px;
    }

    .imagen-catedral{
        width: 50%;
    }
}

    @media screen and (max-width:500px){
    .imagen-catedral{
        margin-bottom: 40px;
        width: 99%;
    }

    .beneficios .contenido-textos{
        width: 95%;
    }
}
    
</style>