<template>
  <div class="font-zen bg-secondary-50">
    <mainHeader v-if="!showOpening" />
    <div class="bg-cover bg-no-repeat bg-fixed lg:bg-[url('/assets/images/background2.webp')] bg-none">
      <div>
        <slot />
      </div>
    </div>
    <mainFooter v-if="!showOpening" />
  </div>
</template>
<script setup>
const route = useRoute();
const showOpening = ref(false);

// 初回トップページ読み込みか判定
onMounted(() => {
  if (route.path === '/' && !sessionStorage.getItem('hasVisited')) {
    showOpening.value = true;

    setTimeout(() => {
      showOpening.value = false;
      sessionStorage.setItem('hasVisited', 'true');
    }, 3000); // アニメーション表示時間（3秒）
  }
});

// OGP画像
useHead({
  meta: [
    {
      property: 'og:image',
      content: `${process.env.NUXT_PUBLIC_SITE_URL}/default-ogp.png`
    }
  ]
})
</script>