import { memo } from 'react'

// // hero slider
import OttHeroSlider from '@/components/slider/OttHeroSlider'

// // sections
import LastVideo from '@/components/sections/LastVideo'
import TabSlider from '@/components/sections/TabSlider'
import { type Stream } from '@/types/streams'
import { streams } from '@/service/api.service'

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
      <TabSlider />
      <LastVideo videos={streams}/>
    </>
  )
})

OTT.displayName = 'OTT'
export default OTT
