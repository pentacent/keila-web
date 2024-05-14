<template>
  <div
    class="container max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
  >
    <article class="max-w-3xl">
      <formatted-date :date="doc.date" />
      <h1 class="text-3xl md:text-5xl font-semibold">
        {{ doc.title }}
      </h1>
      <ContentRenderer :value="doc" />

      <nuxt-link
        :to="`/updates`"
        class="next block w-1/2 p-10 border-2 border-green-300 rounded bg-white hover:bg-gray-100"
      >
        More updates
      </nuxt-link>
    </article>
  </div>
</template>

<script lang="ts" setup>
import formattedDate from '../../components/formatted-date.vue'

const route = useRoute()
const slugs = route.params.slug

const slug = (Array.isArray(slugs) ? slugs.filter((s) => s) : [slugs]).join('/')

const { data: doc } = await useAsyncData('page-data', () =>
  queryContent('/updates').where({ slug }).findOne()
)

// head() {
//   const title = this.article.title
//   return {
//     title: `${title} - Keila`,
//     meta: [
//       {
//         hid: 'og:title',
//         property: 'og:title',
//         content: `${title} - Keila Open Source Email Newsletters`,
//       },
//       {
//         hid: 'description',
//         name: 'description',
//         content: this.article.description,
//       },
//       {
//         hid: 'og:type',
//         property: 'og:type',
//         content: 'article',
//       },
//       {
//         hid: 'og:description',
//         property: 'og:description',
//         content: this.article.description,
//       },
//       {
//         hid: 'article:published_time',
//         property: 'article:published_time',
//         content: this.article.date,
//       },
//     ],
//   }
// },
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

>>> article p:first-of-type {
  @apply text-2xl font-medium text-gray-700;
}
</style>
