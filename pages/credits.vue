<template>
  <div>
    <div
      class="container max-w-4xl mx-auto bg-white p-10 text-gray-800 rounded-t"
    >
      <h1 class="text-5xl font-semibold">Credits<br /></h1>
      <p>
        This website is built with
        <a class="underline" href="https://nuxtjs.org/">Nuxt</a>.
      </p>
      <ul class="mt-5">
        <li>
          Styling:
          <a class="underline" href="https://tailwindcss.com/">Tailwind CSS</a>
        </li>
        <li>
          Typeface:
          <a class="underline" href="https://rsms.me/inter/">Inter</a> (<a
            href="https://choosealicense.com/licenses/ofl-1.1/"
            class="underline"
            >SIL</a
          >)
        </li>
        <li>
          Icons:
          <a class="underline" href="https://heroicons.com/">Heroicons</a> (<a
            class="underline"
            href="https://github.com/tailwindlabs/heroicons/blob/1cef5f13f97bddbbdbf04e352099cecca52d754d/LICENSE"
            >MIT</a
          >)
        </li>
        <li>
          Handdrawn Arrows:
          <a class="underline" href="https://www.freepik.com">Freepik</a> via
          <a class="underline" href="https://www.flaticon.com/"
            >www.flaticon.com</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ['en'],
  },
  head() {
    return {
      title: 'Credits - Keila',
    }
  },
}
</script>
