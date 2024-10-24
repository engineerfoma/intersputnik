import React from 'react'

//react bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// next link
import Link from 'next/link'

const ErrorPage1 = () => {
  return (
    <>
      <div className='section-padding vh-100'>
        <Container className=''>
          <Row className='h-100 align-items-center'>
            <Col lg='2'></Col>
            <Col lg='8'>
              <h1 className='not-found'>404</h1>
              <div className='py-3 text-center mt-5 mb-4'>
                <h4 className='fw-semibold mb-0'>Oops! something went wrong</h4>
              </div>
              <p
                className='text-center'
                style={{ color: '#010610' }}
              >
                We’re sorry, it looks like the page you’re looking for isn’t in
                our system
              </p>
              <div className='text-center mt-4 pt-3'>
                <div className='iq-button'>
                  <Link
                    href='/'
                    className='btn text-uppercase position-relative'
                  >
                    <span className='button-text'>Back to home</span>
                    <i className='fa-solid fa-play'></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg='2'></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

ErrorPage1.layout = 'Blank'
export default ErrorPage1
