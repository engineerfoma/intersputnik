import React, { memo, useRef, useMemo } from 'react'

//react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'

//components
import VideosCategory from '@/components/sections/VideosCategory'
import VideoPlayer from '@/components/VideoPlayer.tsx'

//statics
import { sectionMainSliders2 } from '@/StaticData/data'

//utilities
import { useEnterExit } from '../utilities/usePage'

interface oneMovie {
  id: number
  image: string
  slug: string
  title: string
  movieTime: string
  path: string
  category: string
  categorySlug: string
  created_at: string
}

interface ParapmsProps {
  currentObj: oneMovie
  otherVideo: oneMovie[]
}

const VideoDetail = memo(({ currentObj, otherVideo }: ParapmsProps) => {
  useEnterExit()
  const playerRef = useRef(null)

  const videoJsOptions = useMemo(() => {
    return {
      autoplay: false,
      controls: true,
      playsinline: true,
      responsive: true,
      techOrder: ['youtube'],
      sources: [
        {
          src: 'https://www.youtube.com/watch?v=co2a6UDHi0c',
          type: 'video/youtube',
        },
      ],
      youtube: { iv_load_policy: 1 },
    }
  }, [])
  const handlePlayerReady = (player: any) => {
    playerRef.current = player
  }

  return (
    <>
      <div className='pt-0 site-video__container'>
        <VideoPlayer
          options={videoJsOptions}
          // color={color}
        />
        {/* <VideoJS
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                /> */}
      </div>
      <div className='details-part'>
        <Container fluid>
          <Row>
            <Col lg='12'>
              <div className='trending-info mt-4 pt-0 pb-4'>
                <Row>
                  <Col
                    md='9'
                    className='mb-auto'
                  >
                    <div className='d-block d-lg-flex align-items-center'>
                      <h2 className='trending-text fw-bold text-black text-uppercase my-0 fadeInLeft animated d-inline-block'>
                        {currentObj.title}
                      </h2>
                    </div>
                    <div className='d-flex flex-wrap align-items-center text-white text-detail flex-wrap mt-4 mb-4'>
                      <span className='badge bg-secondary'>
                        {currentObj.category}
                      </span>
                      <span className='ms-3 font-Weight-500 genres-info me-2 text-primary'>
                        {currentObj.movieTime}{' '}
                      </span>
                      <span className='trending-year trending-year-list font-Weight-500 genres-info text-primary'>
                        {currentObj.created_at}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <p className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quia repellendus odit amet accusamus dignissimos rem quisquam
                dolores sequi quos! Consectetur deleniti voluptas praesentium
                error placeat natus odit dolorum laboriosam.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <VideosCategory
        staticData={otherVideo}
        header={'Other videos in category'}
      />
    </>
  )
})

VideoDetail.displayName = 'VideoDetail'
export default VideoDetail
