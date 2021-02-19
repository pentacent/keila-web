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
    },
  },
  data() {
    console.log(this.src)
    return {
      image: require(`~/assets/${this.src}`),
    }
  },
}
</script>
