export default class UserProfile {
  constructor (data) {
    this.email = data?.email ?? ''
    this.name = data?.name ?? null
    this.phone = data?.phone ?? null
    this.tariff = data?.tariff ?? null
    this.photo = data?.photo ?? null
  }
}
