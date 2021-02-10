<template>
  <form
    action="https://app.keila.io/forms/frm_GX8qGEZd"
    class="flex grid grid-auto-rows gap-5"
    method="post"
    target="_blank"
  >
    <div class="flex flex-col">
      <label for="contact_email">Email</label
      ><input
        id="contact_email"
        name="contact[email]"
        placeholder="wonderful@you"
        class="bg-white-200 text-black shadow-sm p-2"
        type="email"
      />
    </div>
    <div class="flex flex-col">
      <label for="contact_first_name">First name (optional)</label
      ><input
        id="contact_first_name"
        class="bg-white-200 text-black shadow-sm p-2"
        name="contact[first_name]"
        type="text"
      />
    </div>
    <div class="flex flex-col">
      <div
        class="h-captcha"
        data-sitekey="a1c5fab7-71df-4ea4-af75-87a3d07c61de"
      ></div>
    </div>
    <div class="flex justify-start">
      <button
        class="bg-indigo-700 border border-2 border-indigo-400 hover:shadow hover:bg-indigo-600 text-white rounded py-3 px-5 font-semibold"
      >
        Sign up to the latest Keila updates!
      </button>
    </div>
    <div class="text-xs">
      We won’t spam you!
      <a href="https://pentacent.com/privacy" class="underline"
        >Learn how we treat your data.</a
      >
    </div>
  </form>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://hcaptcha.com/1/api.js', async: true, defer: true },
      ],
    }
  },
}
</script>
