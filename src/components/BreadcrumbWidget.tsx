import { memo } from 'react'

//react bootstrap
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap'

//react-redux
import { useSelector } from 'react-redux'
import { getBreadcrumb } from '@/store/fara/selectors'

//img
// const imagePath = generateImgPath("/assets/images/sputnik-title.jpg");

const BreadCrumbWidget = memo(() => {
  const breadcrumb = useSelector(getBreadcrumb)
  return (
    <>
      {breadcrumb.show ? (
        <div
          className='iq-breadcrumb'
          style={{ backgroundImage: `url(${breadcrumb.url})` }}
        >
          <Container fluid>
            <Row className='align-items-center'>
              <Col sm='12'>
                <nav className='text-center'>
                  <h2 className='title text-capitalize'>{breadcrumb.name}</h2>
                  <Breadcrumb
                    className='main-bg'
                    listProps={{
                      className: 'text-center justify-content-center',
                    }}
                  >
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{breadcrumb.name}</Breadcrumb.Item>
                  </Breadcrumb>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        ''
      )}
    </>
  )
})

BreadCrumbWidget.displayName = 'BreadCrumbWidget'
export default BreadCrumbWidget
