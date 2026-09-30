<template lang="pug">
.course
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
  reviews-section
  .cont
    trust-section
    news-section
</template>

<script>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import MainSection from '@/components/Coursepage/MainSection'
import WishSection from '@/components/Coursepage/WishSection'
import LearnSection from '@/components/Coursepage/LearnSection'
import AboutSection from '@/components/Coursepage/AboutSection'
import TariffSection from '@/components/Coursepage/TariffSection'
import RequirementsSection from '@/components/Coursepage/RequirementsSection'
import AdvantageSection from '@/components/Coursepage/AdvantageSection'
import ResumeSection from '@/components/Coursepage/ResumeSection'
import PaintingSection from '@/components/Coursepage/PaintingSection'
import FaqSection from '@/components/Coursepage/FaqSection'
import TrustSection from '@/components/Coursepage/TrustSection'
import NewsSection from '@/components/Coursepage/NewsSection'
import ReviewsSection from '@/components/Coursepage/ReviewsSection'

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

    const scrollToFaq = (tag) => {
      nextTick(() => {
        const el = document.getElementById(tag)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }

    onMounted(() => {
      document.body.classList.add('course-page')
      if (route.hash === '#faq') {
        setTimeout(scrollToFaq('faq'), 500)
      }
      if (route.hash === '#reviews') {
        setTimeout(scrollToFaq('reviews'), 500)
      }
    })

    onBeforeUnmount(() => {
      document.body.classList.remove('course-page')
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
