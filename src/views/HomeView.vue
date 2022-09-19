<template lang="pug">
.cont
  section-1
.roundedLine
.bg
  .cont
    section-2
.roundedLine.flipped
.cont
  section-3
  section-4
  section-5
  section-6
  section-7
  section-8
  section-9
  section-10
</template>

<script>
import Section1 from '@/components/Homepage/Section1/Section1'
import Section2 from '@/components/Homepage/Section2/Section2'
import Section3 from '@/components/Homepage/Section3/Section3'
import Section4 from '@/components/Homepage/Section4/Section4'
import Section5 from '@/components/Homepage/Section5/Section5'
import Section6 from '@/components/Homepage/Section6/Section6'
import Section7 from '@/components/Homepage/Section7/Section7'
import Section8 from '@/components/Homepage/Section8/Section8'
import Section9 from '@/components/Homepage/Section9/Section9'
import Section10 from '@/components/Homepage/Section10/Section10'

export default {
  components: { Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Section10 },
  setup () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.bg
  background: $BGOpacity
  position: relative
  &::before
    content: ''
    position: absolute
    background: $BGOpacity
    top: -7.5*$u
    width: 100%
    height: 7.5*$u
    @media screen and (max-width: $XXXLWidth)
      height: 10*$u
      top: -10*$u
.roundedLine
  width: 100%
  height: 30*$u
  background-image: url('/public/img/wave.svg')
  background-repeat: no-repeat
  background-position: top center
  background-size: 101%
  filter: drop-shadow(0 -22px 10px black)
  transform: translateY(-30px)
  position: relative
  opacity: .5
  @media screen and (max-width: $XXXLWidth)
    transform: translateY(-40px)
    height: 30*$u
  &.flipped
    transform: rotate(180deg)
    filter: drop-shadow(0 -22px 10px black)
  &::before
    content: ''
    position: absolute
    background: $BG
    bottom: 0
    width: 100%
    height: 70px
  @media screen and (max-width: $XXXLWidth)
    background-size: inherit
</style>
