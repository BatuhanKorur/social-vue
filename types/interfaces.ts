export interface Option {
  key: string
  label: string
}

export interface PlatformOption extends Option {
  icon: string
  active: boolean
  healthy: boolean
}
