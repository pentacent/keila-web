<template>
  <div>
    <div
      class="container max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
    >
      <h1 class="text-5xl font-semibold">Try Keila!</h1>
      <p class="text-3xl font-medium text-gray-700">
        Your choice: Install Keila on your own server or give our hosted service
        a try!
      </p>
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
            />
          </svg>
          Try Keila as a Service
        </h2>
        <p class="text-xl mt-5">
          Start creating and sending newsletters right away. Try
          <span class="font-semibold">Keila as a Service</span> and we’ll take
          care of everything.
        </p>
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
              />
            </svg>
            Try Keila for free now
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
              <span class="block -mt-2 text-sm">{{ plan.net }}/month</span>
              <span
                v-if="plan.loaded"
                class="block -mt-1 text-xs text-green-600"
              >
                ({{ plan.gross }} incl tax)
              </span>
              <span v-else class="block -mt-1 text-xs text-green-600">
                ({{ plan.gross }} excl tax)
              </span>
            </h3>
            <ul>
              <li class="flex">
                <check-complete class="mr-2 flex-shrink-0" />
                {{ plan.limit }} emails/month
              </li>
              <li class="flex">
                <check-complete class="mr-2 flex-shrink-0" />
                unlimited contacts
              </li>
            </ul>
          </div>
        </div>
        <p class="mt-16">
          <a
            href="https://app.keila.io/auth/register"
            class="font-semibold underline"
          >
            Try Keila for free now. No credit card required.
          </a>
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
              />
            </svg>
            Try Keila on Your Own Server
          </h2>
          <p class="text-xl mt-5">
            Keila is free/libre Open Source software. You can check out its
            source code on GitHub and install it on your own servers.
          </p>
          <br /><br />
          <p>
            <nuxt-link class="p-5 bg-green-600 text-white" to="/docs"
              >To the Installation Guide</nuxt-link
            >
          </p>
        </div>
      </lazy-hydrate>
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
              class="h-12 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Participate &amp; Follow us!
          </h2>
          <ul class="text-lg">
            <li class="mt-5">
              <a class="underline" href="https://twitter.com/keila_io"
                >Follow the Keila Project on Twitter</a
              >
            </li>
            <li class="mt-5">
              <a
                class="underline"
                href="https://app.keila.io/forms/frm_GX8qGEZd"
              >
                Sign up to our newsletter
              </a>
            </li>
            <li class="mt-5">
              <a class="underline" href="https://github.com/pentacent/keila"
                >Join the development on GitHub</a
              >
            </li>
          </ul>
        </div>
      </lazy-hydrate>
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
        plan('XS', 660926, '2,000', '€8', '€8.00'),
        plan('S', 660927, '5,000', '€16', '€16.00'),
        plan('M', 660928, '15,000', '€32', '€32.00'),
        plan('L', 660929, '50,000', '€64', '€64.00'),
        plan('XL', 660930, '100,000', '€128', '€128.00'),
        plan('XXL', 660931, '250,000', '€256', '€256.00'),
      ],
    }
  },
  head() {
    return {
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
