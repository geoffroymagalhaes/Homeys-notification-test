<template>
  <div class="side-notification">
    <BaseNotificationVue
      v-for="notification in notifications"
      :key="notification.id"
      :type="notification.type"
      :class="'notification-item'"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseNotificationVue from './BaseNotification.vue'

const props = defineProps({
  notifications: {
    type: Array,
    required: true
  }
})
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
