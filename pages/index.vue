<template>
  <div>
    <div
      class="container max-w-6xl mx-auto p-5 md:p-10 text-gray-800 rounded shadow-lg"
    >
      <lazy-hydrate never>
        <div>
          <h1 class="text-3xl md:text-5xl font-semibold">
            {{ $t('h1') }}<br />
          </h1>

          <p class="text-xl md:text-2xl font-medium text-gray-700">
            {{ $t('tagline-1') }}
            <br />
            {{ $t('tagline-2') }}
          </p>

          <p class="mt-6 flex items-start gap-6">
            <a
              href="https://app.keila.io/auth/register"
              class="text-xl p-3 bg-green-600 font-semibold text-white rounded-md hover:bg-green-500"
              >{{ $t('try-now') }}</a
            >
            <a
              href="https://github.com/pentacent/keila/"
              class="text-xl p-3 bg-green-200 text-green-800 font-semibold text-white rounded-md hover:bg-green-300"
              target="_blank"
              >{{ $t('join-community') }}</a
            >
          </p>

          <div class="mt-12 -my-4">
            <div
              class="border border-1 border-gray-400 -mx-5 lg:-mx-16 shadow-lg rounded overflow-hidden bg-white"
            >
              <div class="h-8 bg-gray-200 flex items-center">
                <div class="bg-red-400 rounded-full w-3 h-3 ml-2"></div>
                <div class="bg-yellow-400 rounded-full w-3 h-3 ml-2"></div>
                <div class="bg-green-400 rounded-full w-3 h-3 ml-2"></div>
              </div>
              <video
                :poster="require('~/assets/keila-20211203.jpg')"
                loop
                controls
                class="w-full"
                width="1280"
                height="800"
              >
                <source src="/keila-20211203.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </lazy-hydrate>

      <lazy-hydrate on-interaction when-visible>
        <div
          class="-mx-5 md:-mx-10 px-5 md:px-10 py-12 bg-green-300 text-black"
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
            {{ $t('newsletter:h2') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-5 mt-5">
            <newsletter class="row-start-2 md:row-start-1" />
            <div class="row-start-1 text-xl font-semibold md:mt-4">
              {{ $t('newsletter:tagline-1') }}
              <br />
              {{ $t('newsletter:tagline-2') }}
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
        <div class="-mx-5 md:-mx-10 px-5 md:px-10 py-12 bg-green-100">
          <h2
            class="text-3xl font-semibold flex flex-col md:flex-row items-center gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            {{ $t('highlights:h2') }}
          </h2>
          <p class="mt-5"></p>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-y-10">
            <div>
              <i18n
                tag="h3"
                path="highlights:import:h3"
                class="text-xl font-bold"
              />
              <i18n path="highlights:import:text" tag="p" class="text-gray-700">
                <template #link>
                  <nuxt-link
                    to="docs/contacts#importing-contacts"
                    class="text-green-700"
                  >
                    {{ $t('highlights:import:link') }}
                  </nuxt-link>
                </template>
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:custom-data:h3"
                class="text-xl font-bold"
              />
              <i18n
                path="highlights:custom-data:text"
                tag="p"
                class="text-gray-700"
              >
                <template #link>
                  <nuxt-link
                    to="docs/contacts#contact-data"
                    class="text-green-700"
                  >
                    {{ $t('highlights:custom-data:link') }}
                  </nuxt-link>
                </template>
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:segmentation:h3"
                class="text-xl font-bold"
              />
              <i18n
                path="highlights:segmentation:text"
                tag="p"
                class="text-gray-700"
              >
                <template #link-ui>
                  <nuxt-link to="docs/segments" class="text-green-700">
                    {{ $t('highlights:segmentation:link-ui') }}
                  </nuxt-link>
                </template>
                <template #link-query>
                  <nuxt-link
                    to="docs/segments#keila-query-language"
                    class="text-green-700"
                  >
                    {{ $t('highlights:segmentation:link-query') }}
                  </nuxt-link>
                </template>
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:privacy:h3"
                class="text-xl font-bold"
              />
              <i18n
                path="highlights:privacy:text"
                tag="p"
                class="text-gray-700"
              >
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:data-control:h3"
                class="text-xl font-bold"
              />
              <i18n
                path="highlights:data-control:text"
                tag="p"
                class="text-gray-700"
              >
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:eu:h3"
                class="text-xl font-bold"
              />
              <i18n path="highlights:eu:text" tag="p" class="text-gray-700">
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:stats:h3"
                class="text-xl font-bold"
              />
              <i18n path="highlights:stats:text" tag="p" class="text-gray-700">
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:api:h3"
                class="text-xl font-bold"
              />
              <i18n path="highlights:api:text" tag="p" class="text-gray-700">
                <template #link>
                  <nuxt-link to="docs/api" class="text-green-700">
                    {{ $t('highlights:api:link') }}
                  </nuxt-link>
                </template>
              </i18n>
            </div>
            <div>
              <i18n
                tag="h3"
                path="highlights:floss:h3"
                class="text-xl font-bold"
              />
              <i18n path="highlights:floss:text" tag="p" class="text-gray-700">
                <template #link-github>
                  <a
                    href="https://github.com/pentacent/keila"
                    class="text-green-700"
                  >
                    {{ $t('highlights:floss:link-github') }}
                  </a>
                </template>
                <template #link-docker>
                  <a
                    href="https://hub.docker.com/r/pentacent/keila"
                    class="text-green-700"
                  >
                    {{ $t('highlights:floss:link-docker') }}
                  </a>
                </template>
              </i18n>
            </div>
          </div>
        </div>
      </lazy-hydrate>

      <lazy-hydrate never>
        <div class="py-12">
          <h2
            class="text-3xl font-semibold flex flex-col md:flex-row items-center gap-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {{ $t('testimonials:h2') }}
          </h2>
          <div class="grid gap-5 sm:grid-cols-1 mt-5">
            <blockquote class="flex flex-row gap-4">
              <img
                :src="require('~/assets/testimonials/anouk.jpg')"
                alt="Anouk Ooms"
                class="rounded-full h-24"
              />
              <div>
                <i18n
                  tag="p"
                  path="testimonials:volt:quote"
                  class="text-xl gray-600"
                ></i18n>
                <i18n
                  tag="cite"
                  path="testimonials:volt:cite"
                  class="text-xl gray-600"
                >
                  <template #link>
                    <a
                      href="https://www.volteuropa.org"
                      target="_blank"
                      class="underline"
                      >{{ $t('testimonials:volt:cite:link') }}</a
                    >
                  </template>
                </i18n>
              </div>
            </blockquote>
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
            {{ $t('features:h2') }}
          </h2>
          <i18n tag="p" path="features:tagline" class="text-xl mt-5">
            <template #highlight>
              <span class="font-semibold">{{
                $t('features:tagline:highlight')
              }}</span>
            </template>
          </i18n>
          <ul>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:markdown">
                <template #link>
                  <a
                    href="https://en.wikipedia.org/wiki/Markdown"
                    target="_blank"
                    class="underline"
                    >{{ $t('features:markdown:link') }}</a
                  >
                </template>
              </i18n>
            </li>

            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:plain-text"> </i18n>
            </li>

            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:liquid">
                <template #link>
                  <a
                    href="https://shopify.github.io/liquid/"
                    target="_blank"
                    class="underline"
                    >{{ $t('features:liquid:link') }}</a
                  >
                </template>
              </i18n>
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:senders" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:forms" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:captcha" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:import" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:unsubscribe" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:tracking" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:bounces" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:segmentation" />
            </li>
            <li class="flex mt-5">
              <check-complete class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:api" />
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:ab" />
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:images" />
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:html" />
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:automations" />
            </li>
            <li class="flex mt-5">
              <check-in-progress class="mr-2 flex-shrink-0" />
              <i18n tag="p" path="features:your-idea">
                <template #link>
                  <a
                    href="https://github.com/pentacent/keila/projects/1"
                    target="_blank"
                    class="underline"
                  >
                    {{ $t('features:your-idea:link') }}</a
                  >
                </template>
              </i18n>
            </li>
          </ul>
          <p class="mt-10">
            <a
              href="https://github.com/pentacent/keila/projects/1"
              class="underline"
              >{{ $t('features:roadmap') }}
            </a>
          </p>
        </div>
      </lazy-hydrate>
      <participate-cta />
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    'lazy-hydrate': LazyHydrate,
  },
  head() {
    return {
      title: this.$t('meta:title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta:description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('meta:description'),
        },
      ],
    }
  },
}
</script>

