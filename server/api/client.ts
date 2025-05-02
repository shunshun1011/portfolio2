import { createClient } from "microcms-js-sdk"; //ES6
import { defineCustomElement } from "vue";

const pass = useRuntimeConfig();

const client = createClient({
  serviceDomain: pass.public.serviceDomain,
  apiKey: pass.passKey,
});

export default client;
