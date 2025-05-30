<template>
  <section>
    <div class="px-4 py-12 mx-auto max-w-screen-xl md:px-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-tertiary-900 mb-2">Information</h1>
        <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
      </div>

      <InfoCard :posts="posts" />

      <!-- mt-6 くらいに抑えるとちょうどよい -->
      <div class="flex justify-center mt-6">
        <NuxtLink to="/info"
          class="inline-flex text-white bg-secondary-500 border-0 py-2 px-6 rounded text-lg hover:bg-secondary-600 transition">
          and more...
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useFetch("/api/postList");
</script>
