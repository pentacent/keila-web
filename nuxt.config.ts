export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  app: {
    head: {
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
    },
  },

  content: {
    ignores: ['/docs', '/legal'],
  },

  modules: [
    // [
    //   'nuxt-matomo',
    //   {
    //     matomoUrl: 'https://tracking.vanbittern.com/',
    //     siteId: 33,
    //     cookies: false,
    //   },
    // ],

    '@nuxt/content',
    // '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    //   // parsePages: true,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
    ],
    defaultLocale: 'en',
    // vueI18n: {
    //   fallbackLocale: 'en',
    // },
    //   baseUrl: 'https://www.keila.io',
  },
  ssr: false,
  // sitemap: {
  //   hostname: 'https://www.keila.io',
  //   i18n: {
  //     locales: ['en', 'de'],
  //     routesNameSeparator: '___',
  //   },
  //   routes: [
  //     '/docs',
  //     '/docs/api',
  //     '/docs/campaigns',
  //     '/docs/setup',
  //     '/docs/contacts',
  //     '/docs/forms',
  //     '/docs/installation',
  //     '/docs/segments',
  //     '/docs/senders',
  //   ],
  // },
})
