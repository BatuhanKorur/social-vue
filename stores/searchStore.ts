import {Platform, type PlatformOption, SortBy, SortOrder} from "~/types";
import {SortMethods} from "@/utils";

export const useSearchStore = defineStore('searchStore', {
  state: (): {
    platforms: PlatformOption[],
    sortOrder: SortOrder,
    sortBy: SortBy,
    searchResults: []
  } => ({
    platforms: [{
        label: 'Twitter',
        icon: 'ph:twitter-logo',
        key: Platform.TWITTER,
        active: false,
        healthy: false,
      }, {
        label: 'Facebook',
        icon: 'ph:facebook-logo',
        key: Platform.FACEBOOK,
        active: false,
        healthy: false,
      }, {
        label: 'Instagram',
        icon: 'ph:instagram-logo',
        key: Platform.INSTAGRAM,
        active: false,
        healthy: false,
      }
    ],
    filters: {
      sortOrder: SortOrder.ASC,
      sortBy: SortBy.DATE,
    },
    searchResults: [],
  }),
  getters: {
    getFilters() {
      return this.filters
    },
    getSearchOptions() {
      return {
        platforms: this.platforms.filter(p => p.active).map(p => p.key),
        sortOrder: this.filters.sortOrder,
        sortBy: this.filters.sortBy,
      }
    },
    getSortOptions() {
      return {
        sortOrder: [
          { key: SortOrder.ASC, label: 'Ascending' },
          { key: SortOrder.DESC, label: 'Descending' },
        ],
        sortBy: [
          { key: SortBy.DATE, label: 'Date' },
          { key: SortBy.LIKES, label: 'Likes' },
          { key: SortBy.COMMENTS, label: 'Comments' },
          { key: SortBy.SHARES, label: 'Shares' },
        ],
      }
    },
    getPosts(){
      return this.searchResults
    },
    getActivePlatforms() {
      return this.platforms.filter(p => p.active).map(p => p.key)
    }
  },
  actions: {
    togglePlatform(key: Platform) {
      const platform = this.platforms.find(p => p.key === key)
      if (platform) {
        platform.active = !platform.active
      }
    },
    setFilters(key: string, value: any) {
      this.filters[key] = value
    },
    applyFilters() {
      const posts = this.searchResults;
      const sortOrder = this.filters.sortOrder || 'DSC'
      const sortMethod = SortMethods[this.filters.sortBy]?.[sortOrder];
      if (sortMethod) {
        this.searchResults = posts.slice().sort(sortMethod)
      }
    },
    setSearchResults(results) {
      this.searchResults = results
    },
  },
  persist: {
    key: 'search',
    storage: piniaPluginPersistedstate.localStorage()
  },
})
