<template>
  <lazy-hydrate never>
    <div
      class="container max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
    >
      <h1 class="text-3xl md:text-5xl font-semibold">{{ $t('h1') }}</h1>
      <i18n
        tag="p"
        path="tagline"
        class="text-xl md:text-2xl font-medium text-gray-700"
      >
        <template #link>
          <a
            href="https://github.com/pentacent/keila/blob/main/CHANGELOG.md#changelog"
            class="underline"
            target="_blank"
            >{{ $t('tagline:link') }}</a
          >
        </template>
      </i18n>
      <div class="-mx-5 md:-mx-10 px-5 md:px-10 mt-10">
        <div class="grid rows-auto gap-10">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="md:flex md:flex-row md:gap-5"
          >
            <div
              class="flex flex-row gap-5 md:block md:mt-2 md:w-32 md:flex-shrink-0"
            >
              <div
                v-if="article.type"
                class="text-sm font-normal text-gray-800 p-2 inline-block flex gap-5 md:flex-row content-left"
                :class="{
                  'bg-green-200': article.type === 'added',
                  'bg-blue-200': article.type === 'changed',
                  'bg-yellow-200': article.type === 'fixed',
                }"
              >
                {{ $t(`type:${article.type}`) }}
              </div>
              <div class="text-sm mt-2 text-gray-800">
                <formatted-date :date="article.date" />
              </div>
            </div>

            <div class="max-w-3xl">
              <h2 class="text-2xl font-semibold">
                <nuxt-link
                  :to="localePath(`/updates/${article.slug}`)"
                  class="text-black no-underline hover:underline"
                  >{{ article.title }}</nuxt-link
                >
              </h2>

              <nuxt-content :document="{ body: article.excerpt }" />
              <nuxt-link
                :to="localePath(`/updates/${article.slug}`)"
                class="text-green-600 hover:underline"
                >{{ $t('read-more') }}</nuxt-link
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </lazy-hydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  nuxtI18n: {
    locales: ['en'],
  },
  async asyncData({ $content, i18n, error }) {
    const articles = await $content('updates')
      .where({
        language: i18n.locale,
      })
      .sortBy('date', 'desc')
      .sortBy('type', 'asc')
      .sortBy('title', 'asc')
      .fetch()

    if (articles.length > 0) {
      return { articles }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: `Product Updates - Keila`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `The most recent product updates for Keila, the Open Source email newsletter tool.`,
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

>>> .nuxt-content h1 {
  @apply text-3xl mb-5 font-bold text-gray-800;
}

>>> .nuxt-content > h2 {
  @apply text-xl font-semibold mt-10;
}

>>> .nuxt-content h3 {
  @apply text-xl italic;
}

>>> .nuxt-content > * + h3 {
  @apply mt-10;
}

>>> .nuxt-content > h2 + h3 {
  @apply mt-5;
}

>>> .nuxt-content h4 {
  @apply font-bold;
}

>>> .nuxt-content * + p {
  @apply mt-5;
}

>>> h2 + p {
  @apply mt-0;
}

>>> .nuxt-content table {
  @apply block w-full shadow overflow-x-auto;
  white-space: nowrap;
}

>>> .nuxt-content table th {
  @apply bg-gray-100 text-left;
}

>>> .nuxt-content table th,
>>> .nuxt-content table td {
  @apply p-5;
}

>>> .nuxt-content a {
  @apply text-green-600 underline;
}

>>> .nuxt-content a:hover {
  @apply underline;
}

>>> .nuxt-content ul {
  @apply ml-5 list-disc;
}

>>> .nuxt-content code {
  @apply bg-gray-300 border-2 border-gray-300;
}

>>> .nuxt-content pre code {
  @apply bg-transparent border-0;
}

>>> .nuxt-content .next {
  @apply mt-10;
}
</style>

<i18n>
{"en": {
  "h1": "Product updates",
  "tagline": "On this page you find recent highlights from updates to Keila, the Open Source email newsletter tool. A full technical changelog can be found at {link}.",
  "tagline:link": "GitHub",
  "type:added": "Added",
  "type:changed": "Changed",
  "type:fixed": "Fixed",
  "read-more": "Read more"
}}
</i18n>
