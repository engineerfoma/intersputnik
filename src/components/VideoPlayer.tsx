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
    sources: { src: string; type?: string }[]
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
  const videoRef = useRef<HTMLDivElement | null>(null)
  const playerRef = React.useRef<videojs.Player | null>(null)

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js')

      videoElement.classList.add('vjs-big-play-centered', 'vjs-default-skin')
      videoRef?.current?.appendChild(videoElement)

      const player = (playerRef.current = videojs(
        videoElement,
        options,
        () => {}
      ))
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef])

  useEffect(() => {
    if (playerRef.current && (isActive || isActive === 0)) {
      if (index === isActive) {
        playerRef.current.play()
      } else {
        playerRef.current.pause()
      }
    }
  }, [isActive])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <div
        className='site-video__container'
        ref={videoRef}
      ></div>
      {/* <video
        ref={videoRef}
        className='video-js vjs-default-skin vjs-big-play-centered'
        // className={`video-js vjs-default-skin ${color}`}
      /> */}
    </div>
  )
}

export default VideoPlayer
