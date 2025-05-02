<template>
    <InfoHome :page="page" />
</template>
<script setup>
//import { MicroCMSQueries } from 'microcms-js-sdk';
/*
const route = useRoute()
const page = Number(route.params.id || 1)
const limit = 2
const queries = {
    limit: limit,
    offset: (page - 1) * limit
}
const { data: posts } = await useFetch('/api/postList', { params: queries })
const numPages = Math.ceil(posts.value.totalCount / limit)
*/
const route = useRoute()
const page = Number(route.params.id || 1)
</script>