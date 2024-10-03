import { type PlatformOption, Platform, SortBy, SortOrder} from "~/types";
import { SortMethods } from "@/utils";

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
    sort: {
      order: SortOrder.ASC,
      by: SortBy.DATE,
    },
    sortOptions: {
      order: [
        { key: SortOrder.ASC, label: 'Ascending' },
        { key: SortOrder.DESC, label: 'Descending' },
      ],
      by: [
        { key: SortBy.DATE, label: 'Date' },
        { key: SortBy.LIKES, label: 'Likes' },
        { key: SortBy.COMMENTS, label: 'Comments' },
        { key: SortBy.SHARES, label: 'Shares' },
      ],
    },
    searchResults: [],
  }),
  getters: {
    getSort() {
      return this.sort
    }
  },
  actions: {
    togglePlatform(key: Platform) {
      const platform = this.platforms.find(p => p.key === key)
      if (platform) {
        platform.active = !platform.active
      }
    },
    setSortOrder(order: SortOrder) {
      this.sort.order = order
    },
    setSortBy(by: SortBy) {
      this.sort.by = by
    },
    getSearchOptions() {
      return {
        platforms: this.platforms.filter(p => p.active).map(p => p.key),
        sortOrder: this.sort.order,
        sortBy: this.sort.by,
      }
    },
    setSearchResults(results) {
      this.searchResults = results
    },

    sortResults() {
      const posts = this.searchResults;
      const sortOrder = this.sort.order || 'DSC'
      const sortMethod = SortMethods[this.sort.by]?.[sortOrder];
      if (sortMethod) {
        const sortedPosts = posts.slice().sort(sortMethod);
        this.setSearchResults(sortedPosts);
      }
    }
  },
  persist: {
    key: 'search',
    storage: piniaPluginPersistedstate.localStorage()
  },
})
