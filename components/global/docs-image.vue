<template>
  <img :src="image" :alt="alt" :title="title" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      image: this.src.startsWith('~')
        ? require(this.src)
        : require(`~/assets/${this.src}`),
    }
  },
}
</script>
