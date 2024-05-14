<template>
  <div>
    <header>
      <div class="container max-w-6xl mx-auto p-5 md:p-10 flex items-center">
        <div class="text-3xl sm:text-5xl text-center">
          <nuxt-link :to="localePath('/')">
            <logo class="h-16 -mr-3 w-auto inline-block" />
            Keila
          </nuxt-link>
        </div>
        <div class="flex-grow"></div>
        <div class="relative flex-grow pr-4">
          <!-- TODO: Localize placeholder? -->
          <input
            v-model="query"
            class="px-5 py-5 bg-gray-200 w-full"
            type="search"
            autocomplete="off"
            placeholder="Search …"
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
              >
                {{ article.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <nav class="block text-l text-right">
          <ul
            class="flex gap-2 align-center justify-end font-semibold text-black"
          >
            <li class="hidden md:block">
              <a
                href="https://github.com/pentacent/keila"
                target="_blank"
                class="px-3 py-5 text-gray-800"
                >GitHub</a
              >
            </li>
            <div class="hidden md:block flex-grow"></div>
            <li class="block">
              <nuxt-link
                to="/"
                class="p-3 bg-green-600 font-semibold text-white rounded-md hover:bg-green-500"
              >
                keila.io
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <page-footer />
  </div>
</template>

<script>
import logo from '../components/logo.vue'
import ogImage from '@/static/og_image.png'
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
          content: 'Keila - Open Source Email Newsletters',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "We're building a free alternative to Mailchimp that you can host yourself",
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
