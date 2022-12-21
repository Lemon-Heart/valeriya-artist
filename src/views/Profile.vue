<template lang="pug">
.cont
  .wrapper(v-show="loading")
    UiFullScreenLoader
  .error(v-show="error") {{ error }}
  .profile(v-if="profile")
    .profile__info
      .profile__name(:class="{ border: isEdit }")
        ui-input(is-transparent :with-border="false" :is-disabled="!isEdit" v-model="profile.name" name="name")
      .profile__phone(:class="{ border: isEdit }")
        ui-input(is-transparent :with-border="false" :is-disabled="!isEdit" v-model="profile.phone" name="phone" phone-mask="+7 (000) 000-00-00")
      .profile__email(:class="{ border: isEdit }")
        ui-input(is-transparent :with-border="false" :is-disabled="!isEdit" v-model="profile.email" name="email")
      .profile__changeButtons
        ui-button(v-if="!isEdit" variant="dark" size="L" is-animated @click="isEdit = true") Редактировать
        ui-button(v-if="isEdit" variant="dark" size="L" is-animated @click="changeProfileInfo({ name: profile.name, phone: profile.phone, email: profile.email })") Применить
        ui-button(v-if="isEdit" is-animated size="L" @click="isEdit = false") Отменить
      .profile__tariff(v-if="profile.tariff") Тариф: {{ profile.tariff }}
    .profile__avatar
      .photo(v-if="profile.photo")
        img(:src="profile.photo")
        label.change
          ui-svg-icon(name="edit" :size="20")
          input(type="file" @change="changeProfileAvatar")
      label.add(v-else)
        input(type="file" @change="changeProfileAvatar")
  .videos(v-for="course in courses" :key="course.id")
    .videos__head {{ course.name }}
    .videos__wrapper
      course-video(v-for="lesson in course.lessons" :key="lesson.id" :name="lesson.name" :video="lesson.video" :link="lesson.link" :available="lesson.available")
</template>

<script>
import { inject, computed, ref } from 'vue'
import CourseVideo from '@/components/Profile/CourseVideo'

export default {
  components: { CourseVideo },
  setup () {
    const store = inject('store')
    const loading = computed(() => store.user.loading)

    Promise.all([store.user.getProfile(), store.user.getCourses()])

    const profile = computed(() => store.user.profile)
    const courses = computed(() => store.user.courses)
    const error = computed(() => store.user.errMess)

    const isEdit = ref(false)

    const changeProfileInfo = (payload) => store.user.changeProfileInfo(payload).then(() => (isEdit.value = false))

    const changeProfileAvatar = (e) => {
      const data = new FormData()
      data.append('file', e.target.files[0])
      store.user.changeProfileAvatar(data)
      e.target.value = ''
    }

    return { profile, loading, courses, isEdit, changeProfileInfo, changeProfileAvatar, error }
  }
}
</script>

<style lang="sass" scoped>
.error, .wrapper
  position: absolute
  right: 0
  left: 0
  bottom: 0
  top: 0
  background: rgba(0, 0, 0, .8)
  color: $firstColor
  @include font('h2')
  display: flex
  justify-content: center
  align-items: center
  z-index: 100
  text-align: center
.border
  border-bottom: 1px dashed $white!important
.profile
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  display: flex
  justify-content: space-between
  @media screen and (max-width: $XSWidth)
    padding: 5*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 5*$u
  &:deep
    .uiInputComponent
      @include font('h2')
      height: auto
  &__info
    display: flex
    flex-direction: column
    @media screen and (max-width: $XXSWidth)
      padding-right: 2*$u
  &__avatar
    display: flex
    justify-content: flex-end
    .photo
      width: 70*$u
      height: 70*$u
      position: relative
      @media screen and (max-width: $padWidth)
        width: 60*$u
        height: 60*$u
      @media screen and (max-width: 750px)
        width: 45*$u
        height: 45*$u
      @media screen and (max-width: $XXSWidth)
        width: 35*$u
        height: 35*$u
      @media screen and (max-width: 490px)
        width: 25*$u
        height: 25*$u
      .change
        padding: 2*$u
        background: $btnBGDark
        border-radius: 50%
        cursor: pointer
        position: absolute
        top: 0
        right: 0
      input
        display: none
      img
        border-radius: 50%
        width: 100%
        height: 100%
        overflow: hidden
        object-fit: cover
        object-position: center
    .add
      display: flex
      width: 70*$u
      height: 70*$u
      border-radius: 50%
      position: relative
      background: $socIconHover
      cursor: pointer
      transition: .2s
      @media screen and (max-width: $padWidth)
        width: 60*$u
        height: 60*$u
      @media screen and (max-width: 750px)
        width: 45*$u
        height: 45*$u
      @media screen and (max-width: $XXSWidth)
        width: 35*$u
        height: 35*$u
      @media screen and (max-width: 490px)
        width: 25*$u
        height: 25*$u
      &:hover
        opacity: .5
      &:before, &:after
        content: ''
        transition: .2s
        position: absolute
        width: 80%
        height: 2*$u
        background: $white
        top: 50%
        left: 50%
      &:before
        transform: translate(-50%, -50%)
      &:after
        transform: translate(-50%, -50%) rotate(90deg)
      input
        display: none
  &__name
    display: flex
    color: $firstColor
    border-bottom: 1px solid transparent
    @include font('h1')
    &:deep input
      color: $firstColor
      @include font('h1')
      @media screen and (max-width: $XSWidth)
        @include font('h2')
      @media screen and (max-width: $XXSWidth)
        @include font('h3')
  &__changeButtons
    margin: 3*$u 0 5*$u
    display: flex
    @media screen and (max-width: $XXSWidth)
      margin: $u 0
    > *:first-child
      margin-right: 2*$u
    &:deep button
      @media screen and (max-width: 500px)
        height: 10*$u!important
        .text
          font-size: 3.5*$u
      @media screen and (max-width: 450px)
        padding: 0 3*$u!important
  &__phone, &__email, &__tariff
    border-bottom: 1px solid transparent
    display: flex
    @include font('h2')
    @media screen and (max-width: $XSWidth)
      @include font('h3')
    @media screen and (max-width: 450px)
      font-size: 3.5*$u
    &:deep input
      color: $white
      @include font('h2')
      @media screen and (max-width: $XSWidth)
        @include font('h3')
      @media screen and (max-width: 450px)
        font-size: 3.5*$u
  &__tariff
    margin-top: auto
.videos
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  @media screen and (max-width: $XXSWidth)
    padding: 5*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 5*$u
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
