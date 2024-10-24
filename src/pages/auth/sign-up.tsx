import React from 'react'

//react-bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap'

//router
import Link from 'next/link'

const SignUp = () => {
  return (
    <>
      <main className='main-content'>
        <div
          className='vh-100'
          style={{
            backgroundImage: 'url(/assets/images/home-bg.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          <Container>
            <Row className='justify-content-center align-items-center height-self-center vh-100'>
              <Col
                lg='8'
                md='12'
                className='align-self-center'
              >
                <div className='user-login-card bg-body'>
                  <h4 className='text-center mb-5'>Create Your Account</h4>
                  <Row
                    lg='2'
                    className='row-cols-1 g-2 g-lg-5'
                  >
                    <Col>
                      <Form.Label className='text-black fw-500 mb-2'>
                        First Name
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='rounded-0'
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className='text-black fw-500 mb-2'>
                        Last Name
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='rounded-0'
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className='text-black fw-500 mb-2'>
                        Username *
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='rounded-0'
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className='text-black fw-500 mb-2'>
                        Email *
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='rounded-0'
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className='text-black fw-500 mb-2'>
                        Password *
                      </Form.Label>
                      <Form.Control
                        type='password'
                        className='rounded-0'
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className='text-black fw-500 mb-2'>
                        Confirm Password *
                      </Form.Label>
                      <Form.Control
                        type='password'
                        className='rounded-0'
                        required
                      />
                    </Col>
                  </Row>
                  <Row className='text-center mt-5'>
                    <Col lg='3'></Col>
                    <Col lg='6'>
                      <div className='full-button'>
                        <div className='iq-button'>
                          <Link
                            href='#'
                            className='btn text-uppercase position-relative'
                          >
                            <span className='button-text'>Sign Up</span>
                            <i className='fa-solid fa-play'></i>
                          </Link>
                        </div>
                        <p className='mt-2 mb-0 fw-normal text-black'>
                          Already have an account?
                          <Link
                            href='/auth/login'
                            className='ms-1'
                          >
                            Login
                          </Link>
                        </p>
                      </div>
                    </Col>
                    <Col lg='3'></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
}

SignUp.layout = 'Blank'
export default SignUp
