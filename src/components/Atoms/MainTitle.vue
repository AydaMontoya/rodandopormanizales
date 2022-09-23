<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
});
</script>

<style scoped>

.title {
  color: #0c233e;
  text-align: center;
}
</style>
