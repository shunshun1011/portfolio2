<template>
  <main class="main">
    <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
      <NuxtImg src="/images/Info.webp" alt="Info" width="1900" height="1068" format="webp"
        class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
      <div class="container mx-auto max-w-screen-md absolute transform">
        <page-title :title="article.title" :subtitle="dateFormat(article.publishedAt ?? article.createdAt)"
          is-white="true"></page-title>
        <div class="text-center mt-12">
          <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
            <small class="text-sm text-tertiary-900 mb-0"> Scroll </small>
            <img class="h-6 w-6 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48" height="48"
              alt="scroll" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="body">
      <div class="container px-5 py-24 mx-auto">
        <article class="prose lg:prose-lg max-w-none prose-img:rounded-xl prose-img:mx-auto prose-img:my-4">
          <div v-html="article.content"></div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => route.params.slug);

// データ取得
const { data: article, refresh } = await useAsyncData("article", () =>
  $fetch("/api/postDetail", {
    params: { slug: String(slug.value) },
  })
);
// slug が変化したらデータ再取得
watch(slug, () => {
  refresh();
});
// 404エラーハンドリング
if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "記事が見つかりませんでした。",
  });
}

// SEO設定
useHead({
  title: article.title + '| Hair Salon らしさ。',
  meta: [
    { name: "description", content: dateFormat(article.publishedAt ?? article.createdAt) },
    { property: "og:title", content: article.title + '| Hair Salon らしさ。'},
    { property: "og:description", content: dateFormat(article.publishedAt ?? article.createdAt) },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: `${process.env.NUXT_PUBLIC_SITE_URL}/info/${article.value.id}`,
    },
  ],
  link: [
    { rel: "canonical", href: `${process.env.NUXT_PUBLIC_SITE_URL}/info/${article.value.id}` },
  ],
});
</script>
