<template>
  <main>
    <section class="relative flex items-center justify-center h-screen overflow-hidden">
      <div class="container mx-auto max-w-screen-md absolute transform z-20">
        <page-title title='hair salon らしさ。' subtitle="もっと自由に、もっとあなたらしさを。" is-white="true"></page-title>
        <div class="text-center mt-12">
          <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
            <small class="text-sm text-tertiary-50 mb-0"> Scroll </small>
            <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48" height="48"
              alt="scroll" />
          </NuxtLink>
        </div>
      </div>
      <div class="bg-secondary-50">
        <div class="h-screen w-screen opacity-30">
          <carousel class="h-screen w-screen bg-gray-300" autoplay="5000" wrapAround="true" pauseAutoplayOnHover="true">
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Top01.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
                  class="absolute left-0 top-0 w-full h-full object-cover" />
              </div>
            </slide>
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Top02.jpg" alt="carousel_02" width="1900" height="1068" format="webp"
                  class="absolute left-0 top-0 w-full h-full object-cover">
                </NuxtImg>
              </div>
            </slide>
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Top03.jpg" alt="carousel_03" width="1900" height="1068" format="webp"
                  class="absolute left-0 top-0 w-full h-full object-cover">
                </NuxtImg>
              </div>
            </slide>
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Top06.jpg" alt="carousel_06" width="1900" height="1068" format="webp"
                  class="absolute left-0 top-0 w-full h-full object-cover">
                </NuxtImg>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import PageTitle from "~/components/PageTitle.vue";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    PageTitle,
  },
};
</script>
