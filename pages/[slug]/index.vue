<template>
  <main class="main">
    <h1 class="title">{{ article.title }}</h1>
    <p class="publishedAt">
      <time :datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <p>{{ article.content }}</p>
    <div class="post" v-html="article.body" />
  </main>
</template>

<script setup>
const route = useRoute();
const pass = useRuntimeConfig();
const slug = route.params.slug;

const { data: article } = await useFetch(`/info/${slug}`, {
  baseURL: pass.public.passURL,
  headers: {
    "X-MICROCMS-API-KEY": pass.passKey,
  },
});
</script>
