<template>
  <lazy-hydrate never>
    <div class="my-16">
      <h2
        class="text-3xl font-semibold flex flex-col md:flex-row items-center gap-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-12 text-green-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          /></svg
        >{{ $t('h2') }}
      </h2>
      <ul class="text-lg">
        <li class="mt-5">
          <a class="underline" rel="me" href="https://fosstodon.org/@keila">{{
            $t('mastodon')
          }}</a>
        </li>
        <li class="mt-5">
          <a class="underline" href="https://twitter.com/keila_io">{{
            $t('twitter')
          }}</a>
        </li>
        <li class="mt-5">
          <a class="underline" href="https://app.keila.io/forms/frm_GX8qGEZd">{{
            $t('newsletter')
          }}</a>
        </li>
        <li class="mt-5">
          <a class="underline" href="https://github.com/pentacent/keila">{{
            $t('github')
          }}</a>
        </li>
      </ul>
    </div>
  </lazy-hydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: { LazyHydrate },
}
</script>

<style scoped>
.h-captcha:not([data-loaded]) {
  @apply bg-gray-200;
  height: 78px;
  max-width: 303px;
  overflow: hidden;
}

.h-captcha:not([data-loaded]):before {
  content: '';
  @apply block bg-white shadow animate-pulse h-10 w-10 m-4 rounded;
}
</style>

<i18n>
{
  "en": {
    "h2": "Participate & Follow us",
    "mastodon": "Follow Keila on Mastodon",
    "twitter": "Follow Keila on Twitter",
    "newsletter": "Sign up to our newsletter",
    "github": "Join the development on GitHub"
  },
  "de": {
    "h2": "Mach mit und bleibe auf dem Laufenden",
    "mastodon": "Folge Keila auf Mastodon",
    "twitter": "Folge Keila auf Twitter",
    "newsletter": "Melde dich für unseren Newsletter an",
    "github": "Beteilige dich an der Entwicklung auf GitHub"
  }
}
</i18n>
