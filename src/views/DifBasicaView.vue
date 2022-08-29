<template>
    <div>
        <div>
           <!-- El titulo de Rutas aqui -->
          <h2>DIFICULTAD BASICA</h2>
        </div>
        <div class="containerTarjeta">
        <ComponentCardDificultad titleComponentCardDificultad="Ayda"/>
        <ComponentCardDificultad titleComponentCardDificultad="Juan" altitud="1000KM"/>
        </div>
    </div>
</template>

<script>
import ComponentCardDificultad from '@/components/ComponentCardDificultad.vue'

export default {
  components: {
    ComponentCardDificultad
}
}
</script>

<style scope>

.containerTarjeta{
    display: flex;
    margin: 100px;
    flex-direction: row;
}
</style>
