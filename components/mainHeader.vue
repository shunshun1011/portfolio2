<template>
  <header>
    <div class="bg-primary-300">
      <div class="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a href="/" aria-label="HairSalon らしさ。" title="HairSalon らしさ。" class="inline-flex items-center">
            <img src="~/assets/images/logo.svg" alt="ロゴ" class="h-12 text-tertiary-900" />
          </a>
          <ul class="items-center hidden space-x-8 lg:flex">
            <li>
              <a href="/about" aria-label="About us" title="About us"
                class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-teal-accent-400">About</a>
            </li>
            <li>
              <a href="/menu" aria-label="Menu" title="Menu"
                class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-teal-accent-400">Menu</a>
            </li>
            <li>
              <a href="/info" aria-label="Infomation" title="Infomation"
                class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-teal-accent-400">Info</a>
            </li>
            <li>
              <a href="/contact" aria-label="Contact" title="Contact"
                class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-teal-accent-400">Contact</a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button aria-label="Open Menu" title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              @click="isMenuOpen = true">
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z">
                </path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z">
                </path>
              </svg>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-50">
              <div class="p-5 bg-secondary-50 border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a href="/" aria-label="YAMAUCHI" title="YAMAUCHI" class="inline-flex items-center">
                      <img src="~/assets/images/logo.svg" alt="ロゴ" class="h-12 text-tertiary-900" />
                    </a>
                  </div>
                  <div>
                    <button aria-label="Close Menu" title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      @click="isMenuOpen = false">
                      <svg class="w-5 text-tertiary-900" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a href="/about" aria-label="About us" title="About us"
                        class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-deep-purple-accent-400">About</a>
                    </li>
                    <li>
                      <a href="/menu" aria-label="Menu" title="Menu"
                        class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-deep-purple-accent-400">Menu</a>
                    </li>
                    <li>
                      <a href="/info" aria-label="Infomation" title="Infomation"
                        class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-deep-purple-accent-400">Info</a>
                    </li>
                    <li>
                      <a href="/contact" aria-label="Contact" title="Contact"
                        class="font-medium tracking-wide text-tertiary-900 transition-colors duration-200 hover:text-deep-purple-accent-400">Contact</a>
                    </li>
                    <li>
                      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-tertiary-600">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-3 text-tertiary-600">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                          </svg>
                        </a>
                        <a class="ml-3 text-tertiary-600">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a class="ml-3 text-tertiary-600">
                          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
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
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
