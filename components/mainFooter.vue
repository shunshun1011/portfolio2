<template>
  <footer class="text-gray-600 body-font">
    <div class="bg-primary-300">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-tertiary-900 text-sm text-center sm:text-left">
          @ {{ currentYear }} hair salon らしさ。 —
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-tertiary-600">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
              viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-tertiary-600">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
              viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
              </path>
            </svg>
          </a>
          <a class="ml-3 text-tertiary-600">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-tertiary-600">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a class="ml-3 text-tertiary-600">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return this.$dayjs().year();
    },
  },
};
</script>
