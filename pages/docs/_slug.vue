<template>
  <div class="flex min-h-full max-w-6xl mx-auto">
    <nav
      class="hidden md:block text-md text-gray-800 p-5 md:p-10 border-gray-900 border-r-2"
    >
      <ul>
        <li>
          <nuxt-link to="/docs">Introduction </nuxt-link>
        </li>
        <li class="with-sub">
          <nuxt-link to="/docs/installation">Installation</nuxt-link>
          <ul>
            <li><nuxt-link to="/docs/installation">Requirements</nuxt-link></li>
            <li>
              <nuxt-link to="/docs/configuration">Configuration</nuxt-link>
            </li>
            <li><nuxt-link to="/docs/setup">First Steps</nuxt-link></li>
          </ul>
        </li>
        <li class="with-sub">
          <nuxt-link to="/docs/senders">Usage</nuxt-link>
          <ul>
            <li><nuxt-link to="/docs/senders">Senders</nuxt-link></li>
            <li><nuxt-link to="/docs/contacts">Contacts</nuxt-link></li>
            <li><nuxt-link to="/docs/segments">Segments</nuxt-link></li>

            <li><nuxt-link to="/docs/forms">Forms</nuxt-link></li>
            <li><nuxt-link to="/docs/campaigns">Campaigns</nuxt-link></li>
          </ul>
        </li>
        <li class="with-sub">
          <nuxt-link to="/docs/api">API</nuxt-link>
          <ul>
            <li>
              <a href="https://app.keila.io/api/#/Contact" target="_blank"
                >Contacts</a
              >
            </li>
            <li>
              <a href="https://app.keila.io/api/#/Segment" target="_blank"
                >Segments</a
              >
            </li>
            <li>
              <a href="https://app.keila.io/api/#/Campaign" target="_blank"
                >Campaigns</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <article class="flex-grow p-5 md:p-10 md:pt-5 overflow-hidden">
      <nuxt-content :document="article" />
      <nuxt-link
        v-if="next"
        :to="`/docs/${next.slug}`"
        class="next block w-1/2 p-10 border-2 border-green-300 rounded bg-white hover:bg-gray-100"
      >
        Read next:
        <span class="font-semibold">{{ next.title }}</span>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  nuxtI18n: {
    locales: ['en'],
  },
  data() {
    return { article: {}, next: null }
  },
  async fetch() {
    this.article =
      (
        await this.$content('docs')
          .where({
            slug: this.$route.params.slug || 'index',
          })
          .fetch()
      )[0] || {}

    if (this.article.next) {
      this.next =
        (
          await this.$content('docs')
            .where({
              slug: this.article.next,
            })
            .only(['title', 'slug'])
            .fetch()
        )[0] || null
    }
  },
  head() {
    const title = this.article.title
    if (!title) return {}
    return {
      title: `${title} - Keila`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${title} - Keila Open Source Email Newsletters`,
        },
      ],
    }
  },
}
</script>

<style scoped>
nav a {
  @apply block px-2 py-2 rounded font-medium text-gray-800;
}

nav li.with-sub > a {
  @apply font-bold bg-transparent text-gray-700;
}

nav > ul > li + li {
  @apply mt-2;
}

nav a:hover {
  @apply underline;
}

nav li li a {
  @apply font-normal ml-4 py-1;
}

nav a.nuxt-link-exact-active {
  @apply bg-green-700 text-white;
}

>>> .nuxt-content > * + * {
  @apply text-gray-800 mt-5;
}

>>> article h1 {
  @apply text-3xl mb-5 font-bold text-gray-800;
}

>>> .nuxt-content > h2 {
  @apply text-xl font-semibold mt-10;
}

>>> article h3 {
  @apply text-xl italic;
}

>>> .nuxt-content > * + h3 {
  @apply mt-10;
}

>>> .nuxt-content > h2 + h3 {
  @apply mt-5;
}

>>> article h4 {
  @apply font-bold;
}

>>> article * + p {
  @apply mt-5;
}

>>> h2 + p {
  @apply mt-0;
}

>>> article table {
  @apply block w-full shadow overflow-x-auto;
  white-space: nowrap;
}

>>> article table th {
  @apply bg-gray-100 text-left;
}

>>> article table th,
>>> article table td {
  @apply p-5;
}

>>> article a {
  @apply text-green-600;
}

>>> article ul {
  @apply ml-5 list-disc;
}

>>> article code {
  @apply bg-gray-300 border-2 border-gray-300;
}

>>> article pre code {
  @apply bg-transparent border-0;
}

>>> article .next {
  @apply mt-10;
}
</style>
