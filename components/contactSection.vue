<template>
  <section class="text-tertiary-600 body-font relative">
    <div class="container px-5 md:py-16 py-8 mx-auto ">
      <div class="flex flex-wrap w-full ">
        <div class="w-full mb-6">
          <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
            Access & Contact
          </h1>
          <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
        </div>
      </div>
    </div>
    <div class="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
          marginwidth="0" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51325.483658850695!2d140.5768924724997!3d36.48551446833502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60222bb8beee1ae7%3A0x2a34f7360e80f565!2z6Iyo5Z-O5rivKOaXpeeri-a4r-WMuik!5e0!3m2!1sja!2sjp!4v1745564542692!5m2!1sja!2sjp"
          style=""></iframe>
        <div class="bg-secondary-50 relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-tertiary-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p class="mt-1">
              茨城県 日立市 ***町 1-2-3
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-tertiary-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a class="text-indigo-500 leading-relaxed">example@email.com</a>
            <h2 class="title-font font-semibold text-tertiary-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p class="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-tertiary-900 text-lg mb-1 font-medium title-font">

        </h2>
        <p class="leading-relaxed mb-5 text-tertiary-600">
          お気軽にお問い合わせください
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-tertiary-600">Name</label>
          <input type="text" id="name" name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-tertiary-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-tertiary-600">Email</label>
          <input type="email" id="email" name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-tertiary-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-tertiary-600">Message</label>
          <textarea id="message" name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-tertiary-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button
          class="text-white bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg">
          Button
        </button>
        <p class="text-xs text-tertiary-500 mt-3">

        </p>
      </div>
    </div>
  </section>
</template>
