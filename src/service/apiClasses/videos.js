import axios from 'axios'

export class Videos {
  constructor(path) {
    this.path = path
  }

  // Получить всех видео
  get() {
    return axios.get(`${this.path}/v1/videos`, {
      headers: {
        Authorization: 'Bearer ' + process.env.BEARER_TOKEN,
      },
    })
  }
}
