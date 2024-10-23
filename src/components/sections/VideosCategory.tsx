import { memo, useState, useEffect } from 'react'

//component
import SectionSlider from '../slider/SectionSlider'
import CardStyle from '../cards/CardStyle'

interface VideosCategoryProps {
  staticData: any
  header: string
}

interface OneMovie {
  id: number
  image: string
  slug: string
  title: string
  movieTime: string
  path: string
  category: string
  categorySlug: string
  created_at: string
}

const VideosCategory = memo(({ staticData, header }: VideosCategoryProps) => {
  const [videosCategory, setVideosCategory] = useState<OneMovie[]>(staticData)

    // Обновляем состояние при изменении staticData
    useEffect(() => {
      setVideosCategory(staticData)
    }, [staticData])

  return (
    <>
      <SectionSlider
        title={header}
        categorySlug={staticData[0].categorySlug}
        list={videosCategory}
        link='/videos/category/'
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
