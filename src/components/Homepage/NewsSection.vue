<template lang="pug">
section.news-section
  h1
    ui-text-anim Следи за последними новостями
  .grid
    soc-block(
      v-for="(item, i) in soc"
      :key="i"
      :title="item.title"
      :icon="item.icon"
      :link="item.link"
    )
  .note * Признаны экстремистскими организациями и запрещены на территории РФ
</template>

<script>
import SocBlock from '@/components/SocBlock'

export default {
  components: { SocBlock },
  setup () {
    const soc = [
      {
        icon: 'vk',
        title: 'ВКонтакте',
        link: 'https://vk.ru/shatova_art'
      },
      {
        icon: 'tg',
        title: 'Telegram*',
        link: 'https://t.me/shatova_art'
      },
      {
        icon: 'inst',
        title: 'Instagram*',
        link: 'https://www.instagram.com/valeriya.shatova'
      },
      {
        icon: 'youtube',
        title: 'YouTube',
        link: 'https://youtube.com/@valeriya_artist'
      }
    ]
    return { soc }
  }
}
</script>

<style lang="sass" scoped>
.news-section
  margin-top: 40*$u
  display: flex
  flex-direction: column
  @media screen and (max-width: $mobileWidth)
    margin-top: 25*$u
  .note
    margin-top: 5*$u
    text-align: center
  .grid
    margin-top: 5*$u
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 5*$u
    @media screen and (max-width: $XXLWidth)
      grid-gap: 12*$u
      grid-template-columns: repeat(2, 1fr)
    @media screen and (max-width: $XXSWidth)
      grid-gap: 10*$u 5*$u
    @media screen and (max-width: $mobileWidth)
      grid-template-columns: 1fr
</style>
