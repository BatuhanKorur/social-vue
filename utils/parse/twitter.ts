import { Platform, Post } from '~/types'
import dayjs from "dayjs";
const getVideoUrl = (variants: any[]): string => {
  const video = variants.find(v => v.content_type === 'video/mp4')
  return video ? video.url : ''
}

export default function parseTwitter(data: any): Post {
  const tweet = data.legacy
  const i: Post = {
    id: data.rest_id,
    platform: Platform.TWITTER,
    content: tweet.full_text,
    user: {},
    media: [],
    created_at: dayjs(tweet.created_at).toISOString(),
    likes: tweet.favorite_count,
    shares: tweet.retweet_count,
    comments: tweet.reply_count,
  }

  if(data.core?.user_results?.result) {
    const user = data.core.user_results.result
    i.user = {
      id: user.rest_id,
      is_verified: user.is_blue_verified,
      name: user.legacy.name,
      handle: user.legacy.screen_name,
      url: user.legacy.url,
      profile_image: user.legacy.profile_image_url_https,
      followers: user.legacy.followers_count,
    }
  }

  if(tweet.entities && tweet.entities.media) {
    i.media = tweet.entities.media.map(m => {
      return {
        type: m.type,
        url: m.type === 'photo' ? m.media_url_https : getVideoUrl(m.video_info.variants)
      }
    })
  }
  return i
}


