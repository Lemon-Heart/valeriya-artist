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

    .profile__menu
      .profile__menuDots(@click="toggleMenu")
        svg.profile__dotsIcon(width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
          circle(cx="5" cy="12" r="2.5" fill="white")
          circle(cx="12" cy="12" r="2.5" fill="white")
          circle(cx="19" cy="12" r="2.5" fill="white")
      .profile__menuDropdown(v-if="menuOpen" @click.stop)
        .profile__menuItem(v-if="!isEdit" @click="startEdit")
          ui-svg-icon(name="edit" :size="18")
          span Редактировать
        .profile__menuItem(v-if="isEdit" @click="applyChanges")
          ui-svg-icon(name="check" :size="18")
          span Применить
        .profile__menuItem(v-if="isEdit" @click="cancelEdit")
          ui-svg-icon(name="close" :size="18")
          span Отменить
        .profile__menuItem.profile__menuItem--exit(v-if="store.auth.isAuth" @click="handleLogout")
          ui-svg-icon(name="exit" :size="18")
          span Выход

  .profile-empty(v-else-if="!loading && !error")
    p Профиль не найден

  .tabs(v-if="showTabs")
    .tabs__list
      .tabs__item(
        v-for="tab in tabs"
        :key="tab.key"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      ) {{ tab.label }}

  template(v-if="activeTab === 'courses' && courses && courses.length")
    ReviewsCta.review-form(
      text="Уже прошел обучение? Мне будет приятно, если ты напишешь пару слов для обратной связи и поделишься результатом - загрузи фото своей работы до и после прохождения курса."
    )

    .videos(v-for="course in courses" :key="course.id")
      .videos__head {{ course.name }}
      .videos__wrapper
        course-video(
          v-for="lesson in course.lessons"
          :key="lesson.id"
          :name="lesson.name"
          :video="lesson.video"
          :link="lesson.link"
          :available="lesson.available"
          :preview="lesson.preview"
        )

  template(v-if="(activeTab === 'marathon' || !hasCourses) && marathon && marathon.length")
    ReviewsCta.review-form(
      source="marathon"
      text="Уже прошел марафон? Поделись, как это было? И покажи свой самый лучший скетч или страницу из твоего арт-дневника."
    )
    .videos
      .videos__head Марафон
      .videos__wrapper.videos__wrapper_marathon
        course-video(
          v-for="lesson in marathon"
          vertical
          :key="lesson.id"
          :name="lesson.name"
          :video="lesson.video"
          :link="lesson.link"
          :available="lesson.available"
          :preview="lesson.preview"
        )

  .empty-content(v-if="!hasContent && !loading")
    p У вас пока нет доступа к материалам
</template>

<script>
import { inject, computed, ref, onMounted, onUnmounted, watch } from 'vue'
import CourseVideo from '@/components/Profile/CourseVideo'
import ReviewsCta from '@/components/Reviews/ReviewsCta'

export default {
  components: {
    CourseVideo,
    ReviewsCta
  },
  setup () {
    const store = inject('store')
    const loading = computed(() => store.user.loading)

    Promise.all([store.user.getProfile(), store.user.getCourses(), store.user.getMarathon()])

    const profile = computed(() => store.user.profile)
    const user = computed(() => store.user)
    const courses = computed(() => store.user.courses)
    const marathon = computed(() => store.user.marathon)
    const error = computed(() => store.user.errMess)

    const isEdit = ref(false)
    const menuOpen = ref(false)
    const activeTab = ref('courses')

    const hasCourses = computed(() => courses.value && courses.value.length > 0)
    const hasMarathon = computed(() => marathon.value && marathon.value.length > 0)
    const hasContent = computed(() => hasCourses.value || hasMarathon.value)

    const showTabs = computed(() => hasCourses.value && hasMarathon.value)

    const tabs = computed(() => {
      const result = []
      if (hasCourses.value) {
        result.push({ key: 'courses', label: 'Модули' })
      }
      if (hasMarathon.value) {
        result.push({ key: 'marathon', label: 'Марафон' })
      }
      return result
    })

    const setDefaultTab = () => {
      if (tabs.value.length > 0) {
        activeTab.value = tabs.value[0].key
      }
    }

    watch([hasCourses, hasMarathon], () => {
      setDefaultTab()
    })

    const toggleMenu = (e) => {
      e.stopPropagation()
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    const startEdit = () => {
      isEdit.value = true
      closeMenu()
    }

    const applyChanges = () => {
      changeProfileInfo({ name: profile.value.name, phone: profile.value.phone, email: profile.value.email })
      closeMenu()
    }

    const cancelEdit = () => {
      isEdit.value = false
      closeMenu()
    }

    const changeProfileInfo = (payload) => store.user.changeProfileInfo(payload).then(() => (isEdit.value = false))

    const changeProfileAvatar = (e) => {
      const data = new FormData()
      data.append('file', e.target.files[0])
      store.user.changeProfileAvatar(data)
      e.target.value = ''
    }

    const handleLogout = () => {
      closeMenu()
      user.value.logout()
    }

    const handleClickOutside = (e) => {
      const menu = document.querySelector('.profile__menu')
      if (menu && !menu.contains(e.target)) {
        closeMenu()
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
      setDefaultTab()
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      profile,
      loading,
      courses,
      marathon,
      isEdit,
      changeProfileInfo,
      changeProfileAvatar,
      error,
      user,
      store,
      menuOpen,
      toggleMenu,
      startEdit,
      applyChanges,
      cancelEdit,
      handleLogout,
      closeMenu,
      activeTab,
      tabs,
      showTabs,
      hasContent,
      hasCourses,
      hasMarathon
    }
  }
}
</script>

<style lang="sass" scoped>
.error, .wrapper
  position: fixed
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

.profile-empty
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  text-align: center
  @include font('h2')

.empty-content
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  text-align: center
  @include font('h2')

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
  position: relative
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
    flex: 1
    @media screen and (max-width: $XXSWidth)
      padding-right: 2*$u

  &__avatar
    display: flex
    justify-content: flex-end
    margin-left: 4*$u
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
      background-color: $socIconHover
      background-image: url('/public/img/user.svg')
      background-position: center
      background-size: 50%
      background-repeat: no-repeat
      cursor: pointer
      transition: .2s
      &::after
        content: '+'
        position: absolute
        bottom: 0
        left: 0
        width: 15*$u
        height: 15*$u
        background: $headerBG
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center
        color: $white
        font-size: 30px
        font-weight: bold
        line-height: 1
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)
        @media screen and (max-width: $padWidth)
          width: 12*$u
          height: 12*$u
        @media screen and (max-width: 750px)
          width: 10*$u
          height: 10*$u
        @media screen and (max-width: $XXSWidth)
          width: 8*$u
          height: 8*$u
        @media screen and (max-width: 490px)
          width: 6*$u
          height: 6*$u
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

  &__menu
    position: absolute
    top: 2*$u
    right: 2*$u
    @media screen and (max-width: $XXSWidth)
      top: $u
      right: $u

  &__menuDots
    cursor: pointer
    padding: 0.5*$u
    border-radius: 50%
    transition: background-color 0.2s
    display: flex
    align-items: center
    justify-content: center
    &:hover
      background-color: rgba(255, 255, 255, 0.1)

  &__dotsIcon
    display: block

  &__menuDropdown
    position: absolute
    top: calc(100% + 0.5*$u)
    right: 0
    background: $headerBG
    border-radius: $BR
    padding: 0.5*$u 0
    min-width: 25*$u
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3)
    z-index: 10
    animation: fadeIn 0.2s ease

  &__menuItem
    padding: 1.5*$u 3*$u
    color: $white
    cursor: pointer
    @include font('t16-regular')
    transition: background-color 0.2s
    white-space: nowrap
    display: flex
    align-items: center
    gap: 1.5*$u
    &:hover
      background-color: rgba(255, 255, 255, 0.1)
    &--exit
      color: #ff6b6b
      &:hover
        background-color: rgba(255, 107, 107, 0.15)
    &:deep svg
      flex-shrink: 0

@keyframes fadeIn
  from
    opacity: 0
    transform: translateY(-10px)
  to
    opacity: 1
    transform: translateY(0)

// Стили для табов
.tabs
  margin-top: 10*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 5*$u

  &__list
    display: flex
    gap: 2*$u
    border-bottom: 1px solid rgba(255, 255, 255, 0.1)
    padding-bottom: 0.5*$u

  &__item
    padding: 1.5*$u 4*$u
    color: rgba(255, 255, 255, 0.6)
    cursor: pointer
    @include font('h2')
    transition: all 0.3s ease
    border-bottom: 2px solid transparent
    margin-bottom: -0.5*$u

    &:hover
      color: rgba(255, 255, 255, 0.8)

    &.active
      color: $firstColor
      border-bottom-color: $firstColor

    @media screen and (max-width: $XSWidth)
      @include font('h3')
      padding: 1*$u 2*$u

    @media screen and (max-width: 450px)
      font-size: 3.5*$u
      padding: 0.5*$u 1.5*$u

// Блок для марафона
.marathon-block
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  @media screen and (max-width: $XXSWidth)
    padding: 5*$u
    margin-top: 5*$u

  &__title
    color: $firstColor
    @include font('h1')
    @media screen and (max-width: $XSWidth)
      @include font('h2')

  &__description
    margin-top: 2*$u
    @include font('t16-regular')
    @media screen and (max-width: $XSWidth)
      @include font('t14-regular')

// Если нужен отдельный компонент для отзывов марафона
.marathon-review-form
  margin-top: 10*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 5*$u

.review-form
  margin-top: 10*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 5*$u

.videos
  background: $BGOpacity
  padding: 10*$u
  border-radius: $BR
  color: $white
  margin-top: 10*$u
  @media screen and (max-width: $padWidth)
    padding: 5*$u
    margin-top: 5*$u
  &__head
    color: $firstColor
    @include font('h1')
    @media screen and (max-width: $padWidth)
      @include font('h2')
    @media screen and (max-width: $mobileWidth)
      @include font('h3')
  &__wrapper
    margin-top: 20px
    display: grid
    grid-template-columns: repeat( auto-fit, minmax(75*$u, 1fr))
    gap: 10*$u
    &_marathon
      gap: 10*$u 5*$u
      grid-template-columns: repeat(auto-fit, minmax(49*$u, 1fr))
      @media screen and (max-width: $XXXLWidth)
        grid-template-columns: repeat(auto-fit, minmax(calc(100vw / 7.5), 1fr))
      @media screen and (max-width: $XXLWidth)
        grid-template-columns: repeat(auto-fit, minmax(calc(100vw / 6), 1fr))
      @media screen and (max-width: $XXSWidth)
        gap: 6*$u 2.5*$u
        grid-template-columns: repeat(3, 1fr)
</style>
