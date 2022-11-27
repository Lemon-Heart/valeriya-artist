<template lang="pug">
.catalog
  h1 Каталог
  .products
    product(v-for="(product, i) in 5" :key="i" :id="i + 1")
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
.products
  display: grid
  grid-template-columns: repeat( auto-fit, minmax(75*$u, 1fr))
  gap: 10*$u 7.5*$u
</style>
