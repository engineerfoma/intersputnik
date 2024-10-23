import { memo, useState } from 'react'

//component
import SectionSlider from '../slider/SectionSlider'
import CardStyle from '../cards/CardStyle'

//types
import { type Videos } from '@/types/streams'

interface OtherStreamsProps {
  staticData: Videos[]
  header: string
}

const OtherStreams = memo(({ staticData, header }: OtherStreamsProps) => {
  const [otherStreams] = useState(staticData)
  return (
    <>
      <SectionSlider
        title={header}
        categorySlug={staticData[0].id}
        list={otherStreams}
        className='fara-block'
      >
        {(data) => (
          <CardStyle
            image={data.poster.original}
            title={data.title}
            movieTime='live'
            link='/streams'
            slug={data.id}
          />
        )}
      </SectionSlider>
    </>
  )
})

OtherStreams.displayName = 'OtherStreams'
export default OtherStreams
