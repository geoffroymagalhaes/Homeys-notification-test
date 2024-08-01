<template>
  <div class="side-notification">
    <BaseNotificationVue
      v-for="notification in notifications"
      :key="notification.id"
      :type="notification.type"
      :id="notification.id"
    />
  </div>
</template>

<script setup>
import BaseNotificationVue from '../components/BaseNotification.vue'
import { useNotificationsStore } from '../store/notificationStore'
import { storeToRefs } from 'pinia'
const store = useNotificationsStore()
const { notifications } = storeToRefs(store)
</script>

<style scoped>
.side-notification {
  position: fixed;
  bottom: 0;
  left: 0;
  max-height: 350px;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
