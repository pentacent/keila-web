<template>
  <div class="flex min-h-full max-w-6xl mx-auto">
    <nav class="hidden md:block text-lg bg-white bg-green-600 text-white p-5">
      <ul>
        <li>
          <nuxt-link to="/docs/">Introduction </nuxt-link>
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
            <li><nuxt-link to="/docs/forms">Forms</nuxt-link></li>
            <li><nuxt-link to="/docs/campaigns">Campaigns</nuxt-link></li>
          </ul>
        </li>
      </ul>
    </nav>
    <article class="flex-grow p-5 md:py-10 overflow-hidden">
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
}
</script>

<style scoped>
@apply color-gray-800;

nav a {
  @apply block px-10 py-5 rounded font-medium;
}

nav li.with-sub > a {
  @apply font-bold bg-transparent;
}

nav a:hover {
  @apply underline;
}

nav li li a {
  @apply ml-10 pl-5 py-4;
}

nav a.nuxt-link-exact-active {
  @apply bg-green-800;
}

>>> article * + * {
  @apply mt-5;
}

>>> article h1 {
  @apply text-5xl mb-5 font-bold text-gray-800;
}

>>> article h2 {
  @apply text-xl font-semibold mt-10;
}

>>> article h3 {
  @apply text-xl italic;
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
  @apply bg-gray-100 border-2 border-gray-100;
}

>>> article .next {
  @apply mt-10;
}
</style>
