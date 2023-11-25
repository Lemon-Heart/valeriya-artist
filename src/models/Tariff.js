export default class Tariff {
  constructor (data) {
    this.id = data?.id
    this.name = data?.name ?? ''
    this.price = data?.price ?? ''
    this.newPrice = data?.new_price ?? ''
    this.altDisplay = data?.alt_display ?? false
    this.textTop = data?.text_top ?? ''
    this.textMiddle = data?.text_middle ?? ''
    this.textBottom = data?.text_bottom ?? ''
    this.textMore = data?.text_more ?? ''
    this.code = data?.code ?? ''
  }
}
