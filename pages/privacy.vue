<template>
  <lazy-hydrate>
    <div
      class="container legal max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
    >
      <nuxt-content :document="article" />
    </div>
  </lazy-hydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    'lazy-hydrate': LazyHydrate,
  },
  data() {
    return { article: {}, next: null }
  },
  async fetch() {
    this.article = (
      await this.$content('legal').where({ slug: 'privacy' }).fetch()
    )[0]
  },
  head() {
    return {
      title: 'Privacy - Keila',
    }
  },
}
</script>
