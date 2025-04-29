<template>
  <div class="font-zen bg-secondary-50">
    <mainHeader />
    <div class="bg-cover bg-no-repeat bg-fixed lg:bg-[url('/assets/images/background2.webp')] bg-none">
      <div class="">
        <slot />
      </div>
    </div>
    <mainFooter />
  </div>
</template>
