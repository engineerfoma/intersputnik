import { memo, useState, useEffect } from 'react'

import Link from 'next/link'

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// components
import Logo from '../logo'

const FooterMega = memo(() => {
  const [animationClass, setAnimationClass] = useState('animate__fadeIn')
  // const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass('animate__fadeIn')
    } else {
      setAnimationClass('animate__fadeOut')
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // useEffect(() => {
  //   scrollToTop();
  // }, [location.pathname]);
  return (
    <>
      <footer className='footer footer-default'>
        <Container fluid>
          <div className='footer-top'>
            <Row className='justify-content-between'>
              <Col
                xl={3}
                lg={6}
                className='mb-5 mb-lg-0'
              >
                <div className='footer-logo'>
                  <Logo imagePath={'/assets/images/logo.svg'}></Logo>
                </div>
                <p className='mb-4 font-size-14'>
                  Email us: <span className='text-white'>fara@fara.com</span>
                </p>
                <p className='text-uppercase letter-spacing-1 font-size-14 mb-1'>
                  customer services
                </p>
                <p className='mb-0 contact text-white'>+ (777) 555-4444</p>
              </Col>
              <Col
                xl={2}
                lg={6}
                className='mb-5 mb-lg-0'
              >
                <h4 className='footer-link-title'>Navigation Links</h4>
                <ul className='list-unstyled footer-menu'>
                  <li className='mb-3'>
                    <Link
                      href='/'
                      className='ms-3'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='mb-3'>
                    <Link
                      href='/streams'
                      className='ms-3'
                    >
                      LiveTV
                    </Link>
                  </li>
                  <li className='mb-3'>
                    <Link
                      href='/videos'
                      className='ms-3'
                    >
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/extra/about-us'
                      className='ms-3'
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col
                xl={3}
                lg={6}
              >
                <h4 className='footer-link-title'>Subscribe Newsletter</h4>
                <div className='mailchimp mailchimp-dark'>
                  <div className='input-group mb-3 mt-4'>
                    <input
                      type='text'
                      className='form-control mb-0 font-size-14'
                      placeholder='Email*'
                      aria-describedby='button-addon2'
                    />
                    <div className='iq-button'>
                      <button
                        type='submit'
                        className='btn btn-sm'
                        id='button-addon2'
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
      <div
        id='back-to-top'
        style={{ display: 'none' }}
        className={`animate__animated ${animationClass}`}
        onClick={scrollToTop}
      >
        <Link
          className='p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle'
          id='top'
          href='#top'
        >
          <i className='fa-solid fa-chevron-up'></i>
        </Link>
      </div>
    </>
  )
})
FooterMega.displayName = 'FooterMega'
export default FooterMega
