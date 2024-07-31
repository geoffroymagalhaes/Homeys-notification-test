import { createRouter, createWebHistory } from 'vue-router'
import AllNotications from '@/views/AllNotications.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all-notifications',
      component: AllNotications
    }
  ]
})

export default router
