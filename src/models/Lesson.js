export default class Lesson {
  constructor (data) {
    this.id = data?.id
    this.link = data?.link ?? null
    this.moduleId = data?.module_id ?? null
    this.name = data?.name ?? null
    this.video = data?.video ?? null
    this.available = data?.available ?? false
  }
}
