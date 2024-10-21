import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

interface OnlyOnFara {
  staticData: any
  header: string
}

const OnlyOnfara = memo(({staticData, header}: OnlyOnFara) => {
  const [title] = useState("Only On fara");
  const [onlyonfara] = useState(staticData);
  return (
    <Fragment>
      <SectionSlider
        title={header}
        list={onlyonfara}
        className="fara-block"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            link={data.path}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

OnlyOnfara.displayName = "OnlyOnfara";
export default OnlyOnfara;
