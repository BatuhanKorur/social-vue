import {HealthKey, HealthStatus, SocialPlatform} from '@/types'

export default defineEventHandler(async () => {
  const configs = useRuntimeConfig()
  const response = {
    status: HealthStatus.OK,
    keys: [],
    message: '',
  }

  if(!import.meta.server){
    response.status = HealthStatus.ERROR
    response.message = 'Endpoint is only available on the server'
    return response
  }

  if(!configs.rapidApiKey) {
    response.status = HealthStatus.ERROR
    response.message = 'RapidAPI Key is missing'
    return response
  }

  if(!configs.instagramApiHost) {
    response.status = HealthStatus.WARN
    response.keys.push(SocialPlatform.INSTAGRAM)
  }

  if(!configs.twitterApiHost) {
    response.status = HealthStatus.WARN
    response.keys.push(SocialPlatform.TWITTER)
  }

  if(!configs.facebookApiHost) {
    response.status = HealthStatus.WARN
    response.keys.push(SocialPlatform.FACEBOOK)
  }

  return response
})

