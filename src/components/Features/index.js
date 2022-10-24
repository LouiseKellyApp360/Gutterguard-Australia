import FeatureCard from "./FeatureCard";
import PriceIcon from "../../assets/price-icon.svg";
import DeliveryIcon from "../../assets/delivery-icon.svg";
import CertifiedIcon from "../../assets/certified-icon.svg";
import DispatchIcon from "../../assets/dispatch-icon.svg";

import "./features.css";

const index = () => {
  return (
    <div className="featureCards">
      <FeatureCard
        image={PriceIcon}
        iconname="PriceIcon"
        description="Best price in gutters and gutter guards"
      />
      <FeatureCard
        image={DeliveryIcon}
        iconname="DeliveryIcon"
        description="Free delivery Australia wide"
      />
      <FeatureCard
        image={CertifiedIcon}
        iconname="CertifiedIcon"
        description="Certified roofing professionals"
      />
      <FeatureCard
        image={DispatchIcon}
        iconname="DispatchIcon"
        description="Same day dispatch, next day delivery*"
      />
    </div>
  );
};

export default index;
