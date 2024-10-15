import { STREAM_URL } from '@/StaticData/path'

import { Streams } from './apiClasses/streams'

const streams = new Streams(STREAM_URL)

export { streams }
