<template>
    <div class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-1000"
        :class="{ 'opacity-0 pointer-events-none': !visible }">
        <img src="~/assets/images/logo.svg" alt="ロゴ" class="w-32 h-32 animate-pulse" />
        <div class="mt-6 text-gray-500 text-sm">Loading...</div>
    </div>
</template>

<script setup>
const props = defineProps({
    visible: Boolean,
});
</script>
  
