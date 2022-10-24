import React from "react";

import ColorPalette from "../../assets/color-palette.png";
import ColorPaletteMobile from "../../assets/color-palette-mobile.png";

import "./visualdesign.css";

const index = ({ heading, p1, p2 }) => {
  return (
    <div className="visualDesignSection">
      <h4 className="visualDesignHeading">{heading}</h4>
      <p className="visualDesignP1" id="color-chart">
        {p1}
      </p>
      <img src={ColorPalette} alt="Colors" className="desktopImage" />
      <img src={ColorPaletteMobile} alt="Colors" className="mobileImage" />
      <p className="visualDesignP2">{p2}</p>
    </div>
  );
};

export default index;
