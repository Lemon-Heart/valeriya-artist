<template lang="pug">
.cont
  h1 Product {{ productId }}
</template>

<script>
export default {
  props: {
    productId: Number
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
