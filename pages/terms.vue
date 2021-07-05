<template>
  <lazy-hydrate>
    <div
      class="container legal max-w-4xl mx-auto bg-white p-5 md:p-10 text-gray-800 rounded shadow-lg"
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
      await this.$content('legal').where({ slug: 'terms' }).fetch()
    )[0]
  },
  head() {
    return {
      title: 'Terms & Conditions - Keila',
    }
  },
}
</script>
