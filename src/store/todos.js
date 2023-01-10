import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    items: [
      {
        label: 'feed the cat!',
        done: false
      },
      {
        label: 'feed wife!',
        done: false
      }
    ]
  })
})