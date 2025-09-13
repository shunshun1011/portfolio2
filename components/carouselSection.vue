<template>
  <main>
    <section class="relative flex items-center justify-center h-screen overflow-hidden">
      <div class="container mx-auto max-w-screen-md absolute transform z-20">
        <page-title title='hair salon らしさ。' subtitle="もっと自由に、もっとあなたらしさを。" is-white="true"></page-title>
        <div class="text-center mt-12">
          <NuxtLink :to="destination" class="block text-center" v-smooth-scroll>
            <small class="text-sm text-tertiary-50 mb-2">Scroll</small>
            <div class="flex flex-col items-center animate-bounce">
              <!-- 点線 -->
              <svg width="2" height="40" viewBox="0 0 2 40" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0" x2="1" y2="40" stroke="white" stroke-dasharray="4 4" />
              </svg>
              <!-- ハサミアイコン -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mt-1 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.172 9.172a4 4 0 10-5.656 5.656M14.828 14.828a4 4 0 105.656-5.656M9 15l6-6M15 15l-6-6" />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="bg-secondary-50">
        <div class="h-screen w-screen opacity-30">
          <carousel class="h-screen w-screen bg-gray-300" autoplay="5000" wrapAround="true" pauseAutoplayOnHover="true">
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Carousel01.webp" alt="carousel_01" width="1900" height="1068" format="webp"
                  class="absolute left-0 top-0 w-full h-full object-cover" />
              </div>
            </slide>
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Carousel02.webp" alt="carousel_02" width="1900" height="1068" format="webp"
                  class="absolute left-0 top-0 w-full h-full object-cover">
                </NuxtImg>
              </div>
            </slide>
            <slide class="h-screen w-screen">
              <div class="relative w-full h-full">
                <NuxtImg src="/images/Carousel03.webp" alt="carousel_03" width="1900" height="1068" format="webp"
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
