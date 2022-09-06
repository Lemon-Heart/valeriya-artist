<template lang="pug">
section.section5(id="tariffs")
  base-tariff
  standart-tariff
  premium-tariff
</template>

<script>
import BaseTariff from './Tariffs/Base'
import StandartTariff from './Tariffs/Standart'
import PremiumTariff from './Tariffs/Premium'

export default {
  components: { BaseTariff, StandartTariff, PremiumTariff },
  setup () {
    return {}
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
    &:deep(.tariff)
      margin-bottom: 20*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 25*$u
  h1
    color: $firstColor
    text-transform: uppercase
    text-align: center
    margin-bottom: 10*$u
    @include font('h1')
    @media screen and (max-width: $padWidth)
      @include font('h2')
    @media screen and (max-width: $mobileWidth)
      @include font('h3')
</style>
