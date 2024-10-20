import { memo, useState } from "react";

// Component
import SectionSlider from "../slider/SectionSlider";
import ContinueWatchCard from "../cards/ContinueWatchCard";

//types
import { Stream as Video } from '@/types/streams'

interface OttHeroSliderProps {
  videos: Video[]
}

const ContinueWatching = memo(({ videos }: OttHeroSliderProps) => {
  const [title] = useState("Last uploaded videos");

  return (
    <>
      <SectionSlider
        title={title}
        list={videos}
        className="continue-watching-block"
        slidesPerView={5}
      >
        {(data) => (
          <ContinueWatchCard
            imagePath={data.poster.original}
            duration={Math.round(data.duration)}
            progress={20}
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </>
  );
});

ContinueWatching.displayName = "ContinueWatching";
export default ContinueWatching;
