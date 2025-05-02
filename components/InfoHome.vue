<template>
    <div>
        <div class="divider">
            <section class="container">
                <!-- 記事一覧 -->
                <InfoCard :posts="posts" />
                <div>InfoHome</div>
                <InfoPagination :numPages="numPages" :current="page"/>
            </section>
        </div>
    </div>
</template>
<script setup>
const { page } = defineProps({
    page: Number
})
const limit = 3;
const queries = {
    limit,
    offset: (page - 1) * limit
}
const { data: posts } = await useFetch("/api/postList", { params: queries })
const numPages = Math.ceil(posts.value.totalCount / limit)
</script>