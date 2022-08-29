<template>
    <div class="descripcion">
         <h2 class="titulo">Beneficios de andar en bicicleta</h2>
            <div class="contenedor-descripcion">
                <img src="../assets/catedral.jpg" alt="" class="imagen-Catedral">
                <div class="contenido-textos">
                    <h3><img class="bicilogo" src="../assets/icono.jpg" alt="Bicilogo"/>Te ayuda a perder peso</h3>
                    <h3><img class="bicilogo" src="../assets/icono.jpg" alt="Bicilogo"/>Fortalece los músculos</h3>
                    <h3><img class="bicilogo" src="../assets/icono.jpg" alt="Bicilogo"/>Ahorrás en combustible</h3>
                    <h3><img class="bicilogo" src="../assets/icono.jpg" alt="Bicilogo"/>Evitás el tráfico en la ciudad</h3>
                    <h3><img class="bicilogo" src="../assets/icono.jpg" alt="Bicilogo"/>Cuidas el medio ambiente</h3>
                    <h3><img class="bicilogo" src="../assets/icono.jpg" alt="Bicilogo"/>Te hace feliz !!!</h3>
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

.descripcion{
    padding: 150px 0 60px 0;
}
.contenedor-descripcion{
    display: flex;
    justify-content: space-evenly;
}

.imagen-Catedral{
    width: 25%;
    height: 80%;
    border-radius: 20px;
}

.descripcion .contenido-textos{
    width: 30%;
}

.contenido-textos h3{
    margin-bottom: 20px;
    text-align: justify;
    color:  hsl(23, 82%, 50%);
    font-size: 20px;
}

.contenido-textos h3 span{
    background: hsl(23, 82%, 50%);
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 10px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    margin-right: 5px;
}

.contenido-textos p{
    padding: 0px 0px 30px 15px;
    font-weight: 300;
    text-align: justify;
}

.bicilogo {
  width: 60px;
  height: 60px;
  margin-left: 4px;
  background-size: cover;
  border-radius: 50%;
}

</style>