<template>
  <div>
    <header>
      <div class="container max-w-6xl mx-auto p-5 md:p-10 flex items-center">
        <div class="text-gray-900 text-3xl sm:text-5xl text-center">
          <nuxt-link :to="localePath('/')">
            <logo class="h-12 md:h-16 -mr-3 w-auto inline-block" />
            Keila
          </nuxt-link>
        </div>
        <div class="flex-grow"></div>
        <nav class="block text-l flex-grow text-right">
          <ul
            class="flex flex-wrap gap-2 align-center justify-end font-semibold text-black"
          >
            <li class="hidden md:block">
              <nuxt-link :to="localePath('/')" class="px-3 py-5">{{
                $t('menu:home')
              }}</nuxt-link>
            </li>
            <li class="hidden md:block">
              <nuxt-link to="/docs" class="px-3 py-5">{{
                $t('menu:docs')
              }}</nuxt-link>
            </li>
            <li class="hidden md:block">
              <nuxt-link :to="localePath('/try')" class="px-3 py-5">{{
                $t('menu:pricing')
              }}</nuxt-link>
            </li>
            <li class="hidden md:block">
              <a
                href="https://github.com/pentacent/keila"
                target="_blank"
                class="px-3 py-5"
                >{{ $t('menu:github') }}</a
              >
            </li>
            <div class="hidden md:block flex-grow"></div>
            <li class="block">
              <a href="https://app.keila.io" class="px-3 py-5">{{
                $t('menu:login')
              }}</a>
            </li>
            <li class="block">
              <a
                href="https://app.keila.io/auth/register"
                class="p-3 bg-green-600 font-semibold text-white rounded-md hover:bg-green-500"
              >
                {{ $t('menu:try') }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
    <page-footer class="max-w-4xl" />
  </div>
</template>

<script>
import ogImage from '@/static/og_image.png'
import logo from '../components/logo.vue'
const baseUrl = process.env.BASE_URL || ''

export default {
  components: { logo },
  head() {
    const i18nHead = this.$nuxtI18nHead
      ? this.$nuxtI18nHead({ addSeoAttributes: true })
      : {}
    return {
      ...i18nHead,
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: baseUrl + ogImage,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Keila - Open Source Newsletters',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('meta:description'),
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
      ],
    }
  },
}
</script>

<style>
body {
  font-family: Inter, Arial, Helvetica, sans-serif;
  /*@apply bg-gradient-to-b from-indigo-800 via-indigo-300 to-green-100;*/
  /* @apply bg-gradient-to-b from-white via-green-300 to-pink-600;
  @apply bg-fixed bg-gradient-to-b from-white via-gray-100 to-gray-200;
  overflow-y: scroll; */
}

.legal .nuxt-content {
  @apply max-w-md mx-auto text-gray-800;
}

.legal .nuxt-content h1 {
  @apply text-3xl font-bold mb-4;
}

.legal .nuxt-content h2 {
  @apply text-xl font-bold mt-4;
}

.legal .nuxt-content h3 {
  @apply text-lg font-bold mt-2;
}

.legal .nuxt-content a {
  @apply underline text-green-600;
}

.legal .nuxt-content p + p {
  @apply mt-2;
}

.legal .nuxt-content .footnote {
  @apply text-sm text-gray-600 mt-8;
}
</style>

<i18n>
{
  "en": {
    "meta:description": "A reliable and easy-to-use email newsletter tool. Keila is an Open Source alternative to Mailchimp that you can host yourself.",
    "menu:home": "Start",
    "menu:docs": "Docs",
    "menu:pricing": "Pricing",
    "menu:github": "GitHub",
    "menu:login": "Login",
    "menu:try": "Try now"
  },
  "de": {
    "meta:description": "Die zuverlässige und benutzerfreundliche Lösung für E-Mail-Newsletter. Keila ist die Open-Source-Alternative zu Mailchimp.",
    "menu:home": "Start",
    "menu:docs": "Docs",
    "menu:pricing": "Preise",
    "menu:github": "GitHub",
    "menu:login": "Login",
    "menu:try": "Jetzt testen"
  }
}
</i18n>
