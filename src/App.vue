<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main :class="'container'">
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100vh;
}
</style>
