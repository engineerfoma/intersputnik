import { memo } from 'react'

//components
import TeamSection from './AboutSections/TeamSection'
import AboutSlider from './AboutSections/AboutSlider'

//custom hook

const AboutUs = memo(() => {
  return (
    <>
      <AboutSlider />
      <TeamSection />
    </>
  )
})

AboutUs.displayName = 'AboutUs'
export default AboutUs
