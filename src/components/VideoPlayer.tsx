'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls' // Подключение HLS
import 'videojs-youtube' // Подключение YouTube


interface VideoPlayerProps {
  options: {
    autoplay: boolean
    controls: boolean
    sources?: { src: string; type?: string }[]
    youtube?: { iv_load_policy: number } // Опции для YouTube
    [key: string]: any
  }
  // color: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = React.useRef<videojs.Player | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        playerRef.current = videojs(videoRef.current!, options, () => {
          console.log('Player is ready')
        })
      }, 1000)
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
      }
    }
  }, [options])

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className='video-js vjs-default-skin'
        // className={`video-js vjs-default-skin ${color}`}
      />
    </div>
  )
}

export default VideoPlayer
