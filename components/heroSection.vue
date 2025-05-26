<template>
  <section class="text-tertiary-600 body-font">
    <div class="container px-5 md:py-16 py-8 mx-auto">
      <div class="flex flex-wrap w-full">
        <div class="w-full mb-6">
          <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
            About
          </h1>
          <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <NuxtImg src="/images/Hero01.webp" alt="hero" width="720" height="600" format="webp"
          class="object-cover object-center rounded">
        </NuxtImg>
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-tertiary-800">
          あなたらしさを大切にする<br class="hidden lg:inline-block" />
          心地よいヘアサロン
        </h1>
        <p class="mb-8 leading-relaxed">
          一人ひとりの「らしさ」を大切にしながら、ライフスタイルに寄り添ったヘアスタイルをご提案します。
        </p>
        <div class="flex justify-center">
          <NuxtLink to="/about" href="/about"
            class="ml-4 inline-flex text-tertiary-700 bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg">
            learn more...
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
