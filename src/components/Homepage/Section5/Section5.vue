<template lang="pug">
section.section5(id="tariffs")
  base-tariff(@buy="buy")
  standart-tariff(@buy="buy")
  premium-tariff(@buy="buy")
</template>

<script>
import BaseTariff from './Tariffs/Base'
import StandartTariff from './Tariffs/Standart'
import PremiumTariff from './Tariffs/Premium'
import { inject } from 'vue'
import LoginAndAuthComponent from '@/components/Forms/LoginAndAuthComponent'
import { buyCourse } from '@/services/payment'
import { useRouter } from 'vue-router'

export default {
  components: { BaseTariff, StandartTariff, PremiumTariff },
  setup () {
    const router = useRouter()
    const store = inject('store')
    const buy = async (tariffProps) => {
      if (store.user.isAuth) {
        const data = new FormData()
        data.append('tariff', tariffProps)
        await buyCourse(data)
      } else {
        router.push({ query: { checkout: tariffProps } })
        store.modalQueue.push({
          key: 'LoginAndAuthComponent',
          component: LoginAndAuthComponent
        })
      }
    }
    return { buy }
  }
}
</script>

<style lang="sass" scoped>
.section5
  display: flex
  flex-direction: row
  margin-top: 50*$u
  grid-gap: 5*$u
  gap: 5*$u
  @media screen and (max-width: $XXLWidth)
    flex-direction: column
    align-items: center
  @media screen and (max-width: $XXSWidth)
    margin-top: 25*$u
  &:deep
    .tariff
      position: relative
      flex: 1
      display: flex
      flex-direction: column
      padding: 10*$u 5*$u
      border: 1px solid $white
      border-radius: $BR
      box-shadow: 0 0 10px 10px $btnBGDarkHover
      height: fit-content
      &.middle
        box-shadow: 0 0 10px 10px $btnBGDarkHover
        border: none
        background: $BGOpacity
      &.base
        .tariff__body
          margin-bottom: 16.75*$u
      @media screen and (max-width: $XXLWidth)
        max-width: 100*$u
        margin-bottom: 20*$u
        width: 100%
      &__title
        display: flex
        flex-direction: column
        align-items: center
      &__body
        display: flex
        flex-direction: column
        margin-bottom: 10*$u
      &__footer
        display: flex
        flex-direction: column
        padding: 10*$u 0
        border-top: 1px solid $firstColor
      &__text
        @include font('t18-demibold')
        @media screen and (max-width: $padWidth)
          @include font('t16-medium')
        b
          text-transform: uppercase
          font-weight: bold
      &__priceWrapper
        display: flex
        flex-direction: column
        align-items: center
      &__oldPrice
        text-decoration: line-through
        @include font('h3')
        white-space: nowrap
        @media screen and (max-width: $padWidth)
          @include font('t18-demibold')
      &__button
        margin: 10*$u auto 0 auto
      &__icons
        display: flex
        grid-gap: 4*$u
        gap: 4*$u
        position: absolute
        align-items: center
        top: 0
        left: 50%
        transform: translate(-50%, -60%)
        img
          width: 15*$u
          height: 15*$u
          object-fit: contain
</style>
