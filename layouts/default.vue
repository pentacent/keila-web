<template>
  <div>
    <header>
      <div class="container max-w-4xl mx-auto p-5 md:p-10 flex items-center">
        <h1 class="text-gray-900 text-3xl sm:text-5xl text-center">
          <nuxt-link to="/">
            <logo class="h-16 -mr-3 w-auto inline-block" />
            Keila
          </nuxt-link>
        </h1>
        <div class="flex-grow"></div>
        <nav class="block text-l flex-grow text-right">
          <ul
            class="flex flex-wrap gap-2 align-center justify-end font-semibold text-black"
          >
            <li class="hidden md:block">
              <nuxt-link to="/" class="px-3 py-5">Start</nuxt-link>
            </li>
            <li class="hidden md:block">
              <nuxt-link to="/docs" class="px-3 py-5">Docs</nuxt-link>
            </li>
            <li class="hidden md:block">
              <a
                href="https://github.com/pentacent/keila"
                target="_blank"
                class="px-3 py-5"
                >GitHub</a
              >
            </li>
            <div class="hidden md:block flex-grow"></div>
            <li class="block">
              <a href="https://app.keila.io" class="px-3 py-5">Login</a>
            </li>
            <li class="block">
              <nuxt-link
                to="/try"
                class="p-3 bg-green-600 font-semibold text-white rounded-md hover:bg-green-500"
              >
                Try now
              </nuxt-link>
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
    return {
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
          content:
            'We’re building a free alternative to Mailchimp that you can host yourself',
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
  @apply bg-gradient-to-b from-white via-green-300 to-pink-600;
  @apply bg-fixed bg-gradient-to-b from-white via-gray-100 to-gray-200;
  overflow-y: scroll;
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
