<template>
  <section class="text-gray-600 body-font">
    <div
      class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="title-font relative">About</span>
          </span>
        </h2>
      </div>
    </div>
    <div
      class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <NuxtImg
          src="/images/Top05.jpg"
          alt="hero"
          width="720"
          height="600"
          format="webp"
          class="object-cover object-center rounded"
        >
        </NuxtImg>
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Make Your Wishes <br class="hidden lg:inline-block" />
          come true
        </h1>
        <p class="mb-8 leading-relaxed">
          We propose the perfect hairstyle for you, who dose not want to
          compromise on either business or private life.
        </p>
        <div class="flex justify-center">
          <button
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg"
          >
            learn more...
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
