import { memo, useEffect } from 'react'

import axios from 'axios'

// // hero slider
import OttHeroSlider from '@/components/slider/OttHeroSlider'

// // sections
import ContinueWatching from '@/components/sections/ContinueWatching'
import TopTenMoviesToWatch from '@/components/sections/TopTenMoviesToWatch'
import VerticalSectionSlider from '@/components/slider/VerticalSectionSlider'
import OnlyOnStreamit from '@/components/sections/OnlyOnStreamit'
import YourFavouritePersonality from '@/components/sections/YourFavouritePersonality'
import PopularMovies from '@/components/sections/PopularMovies'
import TabSlider from '@/components/sections/TabSlider'
import RecommendedForYou from '@/components/sections/RecommendedForYou'
import TopPicsForYou from '@/components/sections/TopPicsForYou'
import GenreSlider from '@/components/sections/GenreSlider'
import { Stream } from '@/types/streams'
import { ottVerticleLatestMovies } from '@/StaticData/data'
import { streams } from '@/service/api.service'
interface OTTProps {
  streams: Stream[]
}

export const getStaticProps = async () => {
  const { data } = await streams.get()

  if (!data.data) {
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
      <ContinueWatching />
      <TopTenMoviesToWatch />
      <OnlyOnStreamit />
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies} />
      <YourFavouritePersonality />
      <PopularMovies />
      <TabSlider />
      <GenreSlider />
      <RecommendedForYou />
      <TopPicsForYou />
    </>
  )
})

OTT.displayName = 'OTT'
export default OTT
