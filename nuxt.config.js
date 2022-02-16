export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead
      ? this.$nuxtI18nHead({ addSeoAttributes: true })
      : {}
    return {
      ...i18nHead,
      title: 'Keila - Open Source Email Newsletters',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          hid: 'tawk',
          src: 'https://embed.tawk.to/60dca0ef65b7290ac638bf28/1f9et9ak1',
          defer: true,
        },
      ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxt/content', {}],
    ['@nuxtjs/i18n', {}],
    [
      'nuxt-matomo',
      {
        matomoUrl: 'https://tracking.vanbittern.com/',
        siteId: 33,
        cookies: false,
      },
    ],
    ['@nuxtjs/sitemap', {}],
  ],

  // i18n configuration

  i18n: {
    strategy: 'prefix_except_default',
    parsePages: true,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
    baseUrl: 'https://www.keila.io',
  },

  sitemap: {
    hostname: 'https://www.keila.io',
    // i18n: true,
    i18n: {
      locales: ['en', 'de'],
      routesNameSeparator: '___',
    },
    routes: [
      '/docs',
      '/docs/api',
      '/docs/campaigns',
      '/docs/setup',
      '/docs/contacts',
      '/docs/forms',
      '/docs/installation',
      '/docs/segments',
      '/docs/senders',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
