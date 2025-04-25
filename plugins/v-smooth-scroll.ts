import VueSmoothScroll from 'vue3-smooth-scroll';

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueSmoothScroll);
});