<template>
  <main>
    <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
      <NuxtImg src="/images/Menu.webp" alt="carousel_01" width="1900" height="1068" format="webp"
        class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
      <div class="container mx-auto max-w-screen-md absolute transform">
        <page-title title="MENU" subtitle="カットメニュー" is-white="true"></page-title>
        <div class="text-center mt-12">
          <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
            <small class="text-sm text-tertiary-900 mb-0"> Scroll </small>
            <img class="h-6 w-6 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48" height="48"
              alt="scroll" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="body" class="text-tertiary-600 body-font">
      <div class="container px-5 md:py-16 py-8 mx-auto">
        <div class="text-center mb-10">
          <h1 class="sm:text-3xl text-2xl font-bold text-tertiary-900">Price</h1>
          <div class="h-1 w-20 bg-secondary-500 rounded mx-auto mt-2"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="item in priceList" :key="item.title"
            class="bg-primary-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transform transition-all duration-300">
            <h2 class="text-lg font-semibold text-tertiary-900 mb-2">{{ item.title }}</h2>
            <ul>
              <li v-for="option in item.options" :key="option.label"
                class="flex justify-between py-2 border-b border-secondary-300 last:border-none">
                <span>{{ option.label }}</span>
                <span class="font-semibold">{{ option.price }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>
<script setup>
import PageTitle from '~/components/PageTitle.vue'

const priceList = [
  {
    title: "Cut",
    options: [
      { label: "一般", price: "¥6,000" },
      { label: "高校生", price: "¥5,000" },
      { label: "中学生以下", price: "¥3,000" },
      { label: "小学生未満", price: "¥2,000" },
      { label: "前髪カット", price: "¥1,100" }
    ]
  },
  {
    title: "Perm",
    options: [
      { label: "パーマ", price: "¥8,000〜" },
      { label: "デジタルパーマ", price: "¥11,000〜" }
    ]
  },
  {
    title: "Color",
    options: [
      { label: "カラー", price: "¥6,000〜" },
      { label: "髪質改善カラー", price: "¥9,000〜"},
      { label: "ハイライトカラー", price: "¥10,000〜" },
      { label: "インナーカラー", price: "¥13,000〜"}
    ]
  }, {
    title: "Head Spa",
    options: [
      { label: "アロマヘッドスパ", price: "¥3,000" },
      { label: "なんかすごいヘッドスパ", price: "¥4,000" },
      { label: "もっとすごいヘッドスパ", price: "¥5,000〜" },
    ]
  },
];

useHead({
  title: 'Menu | Hair Salon らしさ。',
  meta: [
    { name: 'description', content: 'Hair Salon らしさ。のカットメニューはこちらから。メニューになくても気軽にご相談ください。' },
    { property: 'og:title', content: 'Menu | Hair Salon らしさ。' },
    { property: 'og:description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${process.env.NUXT_PUBLIC_SITE_URL}/menu` },
  ],
  link: [{ rel: 'canonical', href: `${process.env.NUXT_PUBLIC_SITE_URL}/menu` }]
})
</script>
