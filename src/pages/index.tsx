import { memo } from 'react'

// // hero slider
import OttHeroSlider from '@/components/slider/OttHeroSlider'

// // sections
import { type Videos } from '@/types/streams'
import { videos } from '@/service/api.service'
import VideosCategory from '@/components/sections/VideosCategory'

//static data
import {
  sectionMainSliders1,
  sectionMainSliders2,
  sectionMainSliders3,
  sectionMainSliders4,
} from '@/StaticData/data'

interface OTTProps {
  streams: Videos[]
}

export const getStaticProps = async () => {
  const { data } = await videos.get()
  if (data.error) {
    return {
      notFound: true,
    }
  }

  return {
    props: { streams: data.data }, // будет передано в компонент страницы как пропс
  }
}

const OTT = memo(({ streams }: OTTProps) => {
  return (
    <>
      <OttHeroSlider streams={streams} />
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
})

OTT.displayName = 'OTT'
export default OTT
