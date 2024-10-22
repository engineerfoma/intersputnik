interface Poster {
  "id": string
  "type": string
  "media_id": string
  "status": string
  "active": boolean
  "original": string
  "md": string
  "sm": string
  "xs": string
  "from_time": number
  "to_time": number
}

export interface Videos {
  id: string
  title: string
  subtitle: string
  description: string
  progress: number
  duration: number
  website: string
  poster: Poster
  hls_link: string
  [key: string]: any
}

interface Live {
  "id": string,
  "event_id": string,
  "status": string,
  "started_at": string,
  "finished_at": string | null
}

export interface Stream {
  id: string
  name: string
  subtitle: string
  description: string
  progress: number
  duration: number
  website: string
  poster: Poster
  play_link: string
  stream: Live
  [key: string]: any
}