import { memo, useRef } from 'react'

//react-bootstrap
import { Nav, Tab } from 'react-bootstrap'

//react-router-dom
// import { Link } from "react-router-dom";
import Link from 'next/link'

//static data
import { aboutSlider } from '@/StaticData/data'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

// Redux Selector / Action
import { useSelector } from 'react-redux'
import { theme_scheme_direction } from '@/store/setting/selectors'

const AboutSlider = memo(() => {
  const themeSchemeDirection = useSelector(theme_scheme_direction)
  const swiperRef = useRef<any>(null)
  return (
    <>
      <div className='tab-slider'>
        <div className='slider'>
          {/* <h2 style={{position: 'absolute'}}>Fara Ecosystem</h2> */}
          <Swiper
            ref={swiperRef}
            key={String(themeSchemeDirection)}
            dir={String(themeSchemeDirection)}
            watchSlidesProgress
            className='position-relative swiper swiper-card'
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            rewind={false}
            slidesPerView={1}
            modules={[Navigation]}
            style={{margin: '54px 0 0'}}
          >
            {aboutSlider.map((data) => (
              <SwiperSlide
                tag='li'
                className='tab-slider-banner'
                key={data.image + Math.random()}
              >
                <img
                  src={data.image}
                  alt='tab-slider-background'
                />
                <div className='tab-slider-banner-images'></div>
                <div className='block-images position-relative w-100'>
                  {/* <h1 className='mb-2 fw-500 text-capitalize texture-text font-size-18'>
                    {data.description}
                  </h1> */}
                </div>
              </SwiperSlide>
            ))}
            <div className='joint-arrows'>
              <div className='swiper-button swiper-button-next'></div>
              <div className='swiper-button swiper-button-prev'></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
})

AboutSlider.displayName = 'AboutSlider'
export default AboutSlider
