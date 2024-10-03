import {ApiStatus, Platform} from '@/types'

export const Api = {
  error: (message: string, error?: Error) => {
    return {
      status: ApiStatus.ERROR,
      message,
      error: error
    }
  },
  ok: (data: any) => {
    return {
      status: ApiStatus.OK,
      data
    }
  },
  canSearch: (platform: Platform) => {
    const env = useRuntimeConfig()
    switch (platform) {
      case Platform.TWITTER:
        return !!env.public.twitterApi
      case Platform.INSTAGRAM:
        return !!env.public.instagramApi
      case Platform.FACEBOOK:
        return !!env.public.facebookApi
      default:
        return false
    }
  },
  searchUrl: (platform: Platform, query: string) => {
    const env = useRuntimeConfig()
    switch (platform) {
      case Platform.TWITTER:
        return {
          url: `https://${env.public.twitterApi}/v2/search?query=${query}&type=Top`,
          method: 'GET',
          host: env.public.twitterApi,
        }
      case Platform.INSTAGRAM:
        return {
          url: `https://${env.public.instagramApi}/hashtag_media?hashtag=${query}&feed_type=recent'`,
          method: 'GET',
          host: env.public.instagramApi,
        }
      case Platform.FACEBOOK:
        return {
          url: `https://${env.public.facebookApi}/v2/search?query=${query}`,
          method: 'GET',
          host: env.public.facebookApi,
        }
      default:
        return ''
    }
  }
}
