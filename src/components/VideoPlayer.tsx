'use client'

import React, { useEffect, useRefё } from 'react'
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
  isActive?: number
  index?: number
  // color: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  options,
  isActive,
  index,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = React.useRef<videojs.Player | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        playerRef.current = videojs(videoRef.current!, options, () => {
        })
      }, 1000)
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
      }
    }
  }, [options])

  useEffect(() => {
    if (playerRef.current && isActive) {
      if (index === isActive) {
        playerRef.current.play()
      } else {
        playerRef.current.pause()
      }
    }
  }, [isActive])

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className='video-js vjs-default-skin vjs-big-play-centered'
        // className={`video-js vjs-default-skin ${color}`}
      />
    </div>
  )
}

export default VideoPlayer
