'use client'

import React, { useEffect, useRef } from 'react'
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
  }
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<any>(null)

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
      />
    </div>
  )
}

export default VideoPlayer
