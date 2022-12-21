<template lang="pug">
.catalog
  UiFullScreenLoader.loader(v-if="loading")
  template(v-else)
    h1 Каталог
    .products
      product(v-for="product in catalog" :key="product.id" :paint="product")
</template>

<script>
import { useLoading } from '@/composables/useLoading'
import Product from '@/components/Catalog/Product'
import { inject, computed } from 'vue'

export default {
  components: { Product },
  setup () {
    const { loading, loadingOn, loadingOff } = useLoading()
    loadingOn()

    const store = inject('store')
    store.catalog.getCatalog().then(() => loadingOff())
    const catalog = computed(() => store.catalog.paintings)

    return { catalog, loading }
  }
}
</script>

<style lang="sass" scoped>
.catalog
  margin-top: 10*$u
.products
  display: grid
  grid-template-columns: repeat( auto-fit, 100*$u)
  justify-content: center
  gap: 10*$u 7.5*$u
  @media screen and (max-width: 1400px)
    grid-template-columns: repeat( auto-fit, 80*$u)
  @media screen and (max-width: $padWidth)
    grid-template-columns: repeat( auto-fit, 70*$u)
  @media screen and (max-width: $XSWidth)
    grid-template-columns: repeat( auto-fit, 60*$u)
    gap: 5*$u
  @media screen and (max-width: $XXSWidth)
    gap: 3*$u
    grid-template-columns: repeat( auto-fit, 50*$u)
  @media screen and (max-width: 440px)
    grid-template-columns: repeat( auto-fit, 40*$u)
</style>
