import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

const OnlyOnfara = memo(() => {
  const [title] = useState("Only On fara");
  const [onlyonfara] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={onlyonfara}
        className="fara-block"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/play-list"
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

OnlyOnfara.displayName = "OnlyOnfara";
export default OnlyOnfara;
