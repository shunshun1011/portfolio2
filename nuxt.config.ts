// https://nuxt.com/docs/api/configuration/nuxt-config
const { apiKey, baseURL, serviceDomain } = process.env
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "nuxt-microcms-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "dayjs-nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-simple-sitemap",
  ],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  microCMS: {
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
  },
  runtimeConfig: {
    srcDir: "src/",
    public: {
      passURL: process.env.BASE_URL,
      serviceDomain: process.env.SERVICE_DOMAIN,
      baseURL: process.env.BASE_URL,
    },
    passKey: process.env.API_KEY,
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&family=Zen+Maru+Gothic&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  sitemap: {
    siteUrl: "http://localhost:3000", // ← ここをあなたの本番URLに変更
    trailingSlash: false,
  } as any,
});
