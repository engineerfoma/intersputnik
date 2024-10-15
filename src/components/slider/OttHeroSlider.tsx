'use client'

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'

import VideoPlayer from '@/components/VideoPlayer.tsx'

// next link
import Link from 'next/link'

// next image
import Image from 'next/image'

// components
import CustomButton from '../CustomButton'

//static
import { mainSlider } from '@/StaticData/main-slider'
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
  const [color, setColor] = useState('')

  const handleClick = useCallback(() => {
    setColor(color === '' ? 'red-button' : '')
  }, [color])

  return (
    <>
      <div className='iq-banner-thumb-slider'>
        <div className='slider'>
          <div className='position-relative slider-bg d-flex justify-content-end'>
            <div className='position-relative my-auto'>
              <div
                className='horizontal_thumb_slider'
                data-swiper='slider-thumbs-ott'
              >
                <div className='banner-thumb-slider-nav'>
                  <Swiper
                    key={String(themeSchemeDirection)}
                    dir={String(themeSchemeDirection)}
                    tag='ul'
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    direction='horizontal'
                    navigation={{
                      prevEl: '.slider-prev',
                      nextEl: '.slider-next',
                    }}
                    spaceBetween={24}
                    loop={true}
                    slidesPerView={2}
                    breakpoints={{
                      0: {
                        direction: 'horizontal',
                        slidesPerView: 1,
                      },
                      768: {
                        direction: 'horizontal',
                        slidesPerView: 2,
                      },
                    }}
                    watchSlidesProgress={true}
                    className='swiper-horizontal swiper-container mb-0'
                  >
                    {streams.map((stream) => (
                      <SwiperSlide
                        className='swiper-bg'
                        key={stream.id}
                      >
                        <div className='block-images position-relative'>
                          <div className='img-box'>
                            <Image
                              src={stream.poster.original}
                              className='img-fluid'
                              alt={stream.title}
                              loading='lazy'
                              width={0}
                              height={0}
                              sizes='100vw'
                            />
                            <div className='block-description ps-3'>
                              <h6 className='iq-title fw-500 mb-0'>
                                {stream.title}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className='slider-prev swiper-button'>
                    <i className='iconly-Arrow-Left-2 icli'></i>
                  </div>
                  <div className='slider-next swiper-button'>
                    <i className='iconly-Arrow-Right-2 icli'></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='slider-images'
              data-swiper='slider-images-ott'
            >
              <Swiper
                key={String(themeSchemeDirection)}
                dir={String(themeSchemeDirection)}
                tag='ul'
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                watchSlidesProgress={true}
                allowTouchMove={false}
                loop={true}
                className='swiper-container'
              >
                {streams.map((stream, index) => {
                  const videoJsOptions = useMemo(() => {
                    return {
                      controls: true,
                      autoplay: true,
                      muted: true,
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
                          color={color}
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
                                <button onClick={handleClick}>Red color</button>
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
                              link='/movies/detail'
                              linkButton='false'
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default OttHeroSlider
