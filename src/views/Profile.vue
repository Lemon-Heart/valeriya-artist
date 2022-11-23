<template lang="pug">
.cont
  UiFullScreenLoader(v-if="loading" mt)
  template(v-else)
    .profile
      .profile__name {{ profile.name }}
      .profile__phone {{ profile.phone }}
      .profile__email {{ profile.email }}
      .profile__tariff(v-if="profile.tariff") Действующий тариф: {{ profile.tariff }}
    .videos(v-for="course in courses" :key="course.id")
      .videos__head {{ course.name }}
      .videos__wrapper
        .videos__item(v-for="lesson in course.lessons" :key="lesson.id")
          .videos__name {{ lesson.name }}
          iframe(:src="`https://www.youtube.com/embed/${lesson.video}`" allowfullscreen)
          a.videos__link(:href="lesson.link" target="blank") Дополнительные материалы
</template>

<script>
import { inject, computed } from 'vue'
import { useLoading } from '@/composables/useLoading'

export default {
  setup () {
    const store = inject('store')
    const { loading, loadingOn, loadingOff } = useLoading()

    loadingOn()
    Promise.all([store.user.getProfile(), store.user.getCourses()])
      .then(() => {
        loadingOff()
      })
    const profile = computed(() => store.user.profile)
    const courses = computed(() => store.user.courses)

    return { profile, loading, courses }
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
  &__phone, &__email, &__tariff
    @include font('h2')
    @media screen and (max-width: $XSWidth)
      @include font('h3')
.videos
  background: $white
  padding: 10*$u
  border-radius: $BR
  color: $gray
  margin-top: 10*$u
  &__head
    @include font('h1')
    @media screen and (max-width: $XSWidth)
      @include font('h2')
  &__wrapper
    margin-top: 20px
    display: grid
    grid-template-columns: repeat( auto-fit, minmax(75*$u, 1fr))
    grid-auto-rows: 250px
    gap: 10*$u 7.5*$u
  &__item
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    iframe
      max-width: 95*$u
      border-radius: 20px
      width: 100%
      margin: 3*$u 0
      height: calc(100% - 30px)
  &__name
    @include font('h3')
    line-height: 100%
</style>
