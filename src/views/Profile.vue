<template lang="pug">
.cont
  UiFullScreenLoader(v-if="loading" mt)
  .profile(v-else)
    .profile__name {{ name }}
    .profile__phone {{ phone }}
    .profile__email {{ email }}
</template>

<script>
import { inject, computed } from 'vue'
import { useLoading } from '@/composables/useLoading'

export default {
  setup () {
    const store = inject('store')
    const { loading, loadingOn, loadingOff } = useLoading()

    loadingOn()
    store.user.getProfile().then(() => {
      loadingOff()
    })
    const name = computed(() => store.user.profile.name)
    const phone = computed(() => store.user.profile.phone)
    const email = computed(() => store.user.profile.email)
    return { name, phone, email, loading }
  }
}
</script>

<style lang="sass" scoped>
.profile
  background: $white
  padding: 10*$u
  border-radius: $BR
  color: $gray
  margin-top: 10*$u
  @media screen and (max-width: $XSWidth)
    padding: 5*$u
  &__name
    @include font('h1')
    @media screen and (max-width: $XSWidth)
      @include font('h2')
  &__phone, &__email
    @include font('h2')
    @media screen and (max-width: $XSWidth)
      @include font('h3')
</style>
