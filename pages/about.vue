<template>
    <main>
        <section class="flex items-center justify-center h-screen w-full relative bg-secondary-50">
            <NuxtImg src="/images/Top03.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
                class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30" />
            <div class="container mx-auto max-w-screen-md absolute transform">
                <page-title title="ABOUT US" subtitle="お店について" iswhite="false"></page-title>
                <div class="text-center mt-12">
                    <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
                        <small class="text-sm text-tertiary-50 mb-0"> Scroll </small>
                        <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48"
                            height="48" alt="scroll" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="text-tertiary-600 body-font" id="body">
            <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"
                    src="https://dummyimage.com/720x600" />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-tertiary-900">
                        A Word from the Owner
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        こんにちは。店長の山内です。
                        数あるサロンの中から、当店のページをご覧いただきありがとうございます。
                        私はお客様が“自分らしさ”を大切にしながら、もっと自然体で美しく、心地よく過ごせる毎日を応援したいという想いで、このサロンをオープンしました。
                        髪は、日常の中でふと気分を変えたいときや、新しい自分に出会いたいときに、とても大切な役割を持っています。
                        だからこそ、お客様のライフスタイルや気持ちに寄り添いながら、その時々に合った“らしい”スタイルをご提案できればと思っています。
                    </p>
                </div>
            </div>
            <div class="container px-5 md:py-12 py-8 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
                            A Place to Be Yourself
                        </h1>
                        <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
                    </div>
                </div>
                <div class="text-center lg:w-2/3 w-full mx-auto">
                    <p class="mb-8 leading-relaxed">
                        hair salon らしさ。
                        は、木目の温もりとグリーンに包まれた、ナチュラルで穏やかな空間のヘアサロンです。
                        男性・女性を問わず、どなたでも気負わず通っていただける、やさしい雰囲気づくりを心がけています。
                        席数も多すぎず、落ち着いた空間の中で、ゆっくりと自分のための時間を過ごしていただけるよう設計しました。
                        「なんだかホッとする」「ちょっと話したくなる」そんな場所になれたらうれしいです。
                    </p>
                </div>
            </div>
            <div class="container px-5 md:py-12 py-8 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
                            Our Approach to Hair
                        </h1>
                        <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
                    </div>
                </div>
                <div class="text-center lg:w-2/3 w-full mx-auto">
                    <p class="mb-8 leading-relaxed">
                        私は一人ひとりに丁寧に向き合うことを大切にしています。
                        お客様の髪の状態や骨格・雰囲気を見ながら、似合うスタイルをご提案するのはもちろんですが、何よりも“どう過ごしたいか”“どう見られたいか”というお気持ちを丁寧に聞き取ることを意識しています。
                        薬剤やケアメニューも、できるだけ髪や頭皮に負担の少ないものを選び、長く通っていただける安心感のある施術を心がけています。
                        カット・カラー・パーマに加えて、髪質改善やヘッドスパなど、ケアメニューも充実。
                        見た目だけでなく、内側から整うような感覚を大事にしています。
                    </p>
                </div>
            </div>
            <div class="container px-5 md:py-12 py-8 mx-auto">
                <div class="flex flex-wrap w-full">
                    <div class="w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
                            For First-Time Visitors
                        </h1>
                        <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
                    </div>
                </div>
                <div class="text-center lg:w-2/3 w-full mx-auto">
                    <p class="mb-8 leading-relaxed">
                        初めてのサロンは、緊張したり、うまく伝えられるか不安になることもあるかもしれません。
                        hair salon らしさ。 では、「ちょっと髪のこと相談してみたいな」「何が似合うか一緒に考えてほしい」といった気軽な気持ちでお越しいただけるような雰囲気を大切にしています。
                        通ってくださる方が、髪も心もすこし軽くなって「また明日からがんばれそう」と思っていただけるような、そんな存在でありたいと思っています。
                        皆さまにとっての“らしさ”が輝くお手伝いを、心を込めてさせていただきます。
                        どうぞ、hair salon らしさ。 にお気軽にお越しください。笑顔でお待ちしております。
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>
