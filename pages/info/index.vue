<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Info.webp" alt="info02" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="INFORMATION" subtitle="お知らせ & ブログ" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-tertiary-900 mb-0"> Scroll </small>
                        <img class="h-6 w-6 mx-auto animate-bounce text-tertiary-900" src="/assets/images/scroll.svg" width="48"
                            height="48" alt="scroll" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="text-tertiary-600 body-font" id="body">
            <div class="container px-5 md:py-16 py-8 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
                            Article List
                        </h1>
                        <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
                <InfoHome :page="1" />
            </div>
        </section>
    </main>
</template>
