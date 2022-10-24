import Button from "../shared/Button";
import Link from "@mui/material/Link";

import HeroImage from "../../assets/hero-image.jpeg";
import "./hero.css";

const index = () => {
  return (
    <div className="mainHero">
      <img src={HeroImage} alt="Main Hero" />
      <div className="heroContent">
        <div>
          <h3 className="heroHeading">
            Are your gutters putting your home at risk?
          </h3>
          <p className="heroParagraph">
            Get a free gutter and gutter guard consultation
          </p>
          <Link href="#consForm" className="customLink">
            <Button text="Fast free quote" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
