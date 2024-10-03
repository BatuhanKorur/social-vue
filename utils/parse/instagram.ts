import { Post, Platform } from '@/types'
import dayjs from "dayjs";

export default function parseInstagram(data){
  const i: Post = {
    id: data.id,
    platform: Platform.INSTAGRAM,
    content: data.caption.text,
    user: {},
    media: [],
    created_at: dayjs(data.caption.created_at).toISOString(),
    likes: data.like_count,
    shares: data.has_shared_to_fb,
    comments: data.comment_count
  }

  const image = data.image_versions2.candidates[0]
  i.media.push({
    type: 'photo',
    url: image.url
  })

  const user = data.user
  i.user = {
    id: user.pk,
    is_verified: user.is_verified,
    name: user.full_name,
    handle: user.username,
    url: `https://instagram.com/${user.username}`,
    profile_image: user.profile_pic_url,
    followers: 0
  }

  return i
}
