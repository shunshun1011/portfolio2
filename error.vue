<template>
    <div class="flex items-center justify-center min-h-screen bg-secondary-50">
        <div class="text-center p-8 max-w-md bg-white shadow-xl rounded-xl">
            <h1 class="text-4xl font-bold text-secondary-500 mb-4">{{ error.statusCode }}</h1>
            <p class="text-lg text-tertiary-900 mb-4">
                {{ error.message || 'ページが見つかりませんでした。' }}
            </p>
            <NuxtLink to="/" class="text-white bg-secondary-500 px-4 py-2 rounded hover:bg-secondary-600 transition">
                トップページへ戻る
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    error: Object
})
</script>