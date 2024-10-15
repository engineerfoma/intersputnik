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

export interface Stream {
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