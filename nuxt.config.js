export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'guide-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonst.googleapis.com/css?family=Open+Sans',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:
      process.env.BASE_URL ||
      'https://first-nuxt-project-62709-default-rtdb.firebaseio.com',
    credentials: false,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://first-nuxt-project-62709-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyAAVyJ2T3P7B1DqdrbS-_o3MDXWd_Zhqgw',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  // router: {
  //   middleware: 'log',
  // },
};
