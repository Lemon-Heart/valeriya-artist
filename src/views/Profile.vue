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
        course-video(v-for="lesson in course.lessons" :key="lesson.id" :name="lesson.name" :video="lesson.video" :link="lesson.link")
</template>

<script>
import { inject, computed } from 'vue'
import { useLoading } from '@/composables/useLoading'
import CourseVideo from '@/components/Profile/CourseVideo'

export default {
  components: { CourseVideo },
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

    const insertFrame = () => {

    }

    return { profile, loading, courses, insertFrame }
  }
}
</script>

<style lang="sass" scoped>
.profile
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  @media screen and (max-width: $XSWidth)
    padding: 5*$u
  &__name
    color: $firstColor
    @include font('h1')
    @media screen and (max-width: $XSWidth)
      @include font('h2')
  &__phone, &__email, &__tariff
    @include font('h2')
    @media screen and (max-width: $XSWidth)
      @include font('h3')
.videos
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  @media screen and (max-width: $XXSWidth)
    padding: 5*$u
  &__head
    color: $firstColor
    @include font('h1')
    @media screen and (max-width: $XSWidth)
      @include font('h2')
  &__wrapper
    margin-top: 20px
    display: grid
    grid-template-columns: repeat( auto-fit, minmax(75*$u, 1fr))
    gap: 10*$u 7.5*$u
</style>
