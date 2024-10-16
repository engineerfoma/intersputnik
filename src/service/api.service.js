import { Streams } from './apiClasses/streams'

const streams = new Streams(process.env.STREAM_URL)

export { streams }
