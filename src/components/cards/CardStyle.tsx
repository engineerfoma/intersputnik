import { memo } from 'react'

//react-router-dom
import Link from 'next/link'

interface Props {
  link: string
  image: string
  title: string
  slug: string
  movieTime: string
}

const CardStyle = memo((props: Props) => {
  const path = `${props.link}/${props.slug}`
  return (
    <>
      <div className='iq-card card-hover'>
        <div className='block-images position-relative w-100'>
          <div className='img-box w-100'>
            <Link
              href={path}
              className='position-absolute top-0 bottom-0 start-0 end-0'
            ></Link>
            <img
              src={props.image}
              alt='movie-card'
              className='img-fluid object-cover w-100 d-block border-0'
            />
          </div>
          <div className='card-description with-transition'>
            <div className='cart-content'>
              <div className='content-left' style={{width: '100%'}}>
                <h5 className='iq-title text-capitalize text-truncate'>
                  <Link href={path}>{props.title}</Link>
                </h5>
                <div className='movie-time d-flex align-items-center my-2'>
                  <span className='movie-time-text font-normal'>
                    {props.movieTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='block-social-info align-items-center'>
            <div className='iq-button'>
              <Link
                href={path}
                tabIndex={0}
                className='video-open playbtn-slider'
              >
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='50px'
                  height='50px'
                  viewBox='0 0 213.7 213.7'
                  enableBackground='new 0 0 213.7 213.7'
                  xmlSpace='preserve'
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

CardStyle.displayName = 'CardStyle'
export default CardStyle
