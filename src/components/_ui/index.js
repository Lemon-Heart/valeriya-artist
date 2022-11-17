import UiSvgIcon from './UiSvgIcon'
import UiButton from './UiButton'
import UiDropdown from './UiDropdown'
import UiTextAnim from './UiTextAnim'
import UiInput from './UiInput'
import UiSelect from './UiSelect'
import UiFullScreenLoader from './UiFullScreenLoader'
import UiBaseLoader from './UiBaseLoader'

export default function initializeUiKit (app) {
  app.component('UiSvgIcon', UiSvgIcon)
  app.component('UiButton', UiButton)
  app.component('UiDropdown', UiDropdown)
  app.component('UiTextAnim', UiTextAnim)
  app.component('UiInput', UiInput)
  app.component('UiSelect', UiSelect)
  app.component('UiFullScreenLoader', UiFullScreenLoader)
  app.component('UiBaseLoader', UiBaseLoader)
}
