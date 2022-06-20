import { reactive } from 'vue'

// import { makeRequest } from '@/use/api'
// makeRequest.get('/mock/services.json').then(data => {
//   servicesBlock.head = data.head // Устанавливает заголовок в блоке анализов на главной странице
//   servicesBlock.subhead = data.subhead // Устанавливает подзаголовок в блоке анализов на главной странице
//   servicesBlock.items = data.items // Устанавливает список анализов
// })

export const servicesBlock = reactive({
  head: null,
  subhead: null,
  items: null
})
