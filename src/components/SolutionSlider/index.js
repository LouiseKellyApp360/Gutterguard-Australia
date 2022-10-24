import Slider from "./Slider";

import "./solution-gallery.css";

const index = () => {
  return (
    <div className="mainGallerySlider">
      <h4 className="galleryHeading">Matching your roof design and colour</h4>
      <p className="slider1Text">
        Talk to our advisors about the right combination of mesh and accessories
        for your individual roof
      </p>
      <Slider />
      <p className="slider1Text">Match your roof design</p>
    </div>
  );
};

export default index;
