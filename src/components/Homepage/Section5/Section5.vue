<template lang="pug">
ui-base-loader(v-if="loading")
section.section5(v-else id="tariffs")
  Tariff(
    v-for="tariff in tariffs"
    :key="tariff.id"
    :alt="tariff.altDisplay"
    :name="tariff.name"
    :code="tariff.code"
    :text-top="tariff.textTop"
    :text-middle="tariff.textMiddle"
    :text-bottom="tariff.textBottom"
    :text-more="tariff.textMore"
    :price="tariff.price"
    :new-price="tariff.newPrice"
    @buy="buy(tariff.code)"
  )
</template>

<script>
import { inject } from 'vue'
import LoginAndAuthComponent from '@/components/Forms/LoginAndAuthComponent'
import { buyCourse } from '@/services/payment'
import { useRouter } from 'vue-router'
import TariffsController from '@/controllers/TariffsController'
import { useLoading } from '@/composables/useLoading'
import Tariff from './Tariff'

export default {
  components: { Tariff },
  setup () {
    const { loading, loadingOn, loadingOff } = useLoading()
    const { tariffs, getTariffs } = TariffsController()
    loadingOn()
    getTariffs().then(() => loadingOff())

    const router = useRouter()
    const store = inject('store')
    const buy = async (code) => {
      if (store.user.isAuth) {
        const data = new FormData()
        data.append('tariff', code)
        await buyCourse(data)
      } else {
        router.push({ query: { checkout: code } })
        store.modalQueue.push({
          key: 'LoginAndAuthComponent',
          component: LoginAndAuthComponent
        })
      }
    }
    return { buy, loading, tariffs }
  }
}
</script>

<style lang="sass" scoped>
.section5
  display: flex
  flex-direction: row
  flex-wrap: wrap
  margin-top: 50*$u
  grid-gap: 5*$u
  gap: 5*$u
  justify-content: center
  @media screen and (max-width: $XXLWidth)
    flex-direction: column
    align-items: center
  @media screen and (max-width: $XXSWidth)
    margin-top: 25*$u
</style>
