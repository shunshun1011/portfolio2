<template>
    <div>
        <div class="divider">
            <section class="container">
                <InfoCard :posts="posts" />
                <InfoPagination :numPages="numPages" :current="page"/>
            </section>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    page: Number
})
const page = props.page || 1
const limit = 3;
const queries = {
    limit,
    offset: (page - 1) * limit
}
const { data: posts } = await useFetch("/api/postList", { params: queries })
const numPages = computed(() =>
    posts.value ? Math.ceil(posts.value.totalCount / limit) : 1
)
</script>