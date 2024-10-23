import React, { Fragment, memo } from 'react'

//router
import Link from 'next/link'

//react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// data
import { geners } from '@/StaticData/data'

//components
import GenersCard from '@/components/cards/GanresCard'

//custom hooks
import { useBreadcrumb } from '@/utilities/usePage'

//types
import { type Videos } from '@/types/streams'

//services
import { videos } from '@/service/api.service'
interface AllStreamsProps {
  streams: Videos[]
}

export const getStaticProps = async () => {
  const { data } = await videos.get()
  if (data.error) {
    return {
      notFound: true,
    }
  }

  return {
    props: { streams: data.data }, // будет передано в компонент страницы как пропс
  }
}

const AllStreams = memo(({ streams }: AllStreamsProps) => {
  useBreadcrumb('View All streams', '../../assets/images/space-title.jpg')
  return (
    <>
      <section
        className='section-padding'
        style={{ overflow: 'hidden' }}
      >
        <Container fluid>
          <Row>
            <Col
              sm='12'
              className='my-4'
            >
              <div className='d-flex align-items-center justify-content-between'>
                <h5 className='main-title text-capitalize mb-0'>LiveTV</h5>
              </div>
            </Col>
          </Row>
          <Row
            xl='5'
            md='2'
            className='row-cols-1 geners-card geners-style-grid'
          >
            {streams.map((item, index) => (
              <Col
                key={index}
                className='slide-items'
              >
                <GenersCard
                  slug={item.id}
                  title={item.title}
                  image={item.poster.original}
                  type={item.type}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
})

AllStreams.displayName = 'AllStreams'
export default AllStreams
