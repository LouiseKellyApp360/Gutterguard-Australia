import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

import "./gallery.css";

const index = () => {
  return (
    <div className="mainGallerySlider">
      <h4 className="galleryHeading">Gallery</h4>
      <p className="slider1Text">Tile roof collection</p>
      <Slider1 />
      <p className="slider2Text">Corrugated roof collection</p>
      <Slider2 />
    </div>
  );
};

export default index;
