<template>
  <div @click="notify">
    <img :class="'addIcon'" src="../assets/icons/add.svg" alt="addIcon" width="40" height="40" />
  </div>
</template>

<script setup>
import { useNotificationsStore } from '../store/notificationStore'

const store = useNotificationsStore()

function notify() {
  store.addNotification()
}
</script>

<style scoped>
.addIcon {
  margin-left: 20px;
  transition: transform 0.3s ease;
}
.addIcon:hover {
  transform: scale(1.5);
  cursor: pointer;
}
</style>
