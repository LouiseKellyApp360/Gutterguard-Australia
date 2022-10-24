import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";

import Image01 from "../../assets/tile-roof-gallery/01.jpeg";
import Image02 from "../../assets/tile-roof-gallery/02.png";
import Image03 from "../../assets/tile-roof-gallery/03.jpeg";
import Image04 from "../../assets/tile-roof-gallery/04.jpeg";
import Image05 from "../../assets/tile-roof-gallery/05.jpeg";
import Image06 from "../../assets/tile-roof-gallery/06.jpeg";
import Image07 from "../../assets/tile-roof-gallery/07.jpeg";
import Image08 from "../../assets/tile-roof-gallery/08.jpeg";
import Image09 from "../../assets/tile-roof-gallery/09.jpeg";
import Image10 from "../../assets/tile-roof-gallery/10.jpeg";
import Image11 from "../../assets/tile-roof-gallery/11.jpeg";
import Image12 from "../../assets/tile-roof-gallery/12.jpeg";
import Image13 from "../../assets/tile-roof-gallery/13.jpeg";
import Image14 from "../../assets/tile-roof-gallery/14.jpeg";
import Image15 from "../../assets/tile-roof-gallery/15.jpeg";
import Image16 from "../../assets/tile-roof-gallery/16.jpeg";
import Image17 from "../../assets/tile-roof-gallery/17.jpeg";
import Image18 from "../../assets/tile-roof-gallery/18.jpeg";
import Image19 from "../../assets/tile-roof-gallery/19.jpeg";
import Image20 from "../../assets/tile-roof-gallery/20.jpeg";
import Image21 from "../../assets/tile-roof-gallery/21.jpeg";
import Image22 from "../../assets/tile-roof-gallery/22.jpeg";
import Image23 from "../../assets/tile-roof-gallery/23.jpeg";
import Image24 from "../../assets/tile-roof-gallery/24.jpeg";

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
        <img className="sliderImage" src={Image01} alt="tile roof gallert" />
        <img className="sliderImage" src={Image02} alt="tile roof gallert" />
        <img className="sliderImage" src={Image03} alt="tile roof gallert" />
        <img className="sliderImage" src={Image04} alt="tile roof gallert" />
        <img className="sliderImage" src={Image05} alt="tile roof gallert" />
        <img className="sliderImage" src={Image06} alt="tile roof gallert" />
        <img className="sliderImage" src={Image07} alt="tile roof gallert" />
        <img className="sliderImage" src={Image08} alt="tile roof gallert" />
        <img className="sliderImage" src={Image09} alt="tile roof gallert" />
        <img className="sliderImage" src={Image10} alt="tile roof gallert" />
        <img className="sliderImage" src={Image11} alt="tile roof gallert" />
        <img className="sliderImage" src={Image12} alt="tile roof gallert" />
        <img className="sliderImage" src={Image13} alt="tile roof gallert" />
        <img className="sliderImage" src={Image14} alt="tile roof gallert" />
        <img className="sliderImage" src={Image15} alt="tile roof gallert" />
        <img className="sliderImage" src={Image16} alt="tile roof gallert" />
        <img className="sliderImage" src={Image17} alt="tile roof gallert" />
        <img className="sliderImage" src={Image18} alt="tile roof gallert" />
        <img className="sliderImage" src={Image19} alt="tile roof gallert" />
        <img className="sliderImage" src={Image20} alt="tile roof gallert" />
        <img className="sliderImage" src={Image21} alt="tile roof gallert" />
        <img className="sliderImage" src={Image22} alt="tile roof gallert" />
        <img className="sliderImage" src={Image23} alt="tile roof gallert" />
        <img className="sliderImage" src={Image24} alt="tile roof gallert" />
      </ItemsCarousel>
    </div>
  );
};

export default Slider;
