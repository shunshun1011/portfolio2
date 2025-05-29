<template>
  <section class="text-tertiary-600 body-font relative">
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
            <p class="mt-1">茨城県 日立市 ***町 1-2-3</p>
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
      <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field"
        action="/thanks" @submit.prevent="handleSubmit" ref="formEl"
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <h2 class="text-tertiary-900 text-lg mb-1 font-medium title-font">
          お問い合わせフォーム
        </h2>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-tertiary-600">Name</label>
          <input type="text" id="name" name="name" v-model="name" required
            class="w-full bg-primary-50 rounded border border-secondary-300 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 text-base outline-none text-tertiary-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>

        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-tertiary-600">Email</label>
          <input type="email" id="email" name="email" v-model="email" required
            class="w-full bg-primary-50 rounded border border-secondary-300 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 text-base outline-none text-tertiary-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <div class="mb-4">
          <label for="phone" class="leading-7 text-sm text-tertiary-600">Phone Number</label>
          <input type="text" id="phone" name="phone" v-model="phone"
            class="w-full bg-primary-50 rounded border border-secondary-300 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 text-base outline-none text-tertiary-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
            {{ errors.phone }}
          </p>
        </div>

        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-tertiary-600">Message</label>
          <textarea id="message" name="message" v-model="message" required
            class="w-full bg-primary-50 rounded border border-secondary-300 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 text-base outline-none text-tertiary-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">
            {{ errors.message }}
          </p>
        </div>
        <!-- ✅ reCAPTCHA 表示部分 -->
        <div data-netlify-recaptcha="true" class="mb-4"></div>
        <button type="submit"
          class="text-tertiary-50 bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg">
          Send
        </button>
        <p class="text-xs text-tertiary-500 mt-3">
          お問い合わせには数日かかることがあります。
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");
const errors = ref({});
const formEl = ref(null);

const validate = () => {
  const newErrors = {};
  const phonePattern = /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/;

  if (!name.value) newErrors.name = "お名前を入力してください。";
  if (!email.value || !/\S+@\S+\.\S+/.test(email.value))
    newErrors.email = "正しいメールアドレスを入力してください。";
  if (!phone.value) {
    newErrors.phone = "電話番号を入力してください。";
  } else if (!phonePattern.test(phone.value)) {
    newErrors.phone = "有効な電話番号を入力してください（例：090-1234-5678）";
  }
  if (!message.value) newErrors.message = "メッセージを入力してください。";

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = () => {
  if (validate()) {
    formEl.value.submit(); // 通常のHTML送信（Netlifyが認識する）
  }
};
</script>
