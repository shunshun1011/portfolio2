<template>
  <section
    class="text-gray-600 body-font bg-opacity-50">
    <div class="container px-5 md:py-16 py-8 mx-auto ">
      <div class="flex flex-wrap w-full ">
        <div class="w-full mb-6">
          <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-gray-900 text-center">
            About
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <NuxtImg src="/images/Top05.jpg" alt="hero" width="720" height="600" format="webp"
          class="object-cover object-center rounded">
        </NuxtImg>
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Make Your Wishes <br class="hidden lg:inline-block" />
          come true
        </h1>
        <p class="mb-8 leading-relaxed">
          We propose the perfect hairstyle for you, who dose not want to
          compromise on either business or private life.
        </p>
        <div class="flex justify-center">
          <button
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">
            learn more...
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
