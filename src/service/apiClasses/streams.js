import axios from 'axios'

export class Streams {
  constructor(path) {
    this.path = path
  }

  // Получить всех видео
  get() {
    return axios.get(`${this.path}/v2/live/events`, {
      headers: {
        Authorization: 'Bearer ' + process.env.BEARER_TOKEN,
      },
    })
  }
}
