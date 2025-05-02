<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Top03.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="INFORMATION" subtitle="お知らせ & ブログ" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-white mb-0"> Scroll </small>
                        <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48"
                            height="48" alt="scroll" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="text-tertiary-600 body-font" id="body">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
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
</script>
