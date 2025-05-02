<template>
  <div
    class="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full justify-self-center"
  >
    <div v-for="(post, index) in posts.contents" :key="post.id">
      <div v-if="index < 3">
        <div
          class="bg-primary-50 px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20"
        >
          <p
            class="mb-2 text-xs font-semibold tracking-wide text-tertiary-600 uppercase"
          >
            {{ dateFormat(post.publishedAt ?? post.createdAt) }}
            <br />
            {{ post.category }}
          </p>
          <NuxtLink
            :to="`/info/${post.id}`"
            :href="`/info/${post.id}`"
            class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {{ post.title }}
          </NuxtLink>
          <p class="max-w-xs mx-auto mb-2 text-tertiary-700">
            {{ post.lead }}
          </p>
          <NuxtLink
            :to="`info/${post.id}`"
            href="`info/${post.id}`"
            class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Read more
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//const props = defineProps([posts])
defineProps({
  posts: Object,
});
</script>
