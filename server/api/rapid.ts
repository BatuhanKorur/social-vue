import { Platform } from '@/types'
export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig()
  const url = `https://${env.public.twitterApiHost}/v2/search?query=lego&type=Top`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b41a986fcamshb421766987469fep1cc71ajsn49f98e54f15e',
      'x-rapidapi-host': 'twitter-api47.p.rapidapi.com'
    }
  }

  try {
    const data = await $fetch(url, options)
    return data
  } catch (error) {
    console.error(error)
    return { error: 'Failed to fetch data', err: error }
  }
})
