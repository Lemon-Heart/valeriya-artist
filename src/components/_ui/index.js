import UiSvgIcon from './UiSvgIcon'
import UiButton from './UiButton'
import UiObserver from './UiObserver'
import UiDropdown from './UiDropdown'
import UiTextAnim from './UiTextAnim'

export default function initializeUiKit (app) {
  app.component('UiSvgIcon', UiSvgIcon)
  app.component('UiButton', UiButton)
  app.component('UiObserver', UiObserver)
  app.component('UiDropdown', UiDropdown)
  app.component('UiTextAnim', UiTextAnim)
}
