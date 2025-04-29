<template>
    <main>
        <section>
            <h1>info Page</h1>
            <ul>
                <li v-for="article in data?.contents" :key="article.id">
                    <NuxtLink :to="`/${article.id}`">{{ article.title }}</NuxtLink>
                </li>
            </ul>
        </section>
    </main>

</template>

<script setup>
const pass = useRuntimeConfig();
const { data } = await useFetch("/info", {
    baseURL: pass.public.passURL,
    headers: {
        "X-MICROCMS-API-KEY": pass.passKey,
    },
});
</script>