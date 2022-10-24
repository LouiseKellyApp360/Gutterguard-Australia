import ProtectionCard from "./ProtectionCard";

import FamilyHealth from "../../assets/family-health.png";
import WaterDamage from "../../assets/water-damage.png";
import FireDamage from "../../assets/fire-damage.png";
import BirdsPests from "../../assets/birds-pests.png";
import RoofWallDecay from "../../assets/roof-wall-decay.png";
import RoofFall from "../../assets/roof-falls.jpeg";

import "./protection.css";

const index = () => {
  return (
    <div className="protectionSection">
      <div className="protectionContent">
        <h4 className="protectionHeading">
          Protect your home from high-risk gutter pests and damage
        </h4>
        <p className="protectionDescription">
          Water damage, pests, electrical damage and fire, can cause thousands
          of dollars, and potentially complete home loss – or even loss of life.
        </p>
      </div>
      <div className="protectionCards">
        <ProtectionCard
          image={FamilyHealth}
          heading="Family health"
          description="Mould and moisture from blocked gutters cause respiratory diseases. 1 in 5 unguarded homes have mould and harmful moisture."
        />
        <ProtectionCard
          image={WaterDamage}
          heading="Water damage"
          description="Water from unguarded gutters can cause expensive damage to roof, electrical, ceilings and wall structure. 1 in 3 unguarded homes have water damage."
        />
        <ProtectionCard
          image={FireDamage}
          heading="Fire damage"
          description="Embers can pass through unguarded gutters and set the house alight. 1 in 3 unguarded homes are a fire risk."
        />
      </div>
      <div className="protectionCards pCards2">
        <ProtectionCard
          image={BirdsPests}
          heading="Birds and pests"
          description="Your unguarded gutter is the entry for unwanted pests, rats, possums and birds in your roof. 1 in 5 unguarded homes have unwanted pests and birds."
        />
        <ProtectionCard
          image={RoofWallDecay}
          heading="Roof and wall decay"
          description="Trapped and stagnant moisture rusts roof metals and erodes the structure. 1 in 8 unguarded homes have roof decay."
        />
        <ProtectionCard
          image={RoofFall}
          heading="Roof falls"
          description="Gutters typically need to be cleaned every 3 months. 100% of unguarded homes are a roof fall risk, including the risk of death."
        />
      </div>
    </div>
  );
};

export default index;
