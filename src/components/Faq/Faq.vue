<template lang="pug">
.cont
  UiFullScreenLoader(v-if="loading")
  template(v-else)
    ui-dropdown(
      v-for="(item, i) in faq"
      :key="i"
      :icon="faqIcon"
      :title="item.question"
      style="margin-top: 20px"
      icon-size="s"
    )
      div(v-html="item.answer")
</template>

<script>
import { useLoading } from '@/composables/useLoading'
import { inject, computed } from 'vue'
import faqIcon from './faq.webp'

export default {
  setup () {
    const { loading, loadingOn, loadingOff } = useLoading()
    loadingOn()
    const store = inject('store')
    store.faq.getFaq().then(() => loadingOff())
    const faq = computed(() => store.faq.faq)
    return { faq, loading, faqIcon }
  }
}
</script>
