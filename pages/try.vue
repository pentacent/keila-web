<template>
  <div>
    <div
      class="container max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
    >
      <h1 class="text-5xl font-semibold">{{ $t('h1') }}</h1>
      <i18n tag="p" path="tagline" class="text-3xl font-medium text-gray-700">
        <template #highlight
          ><strong>{{ $t('tagline:highlight') }}</strong></template
        >
      </i18n>
      <div class="mt-12 -mx-5 md:-mx-10 p-5 md:p-10 bg-green-300 text-black">
        <h2
          class="text-3xl font-semibold flex flex-col md:flex-row items-center gap-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            /></svg
          >{{ $t('saas:h2') }}
        </h2>
        <i18n tag="p" path="saas:tagline" class="text-xl mt-5">
          <template #highlight
            ><strong>{{ $t('saas:tagline:highlight') }}</strong></template
          >
        </i18n>
        <br />
        <p>
          <a
            href="https://app.keila.io/auth/register"
            class="inline-flex items-center gap-4 px-4 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-500 hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              /></svg
            >{{ $t('saas:cta') }}
          </a>
        </p>
      </div>
      <div class="mb-12 -mx-5 md:-mx-10 p-5 md:p-10 bg-green-200 text-black">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="flex flex-col gap-4 sm:items-center sm:text-center"
          >
            <h3 class="font-bold">
              <span class="text-2xl">{{ plan.name }}</span>
              <span class="block -mt-2 text-sm">{{
                $t('saas:price', { amount: plan.net })
              }}</span>
              <span
                v-if="plan.loaded"
                class="block -mt-1 text-xs text-green-600"
                >{{ $t('saas:price:gross', { amount: plan.gross }) }}</span
              >
              <span v-else class="block -mt-1 text-xs text-green-600">{{
                $t('saas:price:net', { amount: plan.gross })
              }}</span>
            </h3>
            <ul>
              <li class="flex">
                <check-complete class="mr-2 flex-shrink-0" />
                {{ $t('saas:emails:limited', { limit: $n(plan.limit) }) }}
              </li>
              <li class="flex">
                <check-complete class="mr-2 flex-shrink-0" />
                {{ $t('saas:contacts:unlimited') }}
              </li>
            </ul>
          </div>
        </div>
        <p class="mt-16">
          <a
            href="https://app.keila.io/auth/register"
            class="font-semibold underline"
            >{{ $t('saas:cta-link') }}</a
          >
        </p>
      </div>

      <lazy-hydrate never>
        <div class="my-16">
          <h2
            class="text-3xl font-semibold flex flex-col md:flex-row items-center gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              /></svg
            >{{ $t('self:h2') }}
          </h2>
          <i18n tag="p" path="self:tagline" class="text-xl mt-5" />
          <br /><br />
          <p>
            <nuxt-link class="p-5 bg-green-600 text-white" to="/docs">{{
              $t('self:cta')
            }}</nuxt-link>
          </p>
        </div>
      </lazy-hydrate>
      <participate-cta />
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

const plan = (name, paddleId, limit, net, gross) => {
  return { name, paddleId, limit, net, gross, loaded: false }
}
export default {
  components: {
    'lazy-hydrate': LazyHydrate,
  },
  data() {
    return {
      paddleReady: false,
      plans: [
        plan('XS', 660926, 2000, '€8', '€8.00'),
        plan('S', 660927, 5000, '€16', '€16.00'),
        plan('M', 660928, 15000, '€32', '€32.00'),
        plan('L', 660929, 50000, '€64', '€64.00'),
        plan('XL', 660930, 100000, '€128', '€128.00'),
        plan('XXL', 660931, 250000, '€256', '€256.00'),
      ],
    }
  },
  head() {
    return {
      title: this.$t('meta:title'),
      script: [
        {
          hid: 'paddle',
          src: 'https://cdn.paddle.com/paddle/paddle.js',
          defer: true,
          async: true,
          callback: () => {
            this.paddleReady = true
          },
        },
      ],
    }
  },
  watch: {
    paddleReady(ready) {
      if (ready) {
        const Paddle = window.Paddle
        Paddle.Setup({ vendor: 2518 })
        this.plans.forEach(({ paddleId }) => {
          Paddle.Product.Prices(paddleId, ({ price }) => {
            const i = this.plans.findIndex((plan) => plan.paddleId === paddleId)
            this.$set(this.plans[i], 'net', price.net.replace('.00', ''))
            this.$set(this.plans[i], 'gross', price.gross)
            this.$set(this.plans[i], 'loaded', true)
          })
        })
      }
    },
  },
}
</script>

<i18n>
{
  "en": {
    "meta:title": "Try for free or run on your own servers - Keila",
    "h1": "Try Keila for free or self-host!",
    "tagline": "{highlight} Try our fully managed email newsletter service for free - or run Keila on your own servers!",
    "tagline:highlight": "With Keila it’s your choice:",
    "saas:h2": "Try Keila as a Service",
    "saas:tagline": "Start creating and sending newsletters right away. Try {highlight} and we’ll take care of everything.",
    "saas:tagline:highlight": "Keila as a Service",
    "saas:cta": "Try Keila for free now!",
    "saas:price": "{amount}/month",
    "saas:price:net": "({amount} excl tax)",
    "saas:price:gross": "({amount} incl tax)",
    "saas:emails:limited": "{limit} emails/month",
    "saas:emails:unlimited": "unlimited emails",
    "saas:contacts:limited": "{limit} contacts",
    "saas:contacts:unlimited": "unlimited contacts",
    "saas:cta-link": "Try Keila for free now. No credit card required.",
    "self:h2": "Try Keila on Your Own Server",
    "self:tagline": "Keila is free/libre Open Source software. You can check out its source code on GitHub and install it on your own servers.",
    "self:cta": "To the Installation Guide"
  },
  "de": {
    "meta:title": "Jetzt kostenlos testen oder selbst installieren - Keila",
    "h1": "Teste Keila kostenlos oder hoste es selbst!",
    "tagline": "{highlight} Teste unseren verwalteten E-Mail-Newsletter-Dienst kostenlos – oder installiere Keila auf einem eigenen Server!",
    "tagline:highlight": "Mit Keila hast du die Wahl:",
    "saas:h2": "Teste Keila as a Service",
    "saas:tagline": "Lege sofort los und sende deinen Newsletter. Teste {highlight} und wir kümmern uns um alles.",
    "saas:tagline:highlight": "Keila as a Service",
    "saas:cta": "Keila jetzt kostenlos testen!",
    "saas:price": "{amount}/Monat",
    "saas:price:net": "({amount} zzgl MwSt)",
    "saas:price:gross": "({amount} inkl MwSt)",
    "saas:emails:limited": "{limit} E-Mails/Monat",
    "saas:emails:unlimited": "beliebig viele E-Mails",
    "saas:contacts:limited": "{limit} Kontakte",
    "saas:contacts:unlimited": "beliebig viele Kontakte",
    "saas:cta-link": "Keila jetzt kostenlos testen. Es wird keine Kreditkarte benötigt.",
    "self:h2": "Keila auf einem eigenen Server installieren",
    "self:tagline": "Keila ist Freie Open Source Software. Du findest den vollständigen Quelltext auf GitHub und kannst Keila auf einem eigenen Server selbst hosten.",
    "self:cta": "Zum Installation Guide"
  }
}
</i18n>
