<template lang="pug">
section.road-section
  h1
    ui-text-anim Что получится через месяц?
  .road-section__block
    .road-section__item(v-for="(item, i) in list" :key="i")
      img.road-section__clip(
        v-if="[1, 4].includes(i)"
        :class="{ 'road-section__clip_left': i === 1 }"
        src="/img/marathon/road-section/clip.PNG"
      )
      img.road-section__img(:src="item.icon")
      .road-section__description {{item.description}}
  .road-section__subtitle
    ui-text-anim И почувствуешь, как в жизни становится больше тепла и радости
</template>

<script>
export default {
  setup () {
    const list = [
      {
        icon: '/img/marathon/road-section/boy.PNG',
        description: 'Ты снова вспомнишь себя маленьким'
      },
      {
        icon: '/img/marathon/road-section/book.PNG',
        description: 'Нарисуешь 30 счастливых воспоминаний'
      },
      {
        icon: '/img/marathon/road-section/people.PNG',
        description: 'Поговоришь с родными о важном'
      },
      {
        icon: '/img/marathon/road-section/box.png',
        description: 'Соберешь фотографии и давно забытые истории'
      },
      {
        icon: '/img/marathon/road-section/album.PNG',
        description: 'Создашь арт-дневник, который однажды будут листать твои дети и внуки'
      }
    ]
    return { list }
  }
}
</script>

<style lang="sass" scoped>
.road-section
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
    border: 2px dashed white
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
  &__description
    color: $firstColor
    @include font('t16-regular')
    @media screen and (max-width: $XSWidth)
      @include font('t14-regular')
  &__img
    width: 100%
    object-fit: contain
    height: 35*$u
    @media screen and (max-width: $XSWidth)
      height: 25*$u
  &__clip
    position: absolute
    top: -4.5*$u
    left: 10%
    height: 20*$u
    @media screen and (max-width: $XSWidth)
      height: 15*$u
      top: -3*$u
      left: 5%
    &_left
      left: 1%
  &__subtitle
    margin: 10*$u auto 0
    @include font('t18-finland')
    color: $firstColor
    text-align: center
    max-width: 180*$u
    @media screen and (max-width: $padWidth)
      @include font('t16-finland')
    @media screen and (max-width: $XXSWidth)
      @include font('t14-finland')
</style>
