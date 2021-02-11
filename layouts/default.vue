<template>
  <div>
    <div class="container max-w-4xl mx-auto p-5 md:p-10">
      <h1 class="text-green-500 text-5xl text-center">
        <a href="/">
          <logo class="h-16 -mr-3 w-auto inline-block" />
          Keila
        </a>
      </h1>
    </div>
    <main>
      <Nuxt />
    </main>
    <footer class="container max-w-4xl mx-auto my-5 p-5 md:p-10">
      <p>Made in 🇩🇪 ❤️ 🇪🇺.</p>
      <p class="text-sm flex">
        <a class="underline" href="/credits">Credits</a>
        <a class="underline ml-2" href="https://pentacent.com/legal"
          >Legal notice</a
        >
        <a class="underline ml-2" href="https://pentacent.com/privacy"
          >Privacy policy</a
        >
      </p>
    </footer>
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
          content:
            'Keila - Open Source Newsletter',
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
  @apply bg-gradient-to-b from-green-100 via-gray-200 to-green-100;
  overflow-y: scroll;
}
</style>
