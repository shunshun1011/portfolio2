<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Top03.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="ACCESS & CONTACT" subtitle="お問い合わせ" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-tertiary-50 mb-0"> Scroll </small>
                        <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48"
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