export interface KeyLabel {
  key: string
  label: string
}

export interface Platform extends KeyLabel {
  icon: string
  active: boolean
  healthy: boolean
}

export enum SocialPlatform {
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum SortBy {
  DATE = 'date',
  LIKES = 'likes',
  COMMENTS = 'comments',
  SHARES = 'shares',
}

export enum HealthStatus {
  OK = 'ok',
  WARN = 'warn',
  ERROR = 'error',
}
