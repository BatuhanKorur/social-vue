import type {Platform} from "~/types/enums";

export interface Option {
  key: string
  label: string
}

export interface PlatformOption extends Option {
  icon: string
  active: boolean
  healthy: boolean
}

export interface PostMedia {
  type: string
  url: string
}

export interface PostUser {
  id: string
  is_verified: boolean
  name: string
  handle: string
  url: string
  profile_image: string
  followers: number
}

export interface Post {
  id: string,
  platform: Platform,
  user: PostUser,
  content: string,
  media: PostMedia[],
  created_at: string,
  likes: number,
  shares: number,
  comments: number,
}
