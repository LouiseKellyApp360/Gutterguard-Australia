import ServicesCard from "./ServicesCard";

import Image1 from "../../assets/about/01.jfif";
import Image2 from "../../assets/about/02.jpeg";
import Image3 from "../../assets/about/03.png";
import Image4 from "../../assets/about/04.jpg";

import "./services.css";

const index = () => {
  return (
    <div className="homeSection">
      <h4 className="serviceHeading">Protecting Aussie homes</h4>
      <div className="homeCard">
        <ServicesCard
          image={Image1}
          heading="Bluescope approved"
          description="We are proud to be the only gutter guard product approved by BlueScope ColorBond Steel and our products are designed to work seamlessly with their roofing and gutters."
        />
        <ServicesCard
          image={Image2}
          heading="20 years experience "
          description="Our 20 years background in roofing, including roof restoration, brings a wealth of experience and expertise to your work. Gutterguard Australia invented and patented the system over 30 years ago. We are the longest providers of gutter guards in Australia. "
        />
        <ServicesCard
          image={Image3}
          heading="Genuine product"
          description="All our mesh and accessories are the best product in the market. We will not swap any part for a cheap inferior product."
        />
        <ServicesCard
          image={Image4}
          heading="Warranty"
          description="Our warranty means we stand by our work. We have a 15-year manufacturer's warranty. We have been here for 20 years and will be here in years to come."
        />
      </div>
    </div>
  );
};

export default index;
