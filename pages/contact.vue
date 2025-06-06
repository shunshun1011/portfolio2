<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Contact.webp" alt="Contact" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="ACCESS & CONTACT" subtitle="お問い合わせ" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-tertiary-900 mb-0"> Scroll </small>
                        <img class="h-6 w-6 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48"
                            height="48" alt="scroll" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section id="body">
            <contactSection />
        </section>
    </main>
</template>
<script setup>
useHead({
    title: 'Contact | Hair Salon らしさ。',
    meta: [
        { name: 'description', content: 'Hair Salon らしさ。へのお問い合わせはこちらから。ご予約やご質問はお気軽にどうぞ。' },
        { property: 'og:title', content: 'Contact | Hair Salon らしさ。' },
        { property: 'og:description', content: 'Hair Salon らしさ。は、ナチュラルな雰囲気でくつろげる美容室。あなたらしいスタイルを一緒に見つけます。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${process.env.NUXT_PUBLIC_SITE_URL}/contact` },
    ],
    link: [{ rel: 'canonical', href: `${process.env.NUXT_PUBLIC_SITE_URL}/contact` }]
})
</script>