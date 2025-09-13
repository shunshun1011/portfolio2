<template>
  <NuxtLink :to="destination" class="block text-center" v-smooth-scroll>
    <small class="text-sm text-tertiary-50 mb-2">Scroll</small>
    <div class="flex flex-col items-center animate-bounce">
      <!-- 点線 -->
      <svg width="2" height="40" viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="40" stroke="white" stroke-dasharray="4 4" />
      </svg>
      <!-- ハサミアイコン -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mt-1 text-white" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9.172 9.172a4 4 0 10-5.656 5.656M14.828 14.828a4 4 0 105.656-5.656M9 15l6-6M15 15l-6-6" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    destination: {
      type: String,
      required: true,
    },
  },
};
</script>
