import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    someState: 'hello pinia',
  }),
  persist: true,
})
