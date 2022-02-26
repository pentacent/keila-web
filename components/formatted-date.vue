<template>
  <span>{{ formattedDate }}</span>
</template>

<script>
export default {
  props: {
    date: {
      required: true,
      type: [Date, String],
    },
  },
  data() {
    const locale = this.$i18n.locale
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    const formatter = Intl.DateTimeFormat(locale, options)
    return {
      formatter,
    }
  },
  computed: {
    formattedDate() {
      return this.formatter.format(new Date(this.date))
    },
  },
}
</script>
