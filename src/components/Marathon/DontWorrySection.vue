<template lang="pug">
section.dont-worry-section
  h1
    ui-text-anim Не переживай, если...
  .dont-worry-section__block
    .dont-worry-section__item(v-for="(item, i) in list" :key="i")
      img.dont-worry-section__clip(
        v-if="[0, 3].includes(i)"
        :class="{ 'dont-worry-section__clip_vertical': i === 0 }"
        src="/img/marathon/dont-worry-section/clip.PNG"
      )
      img.dont-worry-section__img(:src="item.icon")
      .dont-worry-section__title {{item.title}}
      .dont-worry-section__divider
      .dont-worry-section__description {{item.description}}
</template>

<script>
export default {
  setup () {
    const list = [
      {
        icon: '/img/marathon/dont-worry-section/girl.PNG',
        title: 'ты никогда не рисовал',
        description: 'Я покажу каждый шаг. Получится у каждого!'
      },
      {
        icon: '/img/marathon/dont-worry-section/question.PNG',
        title: 'не знаешь, что написать',
        description: 'Для каждого скетча будут вопросы'
      },
      {
        icon: '/img/marathon/dont-worry-section/heart.PNG',
        title: 'боишься, что не получится',
        description: 'Здесь нет оценок и правил. Это твой мир'
      },
      {
        icon: '/img/marathon/dont-worry-section/clock.PNG',
        title: 'нет времени',
        description: 'На выполнение каждого скетча тебе понадобится 15 мин'
      },
      {
        icon: '/img/marathon/dont-worry-section/pens.PNG',
        title: 'нет нужных материалов',
        description: 'Подойдет то, что есть под рукой'
      }
    ]
    return { list }
  }
}
</script>

<style lang="sass" scoped>
.dont-worry-section
  &__block
    display: flex
    gap: 5*$u
    margin-top: 10*$u
    flex-wrap: wrap
    @media screen and (max-width: $XSWidth)
      gap: 2*$u
  &__item
    position: relative
    padding: 10*$u 5*$u
    border-radius: 4*$u
    border: 2px dashed $firstColor
    display: grid
    gap: 5*$u
    align-items: center
    text-align: center
    flex: 1
    min-width: 50*$u
    @media screen and (max-width: $XSWidth)
      padding: 8*$u 5*$u
    @media screen and (max-width: $XXSWidth)
      padding: 8*$u 3*$u 4*$u
      min-width: 40*$u
  &__title
    @include font('t16-finland')
    color: $firstColor
    @media screen and (max-width: $XSWidth)
      @include font('t14-finland')
  &__description
    @include font('t16-regular')
    @media screen and (max-width: $XSWidth)
      @include font('t14-regular')
  &__divider
    border-bottom: 2px dashed $firstColor
    margin: auto
    width: 80%
  &__img
    width: 100%
    object-fit: contain
    height: 35*$u
    filter: contrast(0)
    @media screen and (max-width: $XSWidth)
      height: 25*$u
  &__clip
    position: absolute
    top: -5*$u
    left: 10%
    height: 20*$u
    @media screen and (max-width: $XSWidth)
      height: 15*$u
      top: -3*$u
      left: 5%
    &_vertical
      transform: rotate(10deg)
</style>
