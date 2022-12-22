<template lang="pug">
ui-base-loader(v-if="loading")
section.section4(v-else)
  h1
    ui-text-anim {{ modulesDescription.heading }}
  .aboutCourse
    .left
      .title {{ modulesDescription.subheading }}
      ul(v-if="modulesDescription.list.length")
        li(v-for="li in modulesDescription.list" :key="li.id")
          span {{ li.description }}
    .img
      img(v-if="modulesDescription.img" :src="modulesDescription.img")
    .right {{ modulesDescription.description }}
  ui-dropdown(
    v-for="(item, i) in modules"
    :key="i"
    :title="item.name"
    :icon="item.img"
    style="margin-top: 20px"
  )
    ul.list(v-if="item.lessons.length")
      li(v-for="lesson in item.lessons" :key="lesson.id")
        span(:class="{ altListHeading: lesson.description.length }") {{ lesson.name }}
        ul(v-if="lesson.description.length")
          li(v-for="(description, i) in lesson.description" :key="i")
            span {{ description }}
</template>

<script>
import ModulesController from '@/controllers/ModulesController'
import { useLoading } from '@/composables/useLoading'

export default {
  setup () {
    const { loading, loadingOn, loadingOff } = useLoading()
    loadingOn()
    const { modules, modulesDescription, getModules } = ModulesController()
    getModules().then(() => loadingOff())
    return { modules, modulesDescription, loading }
  }
}
</script>

<style lang="sass" scoped>
.section4
  display: flex
  flex-direction: column
  .aboutCourse
    display: flex
    grid-gap: 10*$u
    gap: 10*$u
    position: relative
    @media screen and (max-width: $XXLWidth)
      flex-direction: column-reverse
    @media screen and (max-width: $XXSWidth)
      gap: 5*$u
    .img
      position: absolute
      width: 400px
      left: 50%
      top: 50%
      transform: translate(-90%, -50%)
      @media screen and (max-width: $XXXLWidth)
        transform: translate(-85%, -50%)
        width: 300px
      @media screen and (max-width: $XXLWidth)
        width: 400px
        transform: translate(-10%, 0%)
        left: auto
        top: auto
        bottom: 0
        right: 0
      @media screen and (max-width: $padWidth)
        transform: translate(-10%, -10%)
        width: 300px
      @media screen and (max-width: $XSWidth)
        transform: translate(0%, -20%)
        width: 250px
      @media screen and (max-width: $XXSWidth)
        position: inherit
        transform: translate(0%)
        margin: auto
        left: auto
        top: auto
        bottom: auto
        right: auto
      img
        object-position: center
        object-fit: contain
        width: 100%
    .right
      flex: 5
      text-align: justify
      @include font('t18-demibold')
      @media screen and (max-width: $XXXLWidth)
        @include font('t16-demibold')
      @media screen and (max-width: $XXLWidth)
        flex: 1
      @media screen and (max-width: $XXSWidth)
        @include font('t15-regular')
    .left
      flex: 6
      @include font('t16-demibold')
      @media screen and (max-width: $XXLWidth)
        flex: 1
      @media screen and (max-width: $XXSWidth)
        @include font('t15-regular')
    .title
      margin-bottom: 4*$u
.list > li, .list > li > ul
  padding-top: 2*$u
  padding-bottom: 2*$u
.altListHeading
  @include font('t16-demibold')
  color: $firstColor
</style>
