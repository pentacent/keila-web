<template>
  <div
    class="container legal max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
  >
    <ContentDoc path="/legal/privacy" />
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ['en'],
  },
  head() {
    return {
      title: 'Privacy - Keila',
    }
  },
}
</script>
