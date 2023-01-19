export class Movie {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private duration: string,
    private release: string
  ) { }

  getId() {
    return this.id
  }

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description
  }

  getDuration() {
    return this.duration
  }

  getRelease(){
    return this.release
  }

  setId(newId: string) {
    this.id = newId
  }

  setName(newTitle: string) {
    this.title = newTitle
  }

  setEmail(newDescription: string) {
    this.description = newDescription
  }

  setPassword(newDuration: string) {
    this.duration = newDuration
  }

  setYear_of_release(newRelease: string) {
    this.release = newRelease
  }

}
