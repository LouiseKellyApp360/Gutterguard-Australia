import PartnerCard from "./PartnerCard";

import AustralianStandard from "../../assets/ASCP.png";
import HousingInstituteAustralia from "../../assets/HIA.png";
import CSIRO from "../../assets/CSIRO.png";
import BlueScope from "../../assets/BS.png";
import ColorBond from "../../assets/CB.png";
import AkzoNobel from "../../assets/AN.png";

import "./partner.css";

const index = () => {
  return (
    <div className="partnersSection">
      <h4 className="partnerHeading">
        Designed to match Colorbond roof and gutter range
      </h4>
      <div className="partnersCards">
        <PartnerCard
          image={AustralianStandard}
          detail="We comply to all Australian building standards"
        />
        <PartnerCard
          image={HousingInstituteAustralia}
          detail="Proud to be a Housing Institute of Australia member"
        />
        <PartnerCard
          image={CSIRO}
          detail="Best performing CSIRO bush fire ratings"
        />
        <PartnerCard
          image={BlueScope}
          detail="No inferior products. Gutterguard Australia uses Bluescope throughout"
        />
        <PartnerCard
          image={ColorBond}
          detail="Designed to match Colourbond roof and gutter range"
        />
        <PartnerCard
          image={AkzoNobel}
          detail="We use the best coated powder in the market"
        />
      </div>
    </div>
  );
};

export default index;
