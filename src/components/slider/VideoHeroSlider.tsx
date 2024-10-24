import React, { memo, useState } from 'react'

//react-bootstrap
import { Col, Row } from 'react-bootstrap'

// router
import Link from 'next/link'

//react fs-lightbox
import FsLightbox from 'fslightbox-react'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Redux Selector / Action
import { useSelector } from 'react-redux'
import { theme_scheme_direction } from '../../store/setting/selectors'

const VideoHeroSlider = memo(() => {
  const themeSchemeDirection = useSelector(theme_scheme_direction)
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <section className='banner-container'>
        <div className='movie-banner'>
          <div
            id='banner-detail-slider'
            className='banner-container'
          >
            <div className='movie-banner tvshows-slider'>
              <Swiper
                key={String(themeSchemeDirection)}
                dir={String(themeSchemeDirection)}
                navigation={{
                  prevEl: '.swiper-banner-button-prev',
                  nextEl: '.swiper-banner-button-next',
                }}
                slidesPerView={1.2}
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                className='swiper-banner-container'
              >
                <SwiperSlide>
                  <div className='movie-banner-image'>
                    <img
                      src='/assets/images/preloader.jpg'
                      alt='movie-banner-image'
                    />
                  </div>
                  <div className='shows-content h-100'>
                    <Row className=' align-items-center h-100'>
                      <Col
                        lg='7'
                        md='12'
                      >
                        <h1
                          className='texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two'
                          data-animation-in='fadeInLeft'
                          data-delay-in='0.6'
                        >
                          Video 1
                        </h1>
                        <div
                          className='flex-wrap align-items-center fadeInLeft animated'
                          data-animation-in='fadeInLeft'
                          style={{ opacity: 1 }}
                        >
                          <div className='d-flex flex-wrap align-items-center gap-3 movie-banner-time'>
                            <span className='badge bg-secondary p-2'>
                              FARA Intersputnik
                            </span>
                            <span className='font-size-6'>
                              <i className='fa-solid fa-circle'></i>
                            </span>
                            <span className='trending-time font-normal'>
                              {' '}
                              1hr : 44mins{' '}
                            </span>
                            <span className='font-size-6'>
                              <i className='fa-solid fa-circle'></i>
                            </span>
                            <span className='trending-year font-normal'>
                              {' '}
                              Feb 2018{' '}
                            </span>
                          </div>
                          <p
                            className='movie-banner-text line-count-3'
                            data-animation-in='fadeInUp'
                            data-delay-in='1.2'
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et, explicabo veniam ab distinctio adipisci
                            corrupti iure hic omnis tenetur unde! Esse
                            necessitatibus enim incidunt quisquam reiciendis in
                            expedita saepe beatae?
                          </p>
                        </div>
                        <div
                          className='iq-button'
                          data-animation-in='fadeInUp'
                          data-delay-in='1.2'
                        >
                          <Link
                            href='#'
                            className='btn text-uppercase position-relative'
                          >
                            <span className='button-text'>Play Now</span>
                            <i className='fa-solid fa-play'></i>
                          </Link>
                        </div>
                      </Col>
                      <Col
                        lg='5'
                        md='12'
                        className='trailor-video iq-slider d-none d-lg-block'
                      >
                        <Link
                          href='#'
                          className='video-open playbtn'
                          tabIndex={0}
                        >
                          <svg
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='80px'
                            height='80px'
                            viewBox='0 0 213.7 213.7'
                            enableBackground='new 0 0 213.7 213.7'
                            xmlSpace='preserve'
                            onClick={() => setToggler(!toggler)}
                          >
                            <polygon
                              className='triangle'
                              fill='none'
                              strokeWidth='7'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeMiterlimit='10'
                              points='73.5,62.5 148.5,105.8 73.5,149.1 '
                            ></polygon>
                            <circle
                              className='circle'
                              fill='none'
                              strokeWidth='7'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeMiterlimit='10'
                              cx='106.8'
                              cy='106.8'
                              r='103.3'
                            ></circle>
                          </svg>
                          <span
                            className='w-trailor text-uppercase'
                            onClick={() => setToggler(!toggler)}
                          >
                            Watch Trailer
                          </span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='movie-banner-image'>
                    <img
                      src='/assets/images/preloader-1.jpg'
                      alt='movie-banner-image'
                    />
                  </div>
                  <div className='shows-content h-100'>
                    <Row className=' align-items-center h-100'>
                      <Col
                        lg='7'
                        md='12'
                      >
                        <h1
                          className='texture-text big-font letter-spacing-1 line-count-1 text-uppercase RightAnimate-two'
                          data-animation-in='fadeInLeft'
                          data-delay-in='0.6'
                        >
                          Video 2
                        </h1>
                        <div
                          className='flex-wrap align-items-center fadeInLeft animated'
                          data-animation-in='fadeInLeft'
                          style={{ opacity: 1 }}
                        >
                          <div className='d-flex flex-wrap align-items-center gap-3 movie-banner-time'>
                            <span className='badge bg-secondary p-2'>
                              FARA Intersputnik
                            </span>
                            <span className='font-size-6'>
                              <i className='fa-solid fa-circle'></i>
                            </span>
                            <span className='trending-time font-normal'>
                              {' '}
                              1hr : 20mins{' '}
                            </span>
                            <span className='font-size-6'>
                              <i className='fa-solid fa-circle'></i>
                            </span>
                            <span className='trending-year font-normal'>
                              {' '}
                              Dec 2023{' '}
                            </span>
                          </div>
                          <p
                            className='movie-banner-text line-count-3'
                            data-animation-in='fadeInUp'
                            data-delay-in='1.2'
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et, explicabo veniam ab distinctio adipisci
                            corrupti iure hic omnis tenetur unde! Esse
                            necessitatibus enim incidunt quisquam reiciendis in
                            expedita saepe beatae?
                          </p>
                        </div>
                        <div
                          className='iq-button'
                          data-animation-in='fadeInUp'
                          data-delay-in='1.2'
                        >
                          <Link
                            href='#'
                            className='btn text-uppercase position-relative'
                          >
                            <span className='button-text'>Play Now</span>
                            <i className='fa-solid fa-play'></i>
                          </Link>
                        </div>
                      </Col>
                      <Col
                        lg='5'
                        md='12'
                        className='trailor-video iq-slider d-none d-lg-block'
                      >
                        <Link
                          href='#'
                          className='video-open playbtn'
                          tabIndex={0}
                        >
                          <svg
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            width='80px'
                            height='80px'
                            viewBox='0 0 213.7 213.7'
                            enableBackground='new 0 0 213.7 213.7'
                            xmlSpace='preserve'
                            onClick={() => setToggler(!toggler)}
                          >
                            <polygon
                              className='triangle'
                              fill='none'
                              strokeWidth='7'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeMiterlimit='10'
                              points='73.5,62.5 148.5,105.8 73.5,149.1 '
                            ></polygon>
                            <circle
                              className='circle'
                              fill='none'
                              strokeWidth='7'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeMiterlimit='10'
                              cx='106.8'
                              cy='106.8'
                              r='103.3'
                            ></circle>
                          </svg>
                          <span
                            className='w-trailor text-uppercase'
                            onClick={() => setToggler(!toggler)}
                          >
                            Watch Trailer
                          </span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
                <div className='swiper-banner-button-next'>
                  <i className='iconly-Arrow-Right-2 icli arrow-icon'></i>
                </div>
                <div className='swiper-banner-button-prev'>
                  <i className='iconly-Arrow-Left-2 icli arrow-icon'></i>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={['/assets/images/video/trailer.mp4']}
      />
    </>
  )
})

VideoHeroSlider.displayName = 'VideoHeroSlider'
export default VideoHeroSlider
