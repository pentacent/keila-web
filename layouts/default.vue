<template>
  <div class="bg-white min-h-screen">
    <header class="shadow relative">
      <div class="max-w-6xl mx-auto p-5 md:p-10 flex items-center">
        <h1 class="text-green-500 text-3xl md:text-5xlx">
          <a href="/" class="flex">
            <logo class="h-16 -mr-3 w-auto inline-block" />
            Keila
          </a>
        </h1>

        <nav class="hidden md:block text-xl font-semibold flex-grow text-right">
          <ul class="flex justify-end">
            <li class="mr-10">
              <nuxt-link to="/">Start</nuxt-link>
            </li>
            <li class="mr-10">
              <nuxt-link to="/docs">Docs</nuxt-link>
            </li>
            <li class="mr-10">
              <a href="https://github.com/pentacent/keila">GitHub</a>
            </li>
          </ul>
        </nav>
        <div class="relative ml-10">
          <input
            v-model="query"
            class="p-5 bg-gray-100 w-full"
            type="search"
            autocomplete="off"
            placeholder="Search"
          />
          <ul
            v-if="searchResults.length"
            class="bg-gray-100 shadow absolute w-full z-40"
          >
            <li v-for="article of searchResults" :key="article.slug">
              <nuxt-link
                class="p-5 block"
                :to="`/docs/${article.slug}`"
                @click.native="clearSearch"
                >{{ article.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
    <page-footer />
  </div>
</template>

<script>
import ogImage from '@/static/og_image.png'
import logo from '../components/logo.vue'
const baseUrl = process.env.BASE_URL || ''

export default {
  components: { logo },
  data() {
    return { searchResults: [], query: '' }
  },
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
  watch: {
    async query(query) {
      if (!query) {
        this.searchResults = []
        return
      }

      this.searchResults = await this.$content('docs')
        .where({ slug: { $ne: 'index' } })
        .only(['title', 'slug'])
        .limit(4)
        .search(query)
        .fetch()
    },
  },
  methods: {
    clearSearch() {
      this.query = ''
    },
  },
}
</script>

<style>
body {
  font-family: Inter, Arial, Helvetica, sans-serif;
  overflow-y: scroll;
}
</style>
