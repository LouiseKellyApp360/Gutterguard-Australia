import ServicesCard from "./ServicesCard";

import DIYKit from "../../assets/diy-kit.png";
import MeshInstallation from "../../assets/mesh-installation.png";
import Trade from "../../assets/trade.png";

import "./services.css";

const index = () => {
  return (
    <div className="servicesSection">
      <h4 className="serviceHeading">We can service all areas of Australia.</h4>
      <p className="serviceDescription">
        Whether you want to do it yourself, get an installer or buy protection
        for your own building business – we are here to help. We can service all
        areas of Australia and only a phone call away. Call us now on 1300 515
        024
      </p>
      <div className="servicesCard">
        <ServicesCard
          image={DIYKit}
          heading="DIY Kit"
          description="Have our experts assemble a kit to meet your unique roof architecture and needs"
        />
        <ServicesCard
          image={MeshInstallation}
          heading="Mesh and installation"
          description="Australia’s most extensive range of materials, accessories and colours installed by experts"
        />
        <ServicesCard
          image={Trade}
          heading="Trade"
          description="Trade discounts available. Trims, screws and saddles to meet all requirements"
        />
      </div>
    </div>
  );
};

export default index;
