import { reactive } from 'vue'
import ModalQueueController from '@/controllers/ModalQueueController'
import UserController from '@/controllers/UserController'

const store = reactive({})

export default store

export function initStore () {
  store.modalQueue = ModalQueueController()
  store.user = UserController()
}
