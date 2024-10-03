// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    'pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    rapidApiKey: '',
    public: {
      instagramApiHost: '',
      twitterApiHost: 'twitter-api47.p.rapidapi.com',
      facebookApiHost: '',
    },
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
