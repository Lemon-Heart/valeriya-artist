<template lang="pug">
.catalog
  h1 Catalog
  .products
    product
</template>

<script>
import Product from '@/components/Catalog/Product'

export default {
  components: { Product },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
