// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/image'
  ],
  tailwindcss: {
    cssPath: '~/assets/app.pcss',
    viewer: false,
  },
  runtimeConfig: {
    rapidApiKey: '',
    instagramApiHost: '',
    twitterApiHost: '',
    facebookApiHost: '',
  },
  eslint: {
    config: {
      stylistic: true,
    }
  }
})