import { Streams } from './apiClasses/streams'
import { Videos } from './apiClasses/videos'

const streams = new Streams(process.env.STREAM_URL)
const videos = new Videos(process.env.STREAM_URL)

export { streams, videos }
