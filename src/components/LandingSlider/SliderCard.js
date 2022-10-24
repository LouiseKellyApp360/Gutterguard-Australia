import React from "react";

import "./slider-card.css";

const SliderCard = ({ image, heading }) => {
  return (
    <div className="imageCards">
      <div>
        <img src={image} className="landingSliderImage" alt="Project" />
      </div>
      <div>
        <h4 className="sliderCardHeading">{heading}</h4>
      </div>
    </div>
  );
};

export default SliderCard;
