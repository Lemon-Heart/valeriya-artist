import { reactive } from 'vue'
import ModalQueueController from '@/controllers/ModalQueueController'
import UserController from '@/controllers/UserController'
import SideMenuController from '@/controllers/SideMenuController'
import CatalogController from '@/controllers/CatalogController'

const store = reactive({})

export default store

export function initStore () {
  store.modalQueue = ModalQueueController()
  store.user = UserController()
  store.sideMenu = SideMenuController()
  store.catalog = CatalogController()
}
