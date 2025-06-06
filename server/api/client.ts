import { createClient } from "microcms-js-sdk"; //ES6

const pass = useRuntimeConfig();
const client = createClient({
  serviceDomain: pass.public.serviceDomain,
  apiKey: pass.passKey,
});

export default client;
