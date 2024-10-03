import {Platform, RapidAPIHeaders} from '@/types'

export const rapidApi = {
  headers: (env, platform: Platform) => {
    return {
      [RapidAPIHeaders.KEY]: env.rapidApiKey,
      [RapidAPIHeaders.HOST]: (() => {
        switch (platform) {
          case Platform.TW:
            return env.public.twitterApiHost
          case Platform.IG:
            return env.public.instagramApiHost
          case Platform.FB:
            return env.public.facebookApiHost
          default:
            return undefined
        }
      })()
    }
  },
  searchUrl: (platform: Platform, query: string) => {
    const env = useRuntimeConfig().public
    switch (platform) {
      case Platform.TW:
        return `https://${env.twitterApiHost}/v2/search?query=${query}`
      case Platform.IG:
        return `https://${env.instagramApiHost}${query}`
      case Platform.FB:
        return `https://${env.facebookApiHost}${query}`
      default:
        return undefined
    }
  },
}
