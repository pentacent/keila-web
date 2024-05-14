<template>
  <footer
    class="container max-w-6xl mx-auto my-5 p-5 md:p-10 text-left md:flex md:flex-row gap-5"
  >
    <div class="flex-grow">
      <p>Made in 🇩🇪 ❤️ 🇪🇺.</p>
      <p class="text-sm">
        <a class="underline" href="/credits">Credits</a>
        <a class="underline ml-2" href="https://pentacent.com/legal">
          Legal notice
        </a>
        <nuxt-link class="underline ml-2" to="/privacy">
          Privacy policy
        </nuxt-link>
        <nuxt-link class="underline ml-2" to="/terms">
          Terms &amp; Conditions
        </nuxt-link>
      </p>
    </div>
    <div
      v-if="translations.length > 1"
      class="align-right grid grid-flow-col auto-cols-max gap-5 flex-shrink"
    >
      <nuxt-link
        v-for="{ locale, path } in translations"
        :key="locale.code"
        :to="path"
        :class="[{ 'font-bold': $i18n.locale === locale.code }]"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    translations() {
      return this.$i18n.locales
        .map((locale) => {
          return { locale, path: this.switchLocalePath(locale.code) }
        })
        .filter((translation, i, array) => {
          return array.findIndex(({ path }) => path === translation.path) === i
        })
    },
  },
}
</script>
