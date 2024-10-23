import React, { memo, useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
//react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'
//components
import OtherStreams from '@/components/sections/OtherStreams'
const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
})

//utilities
import { useEnterExit } from '../utilities/usePage'

//types
import { type Videos } from '@/types/streams'

interface ParapmsProps {
  currentObj: Videos
  otherStreams: Videos[]
}

const StreamDetail = memo(({ currentObj, otherStreams }: ParapmsProps) => {
  const [singleObject, setSingleObject] = useState<Videos>(currentObj)

  useEnterExit()
  const videoJsOptions = useMemo(() => {
    return {
      controls: true,
      autoplay: false,
      playsinline: true,
      responsive: true,
      preload: 'auto',
      poster: singleObject.poster.original,
      sources: [
        {
          src: singleObject.hls_link,
        },
      ],
    }
  }, [singleObject])

  useEffect(() => {
    setSingleObject(currentObj)
  }, [currentObj])

  return (
    <>
      <div className='pt-0 site-video__container'>
        <VideoPlayer
          options={videoJsOptions}
          key={singleObject.poster.original}
        />
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
                      <h2 className='trending-text text-black text-uppercase my-0 fadeInLeft animated d-inline-block'>
                        {currentObj.title}
                      </h2>
                    </div>
                    <div className='d-flex flex-wrap align-items-center text-white text-detail flex-wrap mt-4 mb-4'>
                      <span className='badge bg-secondary'>FaraTV</span>
                      <span className='ms-3 font-Weight-500 genres-info me-2 text-primary'>
                        {currentObj.movieTime}
                      </span>
                      <span className='trending-year trending-year-list font-Weight-500 genres-info text-primary'>
                        {currentObj.created_at}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <p className='text-black'>
                {currentObj.description ||
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quia repellendus odit amet accusamus dignissimos rem quisquam
                dolores sequi quos! Consectetur deleniti voluptas praesentium
                error placeat natus odit dolorum laboriosam.`}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <OtherStreams
        staticData={otherStreams}
        header={'Other streams'}
      />
    </>
  )
})

StreamDetail.displayName = 'StreamDetail'
export default StreamDetail
