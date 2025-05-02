<template>
  <main class="main">
    <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
      <NuxtImg src="/images/Top03.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
        class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
      <div class="container mx-auto max-w-screen-md absolute transform">
        <page-title :title="article.title" :subtitle="dateFormat(article.publishedAt ?? article.createdAt)"
          is-white="true"></page-title>
        <div class="text-center mt-12">
          <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
            <small class="text-sm text-white mb-0"> Scroll </small>
            <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48" height="48"
              alt="scroll" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="body">
      <div class="container px-5 py-24 mx-auto">
        <div v-html="article.content"></div>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => route.params.slug);
console.log('slug:', slug.value)
// データ取得
const { data: article, refresh } = await useAsyncData('article', () =>
  $fetch('/api/postDetail', {
    params: { slug: String(slug.value) },
  })
);

// slug が変化したらデータ再取得
watch(slug, () => {
  refresh();
});

// 404エラーハンドリング
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>
