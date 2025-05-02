<template>
  <section>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="container px-5 md:py-16 py-8 mx-auto">
        <div class="flex flex-wrap w-full">
          <div class="w-full mb-6">
            <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
              Information
            </h1>
            <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
          </div>
        </div>
      </div><!--
      <div class="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full justify-self-center">
        <div v-for="(post, index) in posts.contents" :key="post.id">
          <div v-if="index < 3">
            <div class="bg-primary-50 px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
              <p class="mb-2 text-xs font-semibold tracking-wide text-tertiary-600 uppercase">
                {{ dateFormat(post.publishedAt ?? post.createdAt) }}
                <br />
                {{ post.category }}
              </p>
              <NuxtLink :to="`/info/${post.id}`" :href="`/info/${post.id}`"
                class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400">
                {{ post.title }}
              </NuxtLink>
              <p class="max-w-xs mx-auto mb-2 text-tertiary-700">
                {{ post.lead }}
              </p>
              <NuxtLink :to="`info/${post.id}`" href="`info/${post.id}`"
                class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Read more
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      -->
      <InfoCard :posts="posts"></InfoCard>
    </div>
  </section>
</template>

<script setup>
/*const pass = useRuntimeConfig();
const { data } = await useFetch("/info?limit=3", {
  baseURL: pass.public.passURL,
  headers: {
    "X-MICROCMS-API-KEY": pass.passKey,
  },
});
*/
const { data: posts } = await useFetch("/api/postList")
const { data: post3 } = computed(() => {
  return this.posts.slice(0,3)
});
</script>
