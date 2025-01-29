<template>
  <div class="h-screen w-screen">
    <carousel class="h-screen w-screen bg-gray-300"
      autoplay="5000"
      wrapAround="true"
      pauseAutoplayOnHover="true">
      <slide class="h-screen w-screen">
        <div class="relative w-full h-full">
          <NuxtImg
            src="/images/Top01.jpg"
            alt="carousel_01"
            width="1900"
            height="1068"
            format="webp"
            class="absolute left-0 top-0 w-full h-full object-cover"/>
        </div>
      </slide>
      <slide class="h-screen w-screen">
        <div class="relative w-full h-full">
          <NuxtImg
            src="/images/Top02.jpg"
            alt="carousel_02"
            width="1900"
            height="1068"
            format="webp"
            class="absolute left-0 top-0 w-full h-full object-cover">
          </NuxtImg>
        </div>
      </slide>
      <slide class="h-screen w-screen">
        <div class="relative w-full h-full">
          <NuxtImg
            src="/images/Top03.jpg"
            alt="carousel_03"
            width="1900"
            height="1068"
            format="webp"
            class="absolute left-0 top-0 w-full h-full object-cover">
          </NuxtImg>
        </div>
      </slide>
      <slide class="h-screen w-screen">
        <div class="relative w-full h-full">
          <NuxtImg
            src="/images/Top06.jpg"
            alt="carousel_06"
            width="1900"
            height="1068"
            format="webp"
            class="absolute left-0 top-0 w-full h-full object-cover">
          </NuxtImg>
        </div>
      </slide>
      
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>
<style>
/*
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.carousel__slide {
  padding: 10px;
  min-height: 200px;
  width: 100%;
  background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
*/
</style>
