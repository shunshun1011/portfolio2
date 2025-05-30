<template>
  <section class="mb-6"> <!-- mb-8 から少し減らす -->
    <div class="grid gap-6 sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 mx-auto max-w-6xl px-4">
      <NuxtLink v-for="post in posts.contents.slice(0, 3)" :key="post.id" :to="`/info/${post.id}`"
        class="block bg-primary-50 px-6 py-12 text-center border border-secondary-300 rounded-lg transition transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
        <p class="mb-2 text-xs font-semibold tracking-wide text-tertiary-600 uppercase">
          {{ dateFormat(post.publishedAt ?? post.createdAt) }}<br />
          {{ post.category }}
        </p>
        <h2 class="mb-3 text-2xl font-extrabold leading-7 line-clamp-2">{{ post.title }}</h2>
        <p class="mb-2 text-tertiary-700 line-clamp-2">{{ post.lead }}</p>
        <span class="inline-flex items-center font-semibold text-deep-purple-accent-400 hover:text-deep-purple-800">
          Read more
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({
  posts: Object,
});
</script>
