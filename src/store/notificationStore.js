import { defineStore } from 'pinia'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications: [],
    id: 0,
    types: ['danger', 'success', 'warning', 'info']
  }),

  actions: {
    addNotification() {
      if (this.notifications.length >= 5) {
        this.notifications.shift()
      }

      this.notifications.push({
        id: this.id++,
        type: this.types[getRandomInt(4)]
      })
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter((notification) => notification.id !== id)
    }
  }
})
