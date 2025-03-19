import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    collapsible: false
  }),
  actions: {
    toggle() {
      this.collapsible = !this.collapsible
      console.log(this.collapsible)
    },
    set(value: boolean) {
      this.collapsible = value
    }
  }
})
