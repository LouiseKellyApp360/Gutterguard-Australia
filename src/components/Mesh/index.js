import MeshCard from "./MeshCard";

import AluMesh from "../../assets/alu-mesh.png";
import EmberMesh from "../../assets/ember-mesh.png";

import "./mesh.css";

const index = () => {
  return (
    <div className="meshSection">
      <h5 className="meshHeading">
        We will help you choose the mesh that gives you the right level of
        protection
      </h5>
      <div className="meshCards">
        <MeshCard
          image={AluMesh}
          name="AluMesh"
          description="Best for homes within range of large and medium size leaves. 3.5mm x 3.5mm Hole size. CSIRO Fire Rating of 0"
        />
        <MeshCard
          image={EmberMesh}
          name="EmberMesh"
          description="Best for homes within range of small to large size leaves. 2mm x 2mm Hole size. CSIRO Fire Rating of 0"
        />
      </div>
    </div>
  );
};

export default index;
