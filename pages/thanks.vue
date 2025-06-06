<!-- /pages/thanks.vue -->
<template>
    <section class="text-center py-24">
        <h1 class="text-3xl font-bold text-tertiary-800 mb-4">お問い合わせありがとうございました！</h1>
        <p class="text-tertiary-600">後ほどメールまたはお電話にてご連絡差し上げます。</p>
        <NuxtLink to="/" class="mt-6 inline-block text-secondary-600 underline">トップページへ戻る</NuxtLink>
    </section>
</template>
<script setup>
useHead({
    title: 'Thanks | Hair Salon らしさ。',
    meta: [
        { name: 'description', content: 'Hair Salon らしさ。へお問い合わせいただきありがとうございます。' },
        { property: 'og:title', content: 'Thanks | Hair Salon らしさ。' },
        { property: 'og:description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${process.env.NUXT_PUBLIC_SITE_URL}/thanks` },
    ],
    link: [{ rel: 'canonical', href: `${process.env.NUXT_PUBLIC_SITE_URL}/thanks` }]
})
</script>