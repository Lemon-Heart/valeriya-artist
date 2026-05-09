<template lang="pug">
.cont
  UiFullScreenLoader(v-if="loading")
  template(v-else)
    h1 Каталог
    ui-dropdown(
      v-for="(item, i) in faq"
      :key="i"
      :title="item.question"
      style="margin-top: 20px"
    )
      div(v-html="item.answer")
</template>

<script>
import { useLoading } from '@/composables/useLoading'
import { inject, computed } from 'vue'

export default {
  setup () {
    const { loading, loadingOn, loadingOff } = useLoading()
    loadingOn()
    const store = inject('store')
    store.faq.getFaq().then(() => loadingOff())
    const faq = computed(() => store.faq.faq)
    return { faq, loading }
  }
}
</script>
