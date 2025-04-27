<template>
  <div class="font-zen">
    <mainHeader />
    <div
      class="bg-cover bg-no-repeat bg-fixed bg-opacity-30 bg-[url('/assets/images/background2.webp')] lg:bg-[url('/assets/images/background3.webp')]"
    >
      <slot />
    </div>
    <mainFooter />
  </div>
</template>