<i18n>
{
  "en": {
    "meta:title": "Keila - Open Source Email Newsletters Easy & Reliable",
    "meta:description": "A reliable and easy-to-use email newsletter tool. Keila is an Open Source alternative to Mailchimp that you can host yourself.",
    "h1": "Email Newsletters: Reliable & Easy",
    "tagline-1": "Grow your contact lists and send data-driven newsletter campaigns easier than ever before.",
    "tagline-2": "Keila is proudly Open Source, made in Germany and hosted in the EU 🇩🇪 🇪🇺",
    "try-now": "Try now",
    "join-community": "Join the Community",
    "newsletter:h2": "Follow the development of Keila!",
    "newsletter:tagline-1": "This is a real newsletter form powered by Keila!",
    "newsletter:tagline-2": "Give it a try and stay up to date when we release new features!",
    "highlights:h2": "Some Things You’ll Love About Keila",
    "highlights:import:h3": "Import Existing Contacts",
    "highlights:import:text": "Keila makes it really easy to get started if you have a list of existing contacts. Simply {link} and you’re ready to go.",
    "highlights:import:link": "upload a CSV file",
    "highlights:custom-data:h3": "Custom Data & Tags",
    "highlights:custom-data:text": "Complete freedom to add custom data and tags to your contacts. Use data to filter contacts and as merge fields in campaigns.",
    "highlights:segmentation:h3": "Powerful Segmentation",
    "highlights:segmentation:text": "Create smart subsets of your contact lists. Build segments with the {link-ui} or our {link-query}.",
    "highlights:segmentation:link-ui": "visual segment editor",
    "highlights:segmentation:link-query": "powerful query language",
    "highlights:privacy:h3": "Built for Privacy",
    "highlights:privacy:text": "Keila gives you the stats you need while respecting the privacy of your contacts.",
    "highlights:data-control:h3": "Own Your Data",
    "highlights:data-control:text": "With Keila, your data is yours. If you use our managed email newsletter service, we will never share your data with third parties.",
    "highlights:eu:h3": "Hosted in the EU",
    "highlights:eu:text": "Our managed email newsletter service is fully operated within the European Union, guaranteeing strict European privacy standards.",
    "highlights:stats:h3": "Live Statistics",
    "highlights:stats:text": "As soon as you click Send, Keila gives you live statistics for your newsletters, including open and click rates.",
    "highlights:api:h3": "Integrate & Automate",
    "highlights:api:text": "Integrate your email newsletter with other applications using Keila’s powerful {link} for managing contacts and email campaigns.",
    "highlights:api:link": "API",
    "highlights:floss:h3": "Open Source & Self-Hosting",
    "highlights:floss:text": "Keila is Free/Libre Open Source Software. You can run it on your own servers using the code on {link-github} or our {link-docker}.",
    "highlights:floss:link-github": "GitHub",
    "highlights:floss:link-docker": "official Docker image",
    "testimonials:h2": "What Our Users Say",
    "testimonials:volt:quote": "»Keila has helped us send millions of emails to subscribers all across Europe while keeping full control of our data.«",
    "testimonials:volt:cite": "Anouk Ooms, General Secretary of {link}",
    "testimonials:volt:cite:link": "Volt Europa",
    "features:h2": "Features & Roadmap",
    "features:tagline": "Keila is {highlight}. Here are some completed and planned features:",
    "features:tagline:highlight": "constantly evolving",
    "features:markdown": "Compose hybrid text & HTML emails with {link}.",
    "features:markdown:link": "Markdown",
    "features:plain-text": "Compose plain-text emails with style.",
    "features:liquid": "Personalize your campaigns with {link}.",
    "features:liquid:link": "Liquid",
    "features:senders": "Send emails with SMTP, Sendgrid, Mailgun, AWS SES.",
    "features:forms": "Create & design your own signup forms.",
    "features:captcha": "Protect your forms against spammers with hCaptcha.",
    "features:import": "Import existing subscribers from CSV.",
    "features:unsubscribe": "One-click unsubscriptions.",
    "features:tracking": "Click & open tracking of campaigns.",
    "features:bounces": "Automatic contact quality monitoring & bounce handling.",
    "features:segmentation": "Powerful segmentation and custom fields.",
    "features:api": "Fully-featured API for sending campaigns and syncing contacts ",
    "features:ab": "A/B tests.",
    "features:images": "Upload images & file attachments.",
    "features:html": "Create custom HTML templates with reusable blocks.",
    "features:automations": "Powerful email automations.",
    "features:your-idea": "… maybe your idea? {link}",
    "features:your-idea:link": "Let us know on GitHub!",
    "features:roadmap": "Check out our development roadmap on GitHub."
  },
  "de": {
    "meta:title": "Keila - Newsletter, zuverlässig & einfach. 100% Open Source",
    "meta:description": "Die zuverlässige und benutzerfreundliche Lösung für E-Mail-Newsletter. Keila ist die Open-Source-Alternative zu Mailchimp.",
    "h1": "E-Mail-Newsletter: Zuverlässig & Einfach",
    "tagline-1": "Gewinne neue Abonnenten und sende datengetriebene Newsletter einfacher als je zuvor.",
    "tagline-2": "Keila ist Freie Software, entwickelt in Deutschland und gehosted in der EU 🇩🇪 🇪🇺",
    "try-now": "Jetzt testen",
    "join-community": "Werde Teil der Community",
    "newsletter:h2": "Bleibe auf dem Laufenden!",
    "newsletter:tagline-1": "Dies ist ein mit Keila erstelltes Newsletter-Formular!",
    "newsletter:tagline-2": "Probiere es aus und wir schreiben dir, wenn es neue Funktionen für Keila gibt!",
    "highlights:h2": "Darum wirst du Keila lieben",
    "highlights:import:h3": "Existierende Kontakte importieren",
    "highlights:import:text": "Du kannst mit Keila direkt loslegen, wenn du bereits eine Liste mit Kontakten hast. {link} und los geht’s!",
    "highlights:import:link": "Lade einfach eine CSV-Datei hoch",
    "highlights:custom-data:h3": "Daten, Daten, Daten!",
    "highlights:custom-data:text": "Füge beliebige Daten zu deinen Kontakten und Kampagnen hinzu und erstelle datengetriebene Newsletter.",
    "highlights:segmentation:h3": "Mächtige Segmentierung",
    "highlights:segmentation:text": "Erstelle intelligente Segmente mit dem {link-ui} oder unserer {link-query}.",
    "highlights:segmentation:link-ui": "visuellen Segment-Editor",
    "highlights:segmentation:link-query": "mächtigen Query-Sprache",
    "highlights:privacy:h3": "Gebaut für Datenschutz",
    "highlights:privacy:text": "Keila liefert die Statistiken, die du willst – und respektiert dennoch die Privatsphäre deiner Kontakte.",
    "highlights:data-control:h3": "Volle Datenkontrolle",
    "highlights:data-control:text": "Mit Keila hast du volle Kontrolle über deine Daten. Auch deine Daten in unserer gehosteten Lösung werden wir nie verkaufen oder weitergeben.",
    "highlights:eu:h3": "Gehosted in der EU",
    "highlights:eu:text": "Unsere gehostete Lösung wird vollständig auf Servern innerhalb der europäischen Union betrieben. DSGVO? Ja bitte!",
    "highlights:stats:h3": "Live-Statistiken",
    "highlights:stats:text": "Sobald du auf Senden klickst, liefert Keila Statistiken, inklusive Klick- und Öffnungsraten.",
    "highlights:api:h3": "Integrieren & Automatisieren",
    "highlights:api:text": "Integriere deinen Newsletter in andere Apps oder Websites mit Keilas umfangreicher {link} zur Verwaltung von Kontakten und Kampagnen.",
    "highlights:api:link": "API",
    "highlights:floss:h3": "Open Source & Selbst hosten",
    "highlights:floss:text": "Keila ist Freie Open Source Software, die du auf eigenen Servern betreiben kannst. Nutze dazu den Code auf {link-github} oder unser {link-docker}.",
    "highlights:floss:link-github": "GitHub",
    "highlights:floss:link-docker": "offizielles Docker-Image",
    "testimonials:h2": "Das sagen unsere Nutzer*innen",
    "testimonials:volt:quote": "»Mit Keila konnten wir Millionen von E-Mails an Unterstützer*innen in ganz Europa versenden und gleichzeitig die volle Kontrolle über unsere Daten behalten.«",
    "testimonials:volt:cite": "Anouk Ooms, Generalsekretärin von {link}",
    "testimonials:volt:cite:link": "Volt Europa",
    "features:h2": "Funktionen & Roadmap",
    "features:tagline": "{highlight} Hier sind einige bereits verfügbare Funktionen sowie Features, die sich derzeit in Entwicklung befinden:",
    "features:tagline:highlight": "Keila wird ständig weiterentwickelt.",
    "features:markdown": "Erstellung von hybriden Text- und HTML-E-Mails mit{link}",
    "features:markdown:link": "Markdown.",
    "features:plain-text": "Erstellung von reinen Text-E-Mails.",
    "features:liquid": "Personalisierte E-Mails mit {link}.",
    "features:liquid:link": "Liquid",
    "features:senders": "Versenden von E-Mails über SMTP, Sendgrid, Mailgun oder AWS SES.",
    "features:forms": "Erstellung & Gestaltung von Anmeldeformularen.",
    "features:captcha": "Schutz vor Spammern mit hCaptcha.",
    "features:import": "Importierung existierender Kontakte mit CSV.",
    "features:unsubscribe": "Ein-Klick-Abmeldung.",
    "features:tracking": "Statistiken mit Klick- und Öffnungsraten der Kampagnen.",
    "features:bounces": "Automatische Überwachung der Kontakt-Qualität und Handhabung von Rückläufern.",
    "features:segmentation": "Mächtige Segmentierung und benutzerdefinierte Felder.",
    "features:api": "Umfangreiche API zur Verwaltung von Kontakten und zum Versenden von Kampagnen.",
    "features:ab": "A/B-Tests.",
    "features:images": "Dateianhänge & Upload von Bildern.",
    "features:html": "Erstellung eigener HTML-Templates mit wiederverwendbaren Blöcken.",
    "features:automations": "Umfangreiche Automationsfunktionen.",
    "features:your-idea": "… vielleicht deine Idee? {link}",
    "features:your-idea:link": "Beteilige dich auf GitHub!",
    "features:roadmap": "Unsere aktuelle Roadmap findest du auf GitHub."
  }
}
</i18n>
