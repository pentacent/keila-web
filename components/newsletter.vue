<template>
  <form
    action="https://app.keila.io/forms/frm_GX8qGEZd"
    class="flex grid grid-auto-rows gap-4"
    method="post"
    target="_blank"
  >
    <div class="flex flex-col">
      <label for="contact_email">{{ $t('email') }}</label
      ><input
        id="contact_email"
        name="contact[email]"
        :placeholder="$t('email:placeholder')"
        class="bg-white-200 text-black shadow-sm p-2"
        type="email"
      />
    </div>
    <div class="flex flex-col">
      <label for="contact_first_name">{{ $t('first-name') }}</label
      ><input
        id="contact_first_name"
        class="bg-white-200 text-black shadow-sm p-2"
        name="contact[first_name]"
        type="text"
      />
    </div>
    <div class="flex flex-col">
      <div
        ref="h-captcha"
        class="h-captcha"
        data-sitekey="a1c5fab7-71df-4ea4-af75-87a3d07c61de"
        :data-loaded="captchaLoaded"
      ></div>
    </div>
    <div class="flex justify-start">
      <button
        class="inline-flex items-center gap-4 px-4 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-500 hover:shadow-lg"
      >
        {{ $t('submit') }}
      </button>
    </div>
    <i18n tag="div" path="privacy-hint" class="text-xs">
      <template #link>
        <a href="https://pentacent.com/privacy" class="underline">{{
          $t('privacy-hint:link')
        }}</a>
      </template>
    </i18n>
  </form>
</template>

<script>
export default {
  data() {
    return { hCaptchaReady: false, captchaLoaded: false }
  },
  head() {
    return {
      script: [
        {
          hid: 'hcaptcha',
          src: 'https://hcaptcha.com/1/api.js?render=explicit',
          defer: true,
          async: true,
          callback: () => {
            this.hCaptchaReady = true
          },
        },
      ],
    }
  },
  watch: {
    hCaptchaReady(ready) {
      if (!ready) return
      window.hcaptcha.render(this.$el.querySelector('.h-captcha'))
      this.captchaLoaded = true
    },
  },
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
    "email": "Email",
    "email:placeholder": "you.are@wonderful",
    "first-name": "First name (optional)",
    "submit": "Sign up to Keila updates!",
    "privacy-hint": "We won’t spam you! {link}",
    "privacy-hint:link": "Learn how we treat your data."
  },
  "de": {
    "email": "E-Mail",
    "email:placeholder": "du.bist@wunderbar",
    "first-name": "Vorname (freiwillig)",
    "submit": "Jetzt für Keila-Updates anmelden!",
    "privacy-hint": "Wir schicken dir keinen Spam. Versprochen! {link}",
    "privacy-hint:link": "Weitere Informationen zum Datenschutz."
  }
}
</i18n>
