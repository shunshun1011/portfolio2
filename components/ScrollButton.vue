<template>
  <NuxtLink to={{destination}} href={{destination}} class="block" v-smooth-scroll>
    <small class="text-sm text-white mb-0"> Scroll </small>
    <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48" height="48" alt="scroll" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    destination:{
      type: String,
      required: true,
    }
  }
}

</script>

