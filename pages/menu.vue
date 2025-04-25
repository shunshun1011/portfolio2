<template>
  <main>
    <section class="flex items-center justify-center h-screen w-full relative">
      <NuxtImg src="/images/Top03.jpg" alt="carousel_01" width="1900" height="1068" format="webp"
        class="w-screen h-screen object-cover absolute left-0 top-0 filter brightness-50" />
      <div class="container mx-auto max-w-screen-md absolute transform">
        <page-title title="MENU" subtitle="Cut" is-white="true"></page-title>
        <div class="text-center mt-12">
          <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
            <small class="text-sm text-white mb-0"> Scroll </small>
            <img class="h-10 w-10 mx-auto animate-bounce" src="/assets/images/scroll.svg" width="48" height="48"
              alt="scroll" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="body" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix
            neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto pb-3">
          <table class="table-fixed w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th
                  class="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Cut</th>
                <th class="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 text-center">一般</td>
                <td class="px-4 py-3 text-center">¥ 6,000</td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-center">高校生</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-center">¥ 5,000</td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-center">中学生以下</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-center">¥ 3,000</td>
              </tr>
              <tr>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-center">前髪カット</td>
                <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-center">¥ 1,100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto py-3">
          <table class="table-fixed w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th
                  class="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Perm</th>
                <th class="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 text-center">パーマ</td>
                <td class="px-4 py-3 text-center">¥ 8,000 ~ </td>
              </tr>
              <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-center">デジタルパーマ</td>
                <td class="border-t-2 border-gray-200 px-4 py-3 text-center">¥ 11,000 ~ </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto py-3">
          <table class="table-fixed w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th
                  class="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Color</th>
                <th class="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 text-center">カラー</td>
                <td class="px-4 py-3 text-center">¥ 6,000 ~ </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default{
  components: {
    PageTitle,
  },
}
</script>
