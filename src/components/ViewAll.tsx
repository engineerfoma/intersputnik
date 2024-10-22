import { memo } from 'react'

//react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//components
import CardStyle from '@/components/cards/CardStyle'

//function
import { generateImgPath } from '@/StaticData/data'

//custom hook
import { useBreadcrumb } from '@/utilities/usePage'

interface CurrentObject {
  id: number
  image: string
  slug: string
  title: string
  movieTime: string
  path: string
  category: string
  created_at: string
  categorySlug: string
}

interface ParapmsProps {
  currentObj: CurrentObject[]
}

const ViewAll = memo(({ currentObj }: ParapmsProps) => {
  useBreadcrumb('View All in Category')

  return (
    <>
      <div className='section-padding-4'>
        <Container fluid>
          <div className='card-style-grid'>
            <Row className='row-cols-xl-4 row-cols-md-2 row-cols-1'>
              {currentObj.map((item, index) => (
                <Col
                  key={index}
                  className='mb-4'
                >
                  <CardStyle
                    image={item.image}
                    title={item.title}
                    movieTime={item.movieTime}
                    link={item.path}
                    slug={item.slug}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
})

ViewAll.displayName = 'ViewAll'
export default ViewAll
