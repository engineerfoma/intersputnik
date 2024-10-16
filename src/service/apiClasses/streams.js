import axios from 'axios'

export class Streams {
  constructor(path) {
    this.path = path
  }

  // Получить всех видео
  get() {
    return axios.get(`${this.path}`, {
      headers: {
        Authorization: 'Bearer ' + process.env.BEARER_TOKEN,
      },
    })
  }
}
