import UiSvgIcon from './UiSvgIcon'
import UiButton from './UiButton'
import UiDropdown from './UiDropdown'
import UiTextAnim from './UiTextAnim'
import UiInput from './UiInput'
import UiSelect from './UiSelect'
import UiFullScreenLoader from './UiFullScreenLoader'
import UiBaseLoader from './UiBaseLoader'
import UiClose from './UiClose'
import UiLogo from './UiLogo'
import UiBurgerMenuIcon from './UiBurgerMenuIcon'
import UiZoomImg from './UiZoomImg'
import UiMessage from './UiMessage'
import UiPwa from './UiPwa'

export default function initializeUiKit (app) {
  app.component('UiSvgIcon', UiSvgIcon)
  app.component('UiButton', UiButton)
  app.component('UiDropdown', UiDropdown)
  app.component('UiTextAnim', UiTextAnim)
  app.component('UiInput', UiInput)
  app.component('UiSelect', UiSelect)
  app.component('UiFullScreenLoader', UiFullScreenLoader)
  app.component('UiBaseLoader', UiBaseLoader)
  app.component('UiClose', UiClose)
  app.component('UiLogo', UiLogo)
  app.component('UiBurgerMenuIcon', UiBurgerMenuIcon)
  app.component('UiZoomImg', UiZoomImg)
  app.component('UiMessage', UiMessage)
  app.component('UiPwa', UiPwa)
}
