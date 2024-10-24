//hero-slider
import VideoHeroSlider from '../../components/slider/VideoHeroSlider'

//constants
// import { streams } from '@/service/api.service'
import {
  sectionMainSliders1,
  sectionMainSliders2,
  sectionMainSliders3,
  sectionMainSliders4,
} from '@/StaticData/data'

//types
// import { type Stream } from '@/types/streams'

//sections
import VideosCategory from '@/components/sections/VideosCategory'

//custom hook
import { useEnterExit } from '@/utilities/usePage'

const VideosPage = () => {
  useEnterExit()
  return (
    <>
      <VideoHeroSlider />
      <VideosCategory
        staticData={sectionMainSliders1}
        header={'Category 1'}
      />
      <VideosCategory
        staticData={sectionMainSliders2}
        header={'Category 2'}
      />
      <VideosCategory
        staticData={sectionMainSliders3}
        header={'Category 3'}
      />
      <VideosCategory
        staticData={sectionMainSliders4}
        header={'Category 4'}
      />
    </>
  )
}

VideosPage.DisplayName = VideosPage
export default VideosPage
