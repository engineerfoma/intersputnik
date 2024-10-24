import React from 'react'

//react bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap'

//router
import Link from 'next/link'

//components
import Logo from '../../components/logo'

const Login = () => {
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
                lg='5'
                md='12'
                className='align-self-center'
              >
                <div className='user-login-card bg-body'>
                  <div className='text-center'>
                    <Logo imagePath={'/assets/images/logo.webp'} />
                  </div>
                  <Form action='post'>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-black fw-500 mb-2'>
                        Username or Email Address
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='rounded-0'
                        style={{ background: 'white', color: 'black' }}
                        required
                      />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-black fw-500 mb-2'>
                        PassWord
                      </Form.Label>
                      <Form.Control
                        type='password'
                        className='rounded-0'
                        style={{ background: 'white', color: 'black' }}
                        required
                      />
                    </Form.Group>
                    <Form.Group className='text-end mb-3'>
                      <Link
                        href='/auth/lost-password'
                        className='text-primary fw-semibold fst-italic'
                      >
                        Forgot Password?
                      </Link>
                    </Form.Group>
                    <div className='full-button'>
                      <div className='iq-button'>
                        <Link
                          href='/'
                          className='btn text-uppercase position-relative'
                        >
                          <span className='button-text'>log in</span>
                          <i className='fa-solid fa-play'></i>
                        </Link>
                      </div>
                    </div>
                  </Form>
                  <p className='my-4 text-center fw-500 text-black'>
                    New to fara?{' '}
                    <Link
                      href='/auth/sign-up'
                      className='text-primary ms-1'
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
}

Login.layout = 'Blank'
export default Login
