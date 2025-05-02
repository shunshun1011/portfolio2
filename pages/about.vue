<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Top03.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="ABOUT US" subtitle="お店について" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-white mb-0"> Scroll </small>
                        <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48"
                            height="48" alt="scroll" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="text-tertiary-600 body-font" id="body">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"
                    src="https://dummyimage.com/720x600">
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-tertiary-900">
                        hair salon らしさ。へようこそ
                    </h1>
                    <p class="mb-8 leading-relaxed">hair salon らしさは、自然体で過ごせる心地よさを大切にした、ナチュラルな空間のヘアサロンです。
                        木のぬくもりとグリーンに包まれた店内は、男性も女性もリラックスして通っていただける雰囲気。
                        一人ひとりの「らしさ」を大切にしながら、ライフスタイルに寄り添ったヘアスタイルをご提案します。
                        カット・カラー・パーマはもちろん、髪や頭皮をいたわるケアメニューも充実。
                        丁寧なカウンセリングを通じて、お客様の魅力を引き出すお手伝いをさせていただきます。
                        初めての方も、ずっと通えるサロンをお探しの方も、どうぞお気軽にお越しください。
                        心からくつろげるひとときを、笑顔でお迎えいたします。</p>
                </div>
            </div>
        </section>
    </main>
</template>
