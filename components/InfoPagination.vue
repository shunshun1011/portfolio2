<template>
    <div class="pagination flex flex-wrap items-center justify-center gap-2 my-8">
        <!-- 前へ -->
        <NuxtLink v-if="current > 1" :to="getPath(current - 1)"
            class="px-3 py-1 rounded border text-sm text-tertiary-600 hover:bg-primary-100">
            ← 前
        </NuxtLink>

        <!-- ページ番号 & 省略記号 -->
        <div v-for="(page, index) in visiblePages" :key="`page-${index}`">
            <span v-if="page === '...'" class="px-3 py-1 text-tertiary-400">
                …
            </span>
            <NuxtLink v-else :to="getPath(page)" :class="[
                'px-3 py-1 rounded-md border text-sm',
                page === current
                    ? 'bg-secondary-600 text-tertiary-50 border-secondary-600'
                    : 'bg-tertiary-50 text-tertiary-700 border-secondary-300 hover:bg-primary-100 hover:text-tertiary-600'
            ]">
                {{ page }}
            </NuxtLink>
        </div>

        <!-- 次へ -->
        <NuxtLink v-if="current < numPages" :to="getPath(current + 1)"
            class="px-3 py-1 rounded border text-sm text-tertiary-600 hover:bg-primary-100">
            次 →
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    numPages: Number,
    current: Number,
});

function getPath(page) {
    return `/info/page/${page}`;
}

const visiblePages = computed(() => {
    const total = props.numPages;
    const current = props.current;
    const delta = 2;

    const range = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);

    if (left > 2) {
        range.push("...");
    }

    for (let i = left; i <= right; i++) {
        range.push(i);
    }

    if (right < total - 1) {
        range.push("...");
    }

    if (total > 1) {
        range.push(total);
    }

    return range;
});
</script>
  
