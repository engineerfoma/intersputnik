import { memo } from 'react'

// // hero slider
import OttHeroSlider from '@/components/slider/OttHeroSlider'

// // sections
import LastVideo from '@/components/sections/LastVideo'
import TabSlider from '@/components/sections/TabSlider'
import { type Stream } from '@/types/streams'
import { streams } from '@/service/api.service'
import OnlyOnfara from '@/components/sections/OnlyOnFara'

//static data
import { sectionMainSliders1, sectionMainSliders2 } from '@/StaticData/data'

interface OTTProps {
  streams: Stream[]
}

export const getStaticProps = async () => {
  const { data } = await streams.get()

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
      <OnlyOnfara
        staticData={sectionMainSliders1}
        header={'Category 1'}
      />
      <OnlyOnfara
        staticData={sectionMainSliders2}
        header={'Category 2'}
      />
      <OnlyOnfara
        staticData={sectionMainSliders1}
        header={'Category 3'}
      />
      <OnlyOnfara
        staticData={sectionMainSliders2}
        header={'Category 4'}
      />
      {/* <TabSlider /> */}
      {/* <LastVideo videos={streams}/> */}
    </>
  )
})

OTT.displayName = 'OTT'
export default OTT
