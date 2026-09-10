<template lang="pug">
.marathon-wrapper
  .cont
    .marathon
      main-section(@buy="buyMarathon")
      about-section
      why-section
      dont-worry-section
      imagine-section
      memory-section(@buy="buyMarathon")
  road-section
  .cont
    .marathon
      go-section(@buy="buyMarathon")
  video-section
  .cont
    .marathon
      agitation-section(@buy="buyMarathon")
</template>

<script>
import { onMounted, onBeforeUnmount, inject } from 'vue'
import { useRouter } from 'vue-router'
import { buyMarathon as buyMarathonRequest } from '@/services/payment'
import LoginAndAuthComponent from '@/components/Forms/LoginAndAuthComponent'
import MainSection from '@/components/Marathon/MainSection'
import AboutSection from '@/components/Marathon/AboutSection'
import WhySection from '@/components/Marathon/WhySection'
import DontWorrySection from '@/components/Marathon/DontWorrySection'
import ImagineSection from '@/components/Marathon/ImagineSection'
import MemorySection from '@/components/Marathon/MemorySection'
import RoadSection from '@/components/Marathon/RoadSection'
import GoSection from '@/components/Marathon/GoSection'
import AgitationSection from '@/components/Marathon/AgitationSection'
import VideoSection from '@/components/Marathon/VideoSection'

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
    VideoSection,
    AgitationSection
  },
  setup () {
    const router = useRouter()
    const store = inject('store')

    const buyMarathon = async () => {
      if (store.auth.isAuth) {
        await buyMarathonRequest()
      } else {
        router.push({ query: { checkout: 'marathon' } })
        store.modalQueue.push({
          key: 'LoginAndAuthComponent',
          component: LoginAndAuthComponent
        })
      }
    }

    onMounted(() => {
      document.body.classList.add('marathon-page')
    })
    onBeforeUnmount(() => {
      document.body.classList.remove('marathon-page')
    })

    return { buyMarathon }
  }
}
</script>
