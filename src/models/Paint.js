export default class Paint {
  constructor (data) {
    this.id = data?.id
    this.price = data?.price ?? null
    this.name = data?.name ?? null
    this.materials = data?.materials ?? null
    this.size = data?.size ?? null
    this.recomendation = data?.recomendation ?? null
    this.description = data?.description ?? false
    this.images = data?.images ?? []
    this.delivery = data?.delivery ?? []
  }
}
