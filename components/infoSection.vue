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
      </div>
      <InfoCard :posts="posts"></InfoCard>
      <div class="flex justify-center">
        <NuxtLink to="/info" href="/info"
          class="ml-4 inline-flex text-tertiary-50 bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg">
          and more...
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useFetch("/api/postList")
const { data: post3 } = computed(() => {
  return this.posts.slice(0, 3)
});
</script>
