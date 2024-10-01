import { Platform, SocialPlatform, SortBy, SortOrder } from "~/types";

export const useSocialStore = defineStore('socialStore', {
  state: (): {
    platforms: Platform[],
    sortOrder: SortOrder,
    sortBy: SortBy,
  } => ({
    platforms: [
      {
        label: 'Twitter',
        icon: 'ph:twitter-logo',
        key: SocialPlatform.TWITTER,
        active: false,
        healthy: false,
      },
      {
        label: 'Facebook',
        icon: 'ph:facebook-logo',
        key: SocialPlatform.FACEBOOK,
        active: false,
        healthy: false,
      },
      {
        label: 'Instagram',
        icon: 'ph:instagram-logo',
        key: SocialPlatform.INSTAGRAM,
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
    }
  }),
  actions: {
    togglePlatform(key: string) {
      const platform = this.platforms.find(p => p.key === key)
      if (platform) {
        platform.active = !platform.active
      }
    },
    setUnhealthyPlatforms(keys: SocialPlatform[]) {
      this.platforms.forEach(platform => {
        platform.healthy = !keys.includes(platform.key)
      })
    },
    setSortOrder(order: SortOrder) {
      this.sort.order = order
    },
    setSortBy(by: SortBy) {
      this.sort.by = by
    },
  },
})
