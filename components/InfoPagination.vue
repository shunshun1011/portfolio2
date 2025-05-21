<template>
    <div class="pagination flex space-x-2 justify-center my-4">
        <NuxtLink v-for="page in numPages" :key="page" :class="getClass(page, current)" :to="getPath(page)">
            {{ page }}
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    numPages: Number,
    current: Number,
});

function getPath(p) {
    return `/info/page/${p}`;
}

function getClass(page, current) {
    return [
        "px-3 py-1 rounded-md border transition-colors duration-200",
        page === current
            ? "bg-blue-600 text-white border-blue-600 font-semibold"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-blue-600",
    ];
}
</script>
