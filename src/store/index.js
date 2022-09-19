import { reactive } from 'vue'
import ModalQueueController from '@/controllers/ModalQueueController'

const store = reactive({})

export default store

export function initStore () {
  store.modalQueue = ModalQueueController()
}
