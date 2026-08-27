<template lang="pug">
section.about-section
  h1
    ui-text-anim Что тебя ждет...
  .about-section__block
    img.about-section__branch(src="/img/marathon/about-section/branch.PNG" alt="")
    .about-section__list
      .about-section__item(
        v-for="(item, i) in list"
        :key="i"
        v-observe
      )
        picture
          source(
            v-if="item.iconDesktop"
            :srcset="item.iconDesktop"
            media="(min-width: 1030px)"
          )
          img.about-section__icon(:src="item.icon" :alt="item.title")
        .about-section__title {{ item.title }}
        .about-section__description {{ item.description }}
        img.about-section__branch.about-section__branch_mobile(v-if="i === 4" src="/img/marathon/about-section/branch.PNG" alt="")
</template>

<script>
export default {
  setup () {
    const list = [
      {
        title: '30 дней',
        description: 'Каждый день одно новое воспоминание',
        icon: '/img/marathon/about-section/calendar.PNG',
        iconDesktop: '/img/marathon/about-section/calendar-max.PNG'
      },
      {
        title: 'Пошаговые уроки рисования',
        description: 'Видео с объяснениями и примерами',
        icon: '/img/marathon/about-section/play.PNG'
      },
      {
        title: 'Твоя история',
        description: 'Расскажи, что связано с этим воспоминанием',
        icon: '/img/marathon/about-section/pen.PNG'
      },
      {
        title: 'Поддержка и вдохновение',
        description: 'Теплая атмосфера и мотивация',
        icon: '/img/marathon/about-section/heart.PNG'
      },
      {
        title: 'Руководство в подарок',
        description: 'По созданию арт-дневника воспоминаний своими руками',
        icon: '/img/marathon/about-section/gift.PNG'
      }
    ]
    return { list }
  }
}
</script>

<style lang="sass" scoped>
.about-section
  &__block
    margin-top: 5*$u
    background-image: url('/public/img/marathon/about-section/bg.PNG')
    background-repeat: no-repeat
    background-position: center center
    background-size: contain
    display: flex
    align-items: center
    padding-right: 10*$u
    position: relative
    @media screen and (max-width: $XXLWidth)
      padding-right: 0
      background: none
  &__branch
    max-height: 78*$u
    height: calc(100vw / 4.4)
    transform: rotate(8deg) scale(1.2) translateY(-4%)
    margin-left: clamp(4*$u, 100vw / 25, 14*$u)
    filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, .5))
    @media screen and (max-width: $XXLWidth)
      display: none
      position: absolute
      bottom: 0
      right: 0
      transform: rotate(-10deg)
      max-height: none
      height: calc(100vw / 3)
    @media screen and (max-width: $XSWidth)
      height: calc(100vw / 2)
    &_mobile
      display: none
      @media screen and (max-width: $XXLWidth)
        display: block
  &__list
    display: grid
    gap: clamp(2*$u, calc(100vw / 70), 5*$u)
    grid-template-columns: repeat(5, 1fr)
    @media screen and (max-width: $XXLWidth)
      grid-template-columns: 1fr
      gap: 0
      width: 100%
  &__item
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    gap: clamp($u, calc(100vw / 87), 4*$u)
    color: $brown
    font-size: clamp($u, calc(100vw / 70), 4*$u)
    position: relative
    @media screen and (max-width: $XXLWidth)
      display: grid
      font-size: 5*$u
      gap: 5*$u 10*$u
      text-align: start
      background-repeat: no-repeat
      background-position: center center
      background-size: 100% 100%
      grid-template-columns: 20*$u 1fr
      padding: 15*$u
      transform: translateX(80%)
      opacity: 0
      transition: 1s

      $items: 5
      @for $i from 1 through $items
        &:nth-child(#{$i})
          background-image: url('/public/img/marathon/about-section/bg-mobile-#{$i}.PNG')

      &:not(:first-child)
        margin-top: -7%

      &.observe
        transform: translateX(0)
        opacity: 1

    @media screen and (max-width: $XSWidth)
      padding: calc(100vw / 10) calc(100vw / 20)
      gap: calc(100vw / 32) calc(100vw / 16)
      font-size: clamp($u, calc(100vw / 25), 5*$u)
      &:nth-child(n+4)
        padding-right: calc(100vw / 7)
    @media screen and (max-width: $mobileWidth)
      gap: calc(100vw / 32)

  &__title
    font-weight: bold

  picture
    grid-row: span 2

  &__icon
    max-height: 15*$u
    height: calc(100vw / 23)
    @media screen and (max-width: $XXLWidth)
      max-height: none
      height: 25*$u
      object-fit: contain
      width: 25*$u
      overflow: visible
    @media screen and (max-width: $XSWidth)
      height: calc(100vw / 6.5)
      width: calc(100vw / 6.5)
</style>
