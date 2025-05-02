<template>
  <main>
    <section
      class="flex items-center justify-center h-screen w-full relative bg-secondary-50"
    >
      <NuxtImg
        src="/images/Top03.jpg"
        alt="carousel_01"
        width="1900"
        height="1068"
        format="webp"
        class="w-screen h-screen object-cover absolute left-0 top-0 filter opacity-30"
      />
      <div class="container mx-auto max-w-screen-md absolute transform">
        <page-title
          title="INFORMATION"
          subtitle=""
          is-white="true"
        ></page-title>
        <div class="text-center mt-12">
          <NuxtLink to="#body" href="'#'+body" class="block" v-smooth-scroll>
            <small class="text-sm text-white mb-0"> Scroll </small>
            <img
              class="h-10 w-10 mx-auto animate-bounce"
              src="/assets/images/scroll.svg"
              width="48"
              height="48"
              alt="scroll"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="body">
      <h1>info Page</h1>
      <article v-for="data in posts.contents" :key="data.id">
        {{ data.title }}
      </article>
    </section>
  </main>
</template>

<script setup>
/*import Pagination from '~/components/Pagination.vue';
const pass = useRuntimeConfig();
const { items } = await useFetch("/info", {
    baseURL: pass.public.passURL,
    headers: {
        "X-MICROCMS-API-KEY": pass.passKey,
    },
});
*/
/*
export default {
  components: {
    Pagination,
    },
  async asyncData({params, $config, error}) {
      try {
          const page = params.p || '1'
          const limit = parseInt($config.blogPerPage)
          const items = await useFetch("/info", {
              baseURL: pass.public.passURL,
              headers: {
                  "X-MICROCMS-API-KEY": pass.passKey,
              },
          })
          return {
              items,
              page,
              pager: [...Array(Math.ceil(items.total / limit)).keys()],
          }
      } catch (err) {
          error({
              statusCode: err.statusCode,
              message: 'データを取得できませんでした。',
          })
      }
    },
    data() {
        return {
            items: [],
            paginationLength: 0,
            ogpTitle: 'Info',
            ogpDesc:
                '「hair salon らしさ」からのお知らせや、日々の出来事、季節のおすすめスタイルなどをお届けします。ご来店前の参考に、ぜひご覧ください。',
            ogpImage: '',
            ogpUrl: pass.public.passURL + '/info'
        }
    },
    head() {
        return {
            title: this.ogpTitle,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.ogpDesc,
                },
                { hid: 'og:type', property: 'og:type', content: 'article' },
                { hid: 'og:title', property: 'og:title', content: this.ogpTitle },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.ogpDesc,
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: this.ogpUrl,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.ogpImage,
                },
            ],
        }
    },
};*/
const { data: posts } = await useFetch("/api/postList");
</script>
