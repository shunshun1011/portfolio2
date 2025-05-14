<template>
  <div>
    <nav />
    <carouselSection/>
    <HeroSection id="body" />
    <infoSection />
    <contactSection />
  </div>
</template>
<script setup>
useHead({
  title: 'Hair Salon らしさ | 自然体でいられる美容室',
  meta: [
    { name: 'description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
    { property: 'og:title', content: 'Hair Salon らしさ。 | 自然体でいられる美容室' },
    { property: 'og:description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://wthk-portfoliosite2.netlify.app/' },
    { property: 'og:image', content: 'https://wthk-portfoliosite2.netlify.app/ogp.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://wthk-portfoliosite2.netlify.app/' }
  ]
})
</script>