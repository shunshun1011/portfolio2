<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Info.webp" alt="Info" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="INFORMATION" subtitle="お知らせ & ブログ" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-tertiary-900 mb-0"> Scroll </small>
                        <img class="h-6 w-6 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48"
                            height="48" alt="scroll" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="text-tertiary-600 body-font" id="body">
            <div class="container md:px-12 px-5 md:py-16 py-8 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
                            Article List
                        </h1>
                        <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
                <InfoHome :page="page" />
            </div>
        </section>
    </main>
</template>
<script setup>
const route = useRoute();
const page = computed(() => parseInt(route.params.page || "1", 10));

const limit = 3;
const posts = ref(null);

watchEffect(async () => {
  const queries = {
    limit,
    offset: (page.value - 1) * limit,
  };

  const { data } = await useFetch("/api/postList", {
    params: queries,
  });

  posts.value = data.value;
});

const numPages = computed(() =>
  posts.value ? Math.ceil(posts.value.totalCount / limit) : 1
);

// SEO対策
const currentPage = Number(route.query.page || 1)
const pageTitle = currentPage > 1
    ? `お知らせ一覧 - ページ${currentPage} | Hair Salon らしさ`
    : `お知らせ一覧 | Hair Salon らしさ`

const pageDescription = currentPage > 1
    ? `Hair Salon らしさのお知らせ一覧ページ（ページ${currentPage}）です。最新ニュースやキャンペーン情報をご覧ください。`
    : `Hair Salon らしさのお知らせ一覧ページです。最新ニュースやキャンペーン情報をご紹介します。`

const canonicalUrl = currentPage > 1
    ? `${process.env.NUXT_PUBLIC_SITE_URL}/info?page=${currentPage}`
    : `${process.env.NUXT_PUBLIC_SITE_URL}/info`

useHead({
    title: pageTitle,
    meta: [
        { name: 'description', content: pageDescription },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: pageDescription },
        { property: 'og:url', content: canonicalUrl },
    ],
    link: [
        { rel: 'canonical', href: canonicalUrl },
    ]
})

// 任意で robots を制御したい場合（例：2ページ目以降を noindex）
if (currentPage > 1) {
    useHead({
        meta: [{ name: 'robots', content: 'noindex, follow' }]
    })
}
</script>
