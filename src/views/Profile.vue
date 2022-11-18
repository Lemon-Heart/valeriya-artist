<template lang="pug">
.cont
  UiFullScreenLoader(v-if="loading" mt)
  .profile(v-else)
    .profile__name {{ profile.name }}
    .profile__phone {{ profile.phone }}
    .profile__email {{ profile.email }}
</template>

<script>
import { inject, computed } from 'vue'
import { useLoading } from '@/composables/useLoading'

export default {
  setup () {
    const store = inject('store')
    const { loading, loadingOn, loadingOff } = useLoading()

    loadingOn()
    store.user.getProfile()
      .then(() => {
        loadingOff()
      })
    const profile = computed(() => store.user.profile)
    return { profile, loading }
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
