<template>
  <div>
    <div
      class="container max-w-4xl mx-auto bg-white p-5 md:p-10 text-gray-800 rounded shadow-lg"
    >
      <lazy-hydrate never>
        <div>
          <p class="text-5xl font-semibold">
            Hey, we’re the Keila Project.<br />
          </p>

          <p class="text-3xl font-medium text-gray-900">
            We’re building an
            <span class="font-bold">OpenSource email newsletter</span> tool.
            That’s right, we’re building a
            <span class="text-green-600 font-bold">
              free alternative to MailChimp</span
            >!
          </p>

          <div class="my-12">
            <div
              class="border border-1 border-gray-400 -mx-5 lg:-mx-16 shadow-lg rounded overflow-hidden bg-white"
            >
              <div class="h-8 bg-gray-200 flex items-center">
                <div class="bg-red-400 rounded-full w-3 h-3 ml-2"></div>
                <div class="bg-yellow-400 rounded-full w-3 h-3 ml-2"></div>
                <div class="bg-green-400 rounded-full w-3 h-3 ml-2"></div>
              </div>
              <video
                :poster="require('~/assets/keila-20210705.jpg')"
                loop
                controls
                class="w-full"
                width="1024"
                height="576"
              >
                <source src="/keila-20210705.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </lazy-hydrate>

      <lazy-hydrate on-interaction when-visible>
        <div
          class="my-16 -mx-5 md:-mx-10 px-5 md:px-10 py-12 bg-green-300 text-black"
        >
          <h2
            class="text-3xl font-semibold flex flex-col md:flex-row items-center gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            Follow the development of Keila!
          </h2>
          <div class="grid md:grid-cols-2 gap-5 mt-5">
            <newsletter class="row-start-2 md:row-start-1" />
            <div class="row-start-1 text-xl font-semibold md:mt-4">
              This is a real newsletter form powered by Keila!<br />
              Give it a try and stay up to date with our progress building
              Keila!
              <div>
                <svg
                  viewBox="0 0 565 372.136"
                  class="md:hidden mt-5 h-16 md:w-1/4 md:h-auto text-green-700"
                >
                  <path
                    fill="currentColor"
                    transform="scale(-1.5 -1) translate(-372 -372)"
                    d="M371.682 143.271c-14.688-44.676-26.316-90.576-50.797-131.58-2.447-4.284-10.403-5.508-12.239 0-17.748 42.228-36.108 83.844-47.736 127.908-1.836 7.344 7.344 12.852 12.852 7.344 10.404-10.404 21.421-20.196 33.049-28.764-1.225 90.576 1.836 195.84-105.876 223.992-47.736 12.24-100.98 5.509-140.76-25.092C18.557 284.644 9.377 231.4 12.437 181.828c0-4.896-7.344-6.12-8.568-1.224-23.868 110.772 66.096 197.064 176.256 181.764 54.468-7.344 100.368-33.048 123.624-85.068 20.809-46.512 19.584-102.204 18.36-153 11.628 10.404 24.479 19.584 37.943 26.928 6.121 3.672 14.077-1.224 11.63-7.957zm-55.08-40.391c-3.672-1.224-6.12.612-7.345 3.672l-.611.612c-9.792 3.06-18.36 7.956-26.316 13.464 9.18-29.988 21.42-59.364 33.048-88.128 15.912 29.988 25.092 62.424 35.496 94.248-11.017-9.18-21.421-18.36-34.272-23.868z"
                  />
                </svg>

                <svg
                  viewBox="0 0 421.944 189.395"
                  class="hidden md:block mt-5 w-1/3 h-auto text-green-700"
                >
                  <path
                    fill="currentColor"
                    d="M3.89 157.369c17.748-11.016 33.66-23.868 48.348-38.556 4.896-4.896 13.464-1.225 13.464 5.508 0 5.508.612 11.016.612 16.523 53.244 9.792 106.488 14.076 160.957 14.688 45.9 1.224 107.712 6.12 149.328-15.912 31.824-17.136 36.72-56.917 23.256-87.517-5.508-12.852-15.3-23.256-27.54-30.6-14.076-8.568-28.152-3.672-42.84-7.344-1.836-.612-2.448-3.06-1.224-4.896 22.644-23.868 62.424 3.672 77.112 23.256 20.808 27.54 22.032 67.933 3.672 96.696-26.928 42.84-91.188 39.78-134.64 41.004-68.544 2.448-140.76.612-208.081-14.688 0 6.12-.612 11.628-2.448 17.748 0 1.224-.611 1.836-1.224 2.448 4.896 4.283.612 15.3-7.956 13.464-17.748-3.672-35.496-9.181-52.02-17.136-4.284-3.67-3.06-11.626 1.224-14.686zm47.124-15.912c-8.568 7.344-17.136 14.688-26.928 21.42 8.567 3.672 17.748 6.12 26.928 8.568v-2.448c1.836-9.18 1.224-18.36 0-27.54z"
                  />
                </svg>
              </div>
            </div>
          </div>
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
              class="h-12 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Features &amp; Roadmap
          </h2>
          <p class="text-xl mt-5">
            We have <span class="font-semibold">big plans</span> for Keila. Here
            are some completed and planned features:
          </p>
          <ul>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>
                Compose hybrid text &amp; HTML emails with
                <a
                  href="https://en.wikipedia.org/wiki/Markdown"
                  target="_blank"
                  class="underline"
                >
                  Markdown</a
                >.
              </p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />

              <p>
                Compose plain-text emails with support for
                <a
                  href="https://shopify.github.io/liquid/"
                  target="_blank"
                  class="underline"
                  >Liquid templating</a
                >.
              </p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>Send emails with SMTP, Sendgrid, AWS&nbsp;SES.</p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>Create &amp; design your own signup forms.</p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>Import existing subscribers from CSV.</p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>Protect your forms against spammers with hCaptcha.</p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>One-click unsubscriptions.</p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>Click &amp; open tracking of campaigns.</p>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <p>Automatic contact quality monitoring &amp; bounce handling.</p>
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <p>Powerful segementation and custom fields.</p>
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              A/B tests
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              Upload images &amp; file attachments.
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              Fully-featured API for sending campaigns and syncing contacts
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <p>Create custom HTML templates with reusable blocks.</p>
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              Powerful email automations.
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <p>
                … maybe your idea?
                <a
                  class="underline"
                  href="https://github.com/pentacent/keila/projects/1"
                  >Let us know on GitHub!</a
                >
              </p>
            </li>
          </ul>
          <p class="mt-10">
            <a
              href="https://github.com/pentacent/keila/projects/1"
              class="underline"
              >Check out our development roadmap on GitHub.</a
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
              class="h-12 text-green-500"
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
export default {
  components: {
    'lazy-hydrate': LazyHydrate,
  },
}
</script>
