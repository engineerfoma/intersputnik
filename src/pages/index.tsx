import { memo } from 'react'
import VideoPlayer from '@/components/VideoPlayer'

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

import { ottVerticleLatestMovies } from '@/StaticData/data'

const OTT = memo(() => {
  const videoJsOptions = {
    controls: true,
    autoplay: false,
    preload: 'auto',
    sources: [
      {
        src: 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_1080p.mpd',
      },
    ],
    tracks: [],
  }
  return (
    <>
      {/* <VideoPlayer options={videoJsOptions} /> */}
      <OttHeroSlider />
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
