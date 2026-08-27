<template lang="pug">
.marathon-wrapper
  .cont
    .marathon
      main-section
      about-section
      why-section
      dont-worry-section
      imagine-section
      memory-section
  road-section
  .cont
    .marathon
      go-section
      agitation-section
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'
import MainSection from '@/components/Marathon/MainSection'
import AboutSection from '@/components/Marathon/AboutSection'
import WhySection from '@/components/Marathon/WhySection'
import DontWorrySection from '@/components/Marathon/DontWorrySection'
import ImagineSection from '@/components/Marathon/ImagineSection'
import MemorySection from '@/components/Marathon/MemorySection'
import RoadSection from '@/components/Marathon/RoadSection'
import GoSection from '@/components/Marathon/GoSection'
import AgitationSection from '@/components/Marathon/AgitationSection'

export default {
  components: {
    MainSection,
    AboutSection,
    WhySection,
    DontWorrySection,
    ImagineSection,
    MemorySection,
    RoadSection,
    GoSection,
    AgitationSection
  },
  setup () {
    onMounted(() => {
      document.body.classList.add('marathon-page')
    })
    onBeforeUnmount(() => {
      document.body.classList.remove('marathon-page')
    })
  }
}
</script>
