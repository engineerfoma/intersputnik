import axios from 'axios'

export class Streams {
  constructor(path) {
    this.path = path
  }

  // Получить всех видео
  get() {
    return axios.get(`${this.path}`, {
      headers: {
        Authorization: 'Bearer a099891e-3f21-4bcc-b790-6f83444631e8',
      },
    })
  }
}
