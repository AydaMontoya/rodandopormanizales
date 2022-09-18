<template>
<home/>
<descripcion/>
</template>

<script >
import descripcion from '@/components/ComponentDescripcion.vue';
import home from '@/components/ComponentHome.vue';

export default {
  name: 'HomeView',
  components: {
    descripcion,
    home
},
}
</script>

