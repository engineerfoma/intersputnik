import { memo, useState, useEffect } from 'react'

// react-bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap'

//router
import Link from 'next/link'
import { useRouter } from 'next/router'

// components
import Logo from '../logo'

const HeaderDefault = memo(() => {
  const [isMega, setIsMega] = useState(true)
  const location = useRouter()

  const [show1, setShow1] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector('.header-sticky')
      if (headerSticky) {
        if (window.scrollY > 1) {
          headerSticky.classList.add('sticky')
        } else {
          headerSticky.classList.remove('sticky')
        }
      }
    }

    const updateIsMega = () => {
      setIsMega(location.asPath === '/')
    }

    window.addEventListener('scroll', handleScroll)
    updateIsMega()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])
  return (
    <>
      <header className='header-center-home header-default header-sticky'>
        <Navbar
          expand='xl'
          className='nav navbar-light iq-navbar header-hover-menu py-xl-0'
        >
          <Container
            fluid
            className='navbar-inner'
          >
            <div className='d-flex align-items-center justify-content-between w-100 landing-header'>
              <div className='d-flex gap-3 gap-xl-0 align-items-center'>
                <Logo imagePath={'/assets/images/logo.webp'}></Logo>
              </div>
              <Navbar
                expand='xl'
                className='nav py-xl-0 mega-menu-content'
                id='navbar_main'
              >
                <Container
                  fluid
                  className='container-fluid p-lg-0'
                >
                  <ul
                    className='navbar-nav iq-nav-menu list-unstyled'
                    id='header-menu'
                  >
                    <Nav.Item as='li'>
                      <Link
                        href='/'
                        className={`nav-link ${
                          location.asPath === '/' ? 'active' : ''
                        }`}
                      >
                        <span className='item-name'>Home</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                      <Link
                        href='/streams'
                        className={`nav-link ${
                          location.asPath.split('/').includes('streams')
                            ? 'active'
                            : ''
                        }`}
                      >
                        <span className='item-name'>LiveTV</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                      <Link
                        href='/videos'
                        className={`nav-link ${
                          location.asPath.split('/').includes('videos')
                            ? 'active'
                            : ''
                        }`}
                      >
                        <span className='item-name'>Videos</span>
                      </Link>
                    </Nav.Item>
                    <Nav.Item as='li'>
                      <Link
                        href='/extra/about-us'
                        className={`nav-link ${
                          location.asPath.split('/').includes('about-us')
                            ? 'active'
                            : ''
                        }`}
                      >
                        <span className='item-name'>About</span>
                      </Link>
                    </Nav.Item>
                  </ul>
                </Container>
              </Navbar>
              {/* <div className='right-panel'> */}
              {/* <Link href='/auth/login'>
                  <span className='item-name'>Log in</span>
                </Link> */}
              {/* </div> */}
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  )
})

HeaderDefault.displayName = 'HeaderDefault'
export default HeaderDefault
