// https://nuxt.com/docs/api/configuration/nuxt-config
const { apiKey, baseURL, serviceDomain} = process.env
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    "nuxt-microcms-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/eslint",
    "dayjs-nuxt",
  ],
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    }
  },
  microCMS: {
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
  },
  runtimeConfig:{
    public: {
      passURL: process.env.BASE_URL,
    },
    passKey: process.env.API_KEY,
  },
})
