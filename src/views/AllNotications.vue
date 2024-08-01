<script setup>
import { ref } from 'vue'
import BaseNotificationVue from '../components/BaseNotification.vue'
import AddNotification from '@/components/AddNotification.vue'
import SideNotification from '../components/SideNotification.vue'

const notifications = ref([])
const types = ['danger', 'success', 'warning', 'info']

let id = ref(0)

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function addNotification() {
  notifications.value.push({ id: id.value++, type: types[getRandomInt(4)] })
}
</script>

<template>
  <!-- <BaseNotificationVue type="danger" />
  <BaseNotificationVue type="success" /> -->
  <AddNotification @add-notification="addNotification" />
  <!-- <BaseNotificationVue type="warning" />
  <BaseNotificationVue type="info" /> -->
  <SideNotification :notifications="notifications" />
</template>

<style scoped></style>
