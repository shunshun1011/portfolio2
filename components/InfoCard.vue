<template>
  <section>
    <div class="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full justify-self-center">
      <div v-for="(post, index) in posts.contents" :key="post.id">
        <div v-if="index < 3">
          <!-- NuxtLink で全体を囲む -->
          <NuxtLink :to="`/info/${post.id}`"
            class="block bg-primary-50 px-10 py-20 text-center border border-secondary-300 rounded-lg lg:px-5 lg:py-10 xl:py-20 transition transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
            <p class="mb-2 text-xs font-semibold tracking-wide text-tertiary-600 uppercase">
              {{ dateFormat(post.publishedAt ?? post.createdAt) }}
              <br />
              {{ post.category }}
            </p>
            <h2 class="max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 line-clamp-2">
              {{ post.title }}
            </h2>
            <p class="max-w-xs mx-auto mb-2 text-tertiary-700 line-clamp-2">
              {{ post.lead }}
            </p>
            <span class="inline-flex items-center font-semibold text-deep-purple-accent-400 hover:text-deep-purple-800">
              Read more
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  posts: Object,
});
</script>
