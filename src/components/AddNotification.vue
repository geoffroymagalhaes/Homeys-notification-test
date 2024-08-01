<template>
  <div @click="notify">
    <img :class="'addIcon'" src="../assets/icons/add.svg" alt="addIcon" width="40" height="40" />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['add-notification'])

function notify() {
  emit('add-notification')
}
</script>

<style scoped>
.addIcon {
  transition: transform 0.3s ease;
}
.addIcon:hover {
  transform: scale(1.5);
  cursor: pointer;
}
</style>
