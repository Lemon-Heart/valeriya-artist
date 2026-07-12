<template lang="pug">
.cont
  main-section
.roundedLine
.bg
  .cont
    wish-section
.roundedLine.flipped
.cont
  learn-section
  about-section
  tariff-section
  requirements-section
  advantage-section
  resume-section
  painting-section
  faq-section
  trust-section
  news-section
  reviews-section
</template>

<script>
import { onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import MainSection from '@/components/Homepage/MainSection'
import WishSection from '@/components/Homepage/WishSection'
import LearnSection from '@/components/Homepage/LearnSection'
import AboutSection from '@/components/Homepage/AboutSection'
import TariffSection from '@/components/Homepage/TariffSection'
import RequirementsSection from '@/components/Homepage/RequirementsSection'
import AdvantageSection from '@/components/Homepage/AdvantageSection'
import ResumeSection from '@/components/Homepage/ResumeSection'
import PaintingSection from '@/components/Homepage/PaintingSection'
import FaqSection from '@/components/Homepage/FaqSection'
import TrustSection from '@/components/Homepage/TrustSection'
import NewsSection from '@/components/Homepage/NewsSection'
import ReviewsSection from '@/components/Homepage/ReviewsSection'

export default {
  components: {
    MainSection,
    WishSection,
    LearnSection,
    AboutSection,
    TariffSection,
    RequirementsSection,
    AdvantageSection,
    ResumeSection,
    PaintingSection,
    FaqSection,
    TrustSection,
    NewsSection,
    ReviewsSection
  },
  setup () {
    const route = useRoute()

    const scrollToFaq = () => {
      nextTick(() => {
        const faqElement = document.getElementById('faq')
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }

    onMounted(() => {
      if (route.hash === '#faq') {
        setTimeout(scrollToFaq, 500)
      }
    })

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
