import GuardSolutionCard from "./GuardSolutionCard";

import CorCorrugatedRoof from "../../assets/corrugated-roof.png";
import TileRoof from "../../assets/tile-roof.png";
import FlatRoofDeck from "../../assets/flat-roof-deck.png";
import FlatRoofKliplok from "../../assets/flat-roof-kliplok.png";

import "./guard-solutions.css";

const index = () => {
  return (
    <div className="guardSolution">
      <h5 className="guardSolutionHeading">
        We have a gutter guard solution designed for your unique roof
      </h5>
      <div className="guardSolutionCards">
        <GuardSolutionCard
          image={CorCorrugatedRoof}
          heading="Corrugated roof"
        />
        <GuardSolutionCard image={TileRoof} heading="Tile roof" />
        <GuardSolutionCard image={FlatRoofDeck} heading="Flat roof trim deck" />
        <GuardSolutionCard
          image={FlatRoofKliplok}
          heading="Flat roof KlipLok"
        />
      </div>
    </div>
  );
};

export default index;
