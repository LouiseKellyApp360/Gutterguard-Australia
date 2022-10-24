import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import ReviewStars from "../../assets/review-stars.svg";

const Slider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={0}
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
        <div className="reviewCard">
          <img src={ReviewStars} alt="Review Star" />
          <p className="review">
            As a contractor I am very impressed with gutter mesh directs
            product. It is easy to work with and the best quality I’ve found. No
            complaints. Highly recommended.
          </p>
          <p className="reviewGivenBy">– Tye Pollack, June 2022</p>
        </div>
        <div className="reviewCard">
          <img src={ReviewStars} alt="Review Star" />
          <p className="review">
            Greg did the most amazing job and was full of good advice when it
            comes to roofing. Will happily have him back to work on our place
            anytime
          </p>
          <p className="reviewGivenBy">– Mr21, July 2022</p>
        </div>
        <div className="reviewCard">
          <img src={ReviewStars} alt="Review Star" />
          <p className="review">
            Ever since we had the mesh installed there hasn't been any mould at
            all in my house. I highly recommend Gutterguard Australia
          </p>
          <p className="reviewGivenBy">- Lucia Wilcox , August 2022</p>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Slider;
