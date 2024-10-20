import React, { useState, useMemo } from 'react'

import dynamic from 'next/dynamic'

import VideoPlayer from '@/components/VideoPlayer.tsx'

// next link
import Link from 'next/link'

// components
import CustomButton from '../CustomButton'
const OttHeroSliderThumbs = dynamic(() => import('./OttHeroSliderThumbs'), {
  ssr: false,
})
//static
import { Stream } from '@/types/streams'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs } from 'swiper'

SwiperCore.use([Navigation, Thumbs])

// Redux Selector / Action
import { useSelector } from 'react-redux'
import { theme_scheme_direction } from '../../store/setting/selectors'

interface OttHeroSliderProps {
  streams: Stream[]
}

const OttHeroSlider = ({ streams }: OttHeroSliderProps) => {
  const themeSchemeDirection = useSelector(theme_scheme_direction)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  // const [color, setColor] = useState('')

  // const handleClick = useCallback(() => {
  //   setColor(color === '' ? 'red-button' : '')
  // }, [color])

  return (
    <>
      <div className='iq-banner-thumb-slider'>
        <div className='slider'>
          <div className='position-relative slider-bg d-flex justify-content-end'>
            <OttHeroSliderThumbs
              streams={streams}
              setThumbsSwiper={setThumbsSwiper}
              thumbsSwiper={thumbsSwiper}
            />
            <div
              className='slider-images'
              data-swiper='slider-images-ott'
            >
              <Swiper
                key={String(themeSchemeDirection)}
                dir={String(themeSchemeDirection)}
                tag='ul'
                modules={[Navigation]}
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                watchSlidesProgress={true}
                allowTouchMove={false}
                loop={true}
                className='swiper-container'
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
              >
                {streams.map((stream, index) => {
                  const videoJsOptions = useMemo(() => {
                    return {
                      controls: false,
                      autoplay: true,
                      muted: true,
                      playsinline: true,
                      preload: 'auto',
                      sources: [
                        {
                          src: stream.hls_link,
                        },
                      ],
                      tracks: [],
                    }
                  }, [stream.hls_link])

                  return (
                    <SwiperSlide
                      className='p-0'
                      key={index}
                    >
                      <div className='slider--image block-images'>
                        <VideoPlayer
                          options={videoJsOptions}
                          // color={color}
                        />
                      </div>
                      <div className='description'>
                        <div className='row align-items-center h-100'>
                          <div className='col-lg-6 col-md-12'>
                            <div className='slider-content'>
                              <div className='d-flex align-items-center RightAnimate mb-3'>
                                <span className='badge rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3'>
                                  FARA TV
                                </span>
                                {/* <button onClick={handleClick}>Red color</button> */}
                              </div>
                              <h1 className='texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate-two'>
                                {stream.title || 'Title text'}
                              </h1>
                              <p className='line-count-3 RightAnimate-two'>
                                {stream.title || 'Description text'}
                              </p>
                            </div>
                            <CustomButton
                              buttonTitle='Stream Now '
                              link='/watchlist-detail'
                              linkButton='false'
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                {/* <div className='joint-arrows'>
                  <div className='swiper-button swiper-button-next'></div>
                  <div className='swiper-button swiper-button-prev'></div>
                </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default OttHeroSlider
