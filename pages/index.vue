<template>
  <div>
    <LoadingScreen :visible="showOpening" />
    <!-- ヘッダー・フッターは isLoading が false のときだけ表示 -->
    <div v-if="!showOpening">
      <nav />
      <carouselSection />
      <HeroSection id="body" />
      <infoSection />
      <contactSection />
      <footer />
    </div>
  </div>
</template>
<script setup>
const showOpening = ref(false);
onMounted(() => {
  // 初回表示のみアニメーション
  if (!sessionStorage.getItem('hasVisited')) {
    showOpening.value = true;

    setTimeout(() => {
      showOpening.value = false;
      sessionStorage.setItem('hasVisited', 'true');
    }, 3000);
  }
});

useHead({
  title: 'Hair Salon らしさ | 自然体でいられる美容室',
  meta: [
    { name: 'description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
    { property: 'og:title', content: 'Hair Salon らしさ。 | 自然体でいられる美容室' },
    { property: 'og:description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${process.env.NUXT_PUBLIC_SITE_URL}/` },
  ],
  link: [{ rel: 'canonical', href: `${process.env.NUXT_PUBLIC_SITE_URL}/` }]
})
</script>