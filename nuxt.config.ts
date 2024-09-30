// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon'],
  tailwindcss: {
    cssPath: '~/assets/app.pcss',
    viewer: false,
  }
})