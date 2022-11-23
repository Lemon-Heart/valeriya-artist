import { reactive } from 'vue'
import ModalQueueController from '@/controllers/ModalQueueController'
import UserController from '@/controllers/UserController'
import SideMenuController from '@/controllers/SideMenuController'

const store = reactive({})

export default store

export function initStore () {
  store.modalQueue = ModalQueueController()
  store.user = UserController()
  store.sideMenu = SideMenuController()
}
