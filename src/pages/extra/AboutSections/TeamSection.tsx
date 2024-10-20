import { Fragment, memo, useState } from 'react'

//react bootstrap
import { Col, Container, Row } from 'react-bootstrap'

//components
import ProfileCard from '../../../components/cards/ProfileCard'

//function
import { generateImgPath } from '../../../StaticData/data'

const TeamSection = memo(() => {
  const [lists] = useState([
    {
      title: 'Rewatch with context',
      description: `Ever had the experience of
                  rewatching a video and trying to
                  remember what was being
                  discussed at that moment?
                `,
      text: `Our unique technology allows
                  you to rewatch live translated
                  videos and see the exact points
                  where questions were asked or
                  comments were made.`,
    },
    {
      title: 'Collaborate',
      description: `Engage with content like never
                  before. Our interactive chat
                  feature allows you to participate
                  in live discussions, ask questions,
                  and make comments that are
                  linked to specific video
                  moments.
                `,
      text: `This creates a dynamic and
                  inclusive community around the
                  content you love.`,
    },
    {
      title: 'Customize',
      description: `FARA’s strength lies in its versatility.
                  From global conferences to live
                  tutorials, and even interactive
                  entertainment, our platform breaks
                  barriers. It's perfect for educators,
                  businesses, and creators.
                `,
      text: `FARA creates a more inclusive,
                  connected world, demonstrating
                  the transformative potential of live
                  streaming technology across
                  sectors.`,
    },
  ])
  return (
    <Fragment>
      <section>
        <Container
          style={{ backgroundImage: 'url(/assets/images/home-bg.png)', height: '850px' }}
        >
          <Row className='align-items-center section-padding-3'>
            <Col lg='3'></Col>
            <Col
              lg='6'
              md='12'
            >
              <div className='title-box text-center'>
                <h1>New era of communication</h1>
              </div>
            </Col>
            <Col lg='3'></Col>
          </Row>
          <Row className='about-us-detail justify-content-center'>
            {lists.map((data, index) => (
              <Col
                md='3'
                className='mb-4 team-section'
                key={index}
              >
                <ProfileCard
                  title={data.title}
                  description={data.description}
                  text={data.text}
                ></ProfileCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  )
})

TeamSection.displayName = 'TeamSection'
export default TeamSection
