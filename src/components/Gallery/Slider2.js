import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";

import Image02 from "../../assets/corrugated-roof-gallery/02.jpeg";
import Image03 from "../../assets/corrugated-roof-gallery/03.jpeg";
import Image04 from "../../assets/corrugated-roof-gallery/04.jpeg";
import Image05 from "../../assets/corrugated-roof-gallery/05.jpeg";
import Image06 from "../../assets/corrugated-roof-gallery/06.jpeg";
import Image07 from "../../assets/corrugated-roof-gallery/07.jpeg";
import Image08 from "../../assets/corrugated-roof-gallery/08.jpeg";

const Slider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const cards = width <= 425 ? 1 : 2;
  const guter =
    width <= 425
      ? 0
      : width >= 1024 && width <= 1280
      ? 10
      : width >= 1280 && width <= 1380
      ? 100
      : width >= 1380 && width <= 1440
      ? 140
      : 150;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={cards}
        gutter={guter}
        leftChevron={<img src={LeftArrow} alt="Left Arrow" />}
        rightChevron={<img src={RightArrow} alt="Right Arrow" />}
        outsideChevron
        infiniteLoop={true}
        activePosition={"center"}
        firstAndLastGutter={true}
        showSlither={true}
        chevronWidth={chevronWidth}
        className="imageSlider"
      >
        <img className="sliderImage" src={Image02} alt="tile roog gallert" />
        <img className="sliderImage" src={Image03} alt="tile roog gallert" />
        <img className="sliderImage" src={Image04} alt="tile roog gallert" />
        <img className="sliderImage" src={Image05} alt="tile roog gallert" />
        <img className="sliderImage" src={Image06} alt="tile roog gallert" />
        <img className="sliderImage" src={Image07} alt="tile roog gallert" />
        <img className="sliderImage" src={Image08} alt="tile roog gallert" />
      </ItemsCarousel>
    </div>
  );
};

export default Slider;
