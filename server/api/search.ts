import {Platform, RapidHeaders} from '@/types'
import { parse, Api } from '@/utils'

export default defineEventHandler(async (event) => {
  const {query, options} = await readBody(event)
  const { rapidApiKey } = useRuntimeConfig()

  if(!rapidApiKey) return Api.error('Rapid API Key not found')
  if (options.platforms.length === 0) return Api.error('No platforms selected')

  const unavailablePlatformError = validatePlatformAvailability(options.platforms)
  if (unavailablePlatformError) return Api.error(unavailablePlatformError)

  return await fetchDataFromPlatforms(options.platforms, query, rapidApiKey)
})

async function fetchDataFromPlatforms(platforms: Platform[], query: string, rapidApiKey: string) {
  const results = []
  for(const platform of platforms) {
    const { url, method, host } = Api.searchUrl(platform, query);
    try {
      const res = await $fetch(url, {
        method,
        headers: {
          [RapidHeaders.KEY]: rapidApiKey,
          [RapidHeaders.HOST]: host,
        }
      });
      if (platform === Platform.TWITTER) {
        res.tweets.forEach((tweet: any) => {
          results.push(parse(Platform.TWITTER, tweet));
        });
      }
      if(platform === Platform.INSTAGRAM) {
        console.log(res)
        res.data.medias.forEach((media: any) => {
          results.push(parse(Platform.INSTAGRAM, media));
        })
      }
    } catch (error) {
      console.log(error)
      return Api.error(`An error occurred while fetching ${platform} data`, error);
    }
  }
  return Api.ok(results)
}

function validatePlatformAvailability(platforms: Platform[]): string | null {
  for (const platform of platforms) {
    console.log(platform, Api.canSearch(platform))
    if (!Api.canSearch(platform)) {
      return `${platform} API not available`;
    }
  }
  return null;
}
