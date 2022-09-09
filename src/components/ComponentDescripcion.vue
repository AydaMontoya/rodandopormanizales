<template>
    <div class="beneficios">
        <div class="contenedor beneficios">
            <h1 class="titulo">Beneficios de montar en bicicleta</h1>
            <div class="contenedor-beneficios">
                <img src="../assets/catedral.jpg" alt="" class="imagen-catedral">
                <div class="contenido-textos">
                    <h3><span>1</span>Reduce los niveles de estrés</h3>
                    <h3><span>2</span>Mejora la autoestima</h3>
                    <h3><span>3</span>Previene el deterioro cognitivo</h3>
                    <h3><span>4</span>Mejora la memoria</h3>
                    <h3><span>5</span>Ayuda a controlar las adcciones</h3>
                    <h3><span>6</span>Mejora el estado animico</h3>
                    <h3><span>7</span>Reduce la agresividad</h3>
                    <h3><span>8</span>Mejora las relaciones sociales</h3>
                    <h3><span>9</span>Te ayuda a ser mas productivo</h3>
                    <h3><span>10</span>Eres menos propenso a sufrir depresión</h3>
                </div>
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
    width: 25%;
    border-radius: 10%;
    padding: 0px 0px 30px 0px;
}

.beneficios .contenido-textos{
    width: 40%;
}

.contenido-textos h3{
    margin-bottom: 15px;
    padding: 0px 0px 0px 70px;
}

.contenido-textos h3 span{
    background: #FFC200;
    color: #2A2F35;
    font-weight: bold;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
    padding: 2px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    margin-right: 12px;
}

.contenido-textos h3{
    padding: 0px 0px 0px 90px;
    text-align: justify;
    color: #2A2F35;
    /* font-weight: bold; */
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
        margin-bottom: 60px;
        width: 99%;
    }

    .beneficios .contenido-textos{
        width: 95%;
    }
}
    
</style>