//hero-slider
import VideoHeroSlider from "../../components/slider/VideoHeroSlider";

//constants
// import { streams } from '@/service/api.service'
import { sectionMainSliders1, sectionMainSliders2, sectionMainSliders3, sectionMainSliders4 } from '@/StaticData/data'

//types
// import { type Stream } from '@/types/streams'

//sections
import PopularVideos from "../../components/sections/PopularVideos";
import SpecialsLatestVideos from "../../components/sections/Specials&LatestVideos";
import VideosRecommendedForYou from "../../components/sections/VideosRecommendedForYou";
import OnlyOnfara from '@/components/sections/OnlyOnFara'

//custom hook
import { useEnterExit } from "@/utilities/usePage";

const VideosPage = () => {
  useEnterExit()
  return (
    <>
      <VideoHeroSlider />
      <OnlyOnfara
        staticData={sectionMainSliders1}
        header={'Category 1'}
      />
      <OnlyOnfara
        staticData={sectionMainSliders2}
        header={'Category 2'}
      />
      <OnlyOnfara
        staticData={sectionMainSliders3}
        header={'Category 3'}
      />
      <OnlyOnfara
        staticData={sectionMainSliders4}
        header={'Category 4'}
      />
      {/* <PopularVideos /> */}
      {/* <SpecialsLatestVideos /> */}
      {/* <VideosRecommendedForYou /> */}
    </>
  );
};

VideosPage.DisplayName = VideosPage;
export default VideosPage;
