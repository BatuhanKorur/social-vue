export const useAppStore = defineStore('appStore', {
  state: () => ({
    name: 'Social Search',
    isDark: false,
    isGridView: false,
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
    },
    toggleView() {
      this.isGridView = !this.isGridView
    },
  },
  persist: {
    key: 'app',
    storage: piniaPluginPersistedstate.localStorage()
  },
})
