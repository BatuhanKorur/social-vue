// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    rapidApiKey: '',
    public: {
      instagramApi: '',
      twitterApi: '',
      facebookApi: '',
    }
  },
  devtools: {
    enabled: true
  },
  fonts: {
    google: {
      families: {
        Inter: {
          wght: "100..900",
        }
      }
    }
  },
  tailwindcss: {
    cssPath: '~/assets/app.pcss',
    viewer: false,
  },
  eslint: {
    config: {
      stylistic: true,
    }
  }
})
