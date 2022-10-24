import React from "react";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import SliderCard from "./SliderCard";

import "./landing-slider.css";

import Image1 from "../../assets/slider/01.png";
import Image2 from "../../assets/slider/02.png";
import Image3 from "../../assets/slider/03.png";
import Image4 from "../../assets/slider/04.png";
import Image5 from "../../assets/slider/05.png";
import Image6 from "../../assets/slider/06.png";

const index = () => {
  return (
    <div className="landingSlider">
      <h4 className="landingSliderHeading">
        We are gutter replacement and gutter guard specialists
      </h4>
      <div className="sliderCards">
        <div className="container">
          <div className="desktop-screen">
            <div>
              <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                items={2}
                margin={30}
                dots={false}
                autoplay={true}
                autoplayTimeout={3000}
                slideBy={2}
                stagePadding={20}
                autoWidth={false}
              >
                <SliderCard image={Image1} heading="Without gutter guards" />
                <SliderCard image={Image2} heading="With gutter guards" />
                <SliderCard
                  image={Image3}
                  heading="Over 1,000 gutters replaced"
                />
                <SliderCard
                  image={Image4}
                  heading="5,000 gutter guard customers"
                />
                <SliderCard
                  image={Image5}
                  heading="Certified roofing professionals"
                />
                <SliderCard
                  image={Image6}
                  heading="We work with every roof type"
                />
              </OwlCarousel>
            </div>
          </div>
          <div className="tablet-s">
            <div>
              <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                items={1}
                margin={100}
                dots={false}
                autoplay={true}
                autoplayTimeout={3000}
              >
                <SliderCard image={Image1} heading="Without gutter guards" />
                <SliderCard image={Image2} heading="With gutter guards" />
                <SliderCard
                  image={Image3}
                  heading="Over 1,000 gutters replaced"
                />
                <SliderCard
                  image={Image4}
                  heading="5,000 gutter guard customers"
                />
                <SliderCard
                  image={Image5}
                  heading="Certified roofing professionals"
                />
                <SliderCard
                  image={Image6}
                  heading="We work with every roof type"
                />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
