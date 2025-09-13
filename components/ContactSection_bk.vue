<template>
  <section class="text-tertiary-600 body-font relative">
    <!-- タイトル -->
    <div class="container px-5 md:py-16 py-8 mx-auto">
      <div class="flex flex-wrap w-full">
        <div class="w-full mb-6">
          <h1 class="sm:text-3xl text-2xl title-font font-bold mb-2 text-tertiary-900 text-center">
            Access & Contact
          </h1>
          <div class="h-1 w-20 bg-secondary-500 rounded mx-auto"></div>
        </div>
      </div>
    </div>
    <!-- Google Map + LINE誘導バナー -->
    <div class="container px-5 pb-24 mx-auto flex flex-col lg:flex-row gap-8">
      <!-- Google Map -->
      <div class="lg:w-2/3 w-full rounded-lg overflow-hidden lg:p-48 p-40 relative shadow-md">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
          marginwidth="0" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51325.483658850695!2d140.5768924724997!3d36.48551446833502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60222bb8beee1ae7%3A0x2a34f7360e80f565!2z6Iyo5Z-O5rivKOaXpeeri-a4r-WMuik!5e0!3m2!1sja!2sjp!4v1745564542692!5m2!1sja!2sjp"
          style="filter: contrast(1.2) opacity(0.9);"></iframe>
      </div>
      <!-- LINE誘導バナー -->
      <div
        class="lg:w-1/3 w-full bg-primary-50 flex flex-col self-center items-center text-center shadow-md rounded-lg px-6 py-10">
        <h2 class="text-tertiary-900 text-lg mb-4 font-semibold title-font">
          お問い合わせはLINEでお気軽にどうぞ
        </h2>
        <p class="text-tertiary-700 mb-6">
          ご予約・ご質問など、LINEから24時間受け付けております。
        </p>
        <a href="https://lin.ee/あなたのLINE公式URL" target="_blank" rel="noopener"
          class="inline-flex items-center bg-[#06C755] text-tertiary-50 font-semibold py-3 px-6 rounded-lg text-lg shadow hover:opacity-90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 30" fill="currentColor" class="w-6 h-6 mr-2">
            <path
              d="M18 0C8.06 0 0 6.49 0 14.5c0 4.63 2.92 8.72 7.43 11.28-.31 1.14-1.12 4.13-1.27 4.73 0 0-.02.18.09.25.1.07.24.04.24.04.31-.04 4.35-2.85 5.09-3.37 1.89.52 3.93.8 6.02.8 9.94 0 18-6.49 18-14.5S27.94 0 18 0z" />
          </svg>
          LINEで問い合わせる
        </a>
        <p class="text-xs text-tertiary-500 mt-4">
          ボタンを押すとLINEアプリが開きます。
        </p>
      </div>
    </div>
  </section>
</template>
