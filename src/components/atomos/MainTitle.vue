<template>
  <div class="title">
    <h1>{{ title }} <br> {{ subtitle }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  subtitle: String,
});
</script>

<style scoped>

.title {
  color: #0c233e;
  text-align: center;
}
</style>
