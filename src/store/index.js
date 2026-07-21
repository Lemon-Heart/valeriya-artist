import { reactive } from 'vue'
import ModalQueueController from '@/controllers/ModalQueueController'
import UserController from '@/controllers/UserController'
import SideMenuController from '@/controllers/SideMenuController'
import CatalogController from '@/controllers/CatalogController'
import FaqController from '@/controllers/FaqController'
import ReviewController from '@/controllers/ReviewController'
import AuthController from '@/controllers/AuthController'

const store = reactive({})

export default store

export function initStore () {
  const auth = AuthController()
  store.auth = auth
  store.modalQueue = ModalQueueController()
  store.user = UserController(auth, store.modalQueue, store.sideMenu)
  store.sideMenu = SideMenuController()
  store.catalog = CatalogController()
  store.faq = FaqController()
  store.review = ReviewController(auth)
}
