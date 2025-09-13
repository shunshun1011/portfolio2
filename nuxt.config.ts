// https://nuxt.com/docs/api/configuration/nuxt-config
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});
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
    // 動的なルートを設定します
    // 'urls' オプションに、URLオブジェクトの配列を返す関数を指定します
    urls: async () => {
      try {
        const { contents } = await client.get({
          endpoint: "info", // microCMSのブログエンドポイント名に合わせる
          queries: { limit: 100 }, // 全ての記事を取得するため、上限を大きく設定
        });

        // 取得した記事からURLオブジェクトの配列を作成
        return contents.map((content: any) => ({
          loc: `/info/${content.id}`, // パスを指定
          // 最終更新日や変更頻度などを設定することもできます
          // lastmod: content.updatedAt,
          // changefreq: 'weekly',
        }));
      } catch (error) {
        console.error("Failed to fetch blog posts from microCMS:", error);
        return [];
      }
    },
  },
});
