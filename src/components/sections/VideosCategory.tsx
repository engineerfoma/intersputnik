import { memo, useState } from 'react'

//component
import SectionSlider from '../slider/SectionSlider'
import CardStyle from '../cards/CardStyle'

interface VideosCategoryProps {
  staticData: any
  header: string
}

const VideosCategory = memo(({ staticData, header }: VideosCategoryProps) => {
  const [videosCategory] = useState(staticData)
  return (
    <>
      <SectionSlider
        title={header}
        categorySlug={staticData[0].categorySlug}
        list={videosCategory}
        className='fara-block'
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            link={data.path}
            slug={data.slug}
          />
        )}
      </SectionSlider>
    </>
  )
})

VideosCategory.displayName = 'VideosCategory'
export default VideosCategory
