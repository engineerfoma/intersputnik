import { memo } from 'react'

// Next-Link
import Link from 'next/link'

interface GenersCardProps {
  image?: any
  title?: string
  slug?: string
  type?: string
}

const GenersCard = memo((props: GenersCardProps) => {
  return (
    <>
      <div className='iq-card-geners card-hover-style-two'>
        <Link
          href={{
            pathname: '/streams/' + props.slug,
          }}
          className='block-images position-relative w-100'
        >
          <div className='img-box rounded position-relative'>
            <img
              src={props.image}
              alt='geners-img'
              className='img-fluid object-cover w-100 rounded'
            />
            <div className='blog-description'>
              <h6 className='mb-0 iq-title'>
                <p className='text-decoration-none text-beige text-capitalize line-count-2 p-2'>
                  {props.title}
                </p>
              </h6>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
})

GenersCard.displayName = 'GenersCard'
export default GenersCard
