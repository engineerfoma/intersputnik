import React from 'react'

// Type
import { Videos } from '@/types/streams'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Thumbs } from 'swiper'

// next image
import Image from 'next/image'

// Redux Selector / Action
import { useSelector } from 'react-redux'
import { theme_scheme_direction } from '../../store/setting/selectors'

SwiperCore.use([Navigation, Thumbs])

interface OttHeroSliderProps {
  streams: Videos[]
  thumbsSwiper: any
}
const OttHeroSliderThumbs = ({ streams, thumbsSwiper }: OttHeroSliderProps) => {
  const themeSchemeDirection = useSelector(theme_scheme_direction)
  return (
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
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            direction='horizontal'
            navigation={{
              prevEl: '.slider-prev',
              nextEl: '.slider-next',
            }}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              0: {
                direction: 'horizontal',
                slidesPerView: 1,
              },
              768: {
                direction: 'horizontal',
                slidesPerView: 2,
                loop: false,
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
                      <h6 className='iq-title fw-500 mb-0 line-count-1 iq-title-max-width'>
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
  )
}

export default OttHeroSliderThumbs
