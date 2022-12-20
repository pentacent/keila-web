import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
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
  modules: [
    [
      '@nuxtjs/i18n',
      {
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
    ],
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    // [
    //   'nuxt-matomo',
    //   {
    //     matomoUrl: 'https://tracking.vanbittern.com/',
    //     siteId: 33,
    //     cookies: false,
    //   },
    // ],
    // ['@nuxtjs/sitemap', {}],
  ],

  // sitemap: {
  //   hostname: 'https://www.keila.io',
  //   // i18n: true,
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
  // }
})
