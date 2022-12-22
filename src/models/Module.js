import Lesson from './Lesson'

export default class Module {
  constructor (data) {
    this.id = data?.id
    this.name = data?.name ?? null
    this.img = data?.img ?? null
    this.lessons = data?.lessons.map((o) => new Lesson(o)) || []
  }
}
