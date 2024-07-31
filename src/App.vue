<script setup>
import BaseNotificationVue from './components/BaseNotification.vue'
</script>

<template>
  <main :class="'container'">
    <BaseNotificationVue />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
