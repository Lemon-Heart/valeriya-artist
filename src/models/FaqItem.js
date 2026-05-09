export default class Lesson {
  constructor (data) {
    this.id = data?.id
    this.question = data?.question ?? null
    this.answer = data?.answer ?? null
  }
}
