import React from "react";

import Mesh01 from "../../assets/solution/Mesh01.jfif";
import Mesh02 from "../../assets/solution/Mesh02.jpg";
import Leave from "../../assets/icons/leave.svg";
import Fire from "../../assets/icons/fire.svg";
import Bird from "../../assets/icons/bird.svg";
import Particle from "../../assets/icons/particle.svg";

import "./solution-mesh.css";

const index = () => {
  return (
    <div className="solMeshSection">
      <h3 className="solMeshHeading">Gutterguard Australia Mesh</h3>
      <p className="solMeshPara">
        Gutterguard Australia manufactures 2 different types of Aluminium Mesh.
        We have our standard Alumesh and our premium EmberMesh. Both products do
        a great job of keeping leaves, debris, birds and pests out of your
        gutters.
      </p>
      <div>
        <div className="solMeshCard1">
          <img src={Mesh01} alt="AluMesh" className="aluMesh" />
          <div className="aluMeshContent">
            <h4>Gutterguard Australia AluMesh</h4>
            <p>
              Gutterguard Australia AluMesh offers an exposure grade Aluminium
              expanded mesh with a diamond patterned mesh aperture of
              approximately 3.5mm. This ideal aperture has been proven to keep
              maximum matter out of your gutters and allow the maximum water to
              flow freely in. It keeps out larger leaves such as silky oats,
              fern fronds, gum nuts and similar.
            </p>
            <ul>
              <li>
                3.5mm x 3.5mm hole size keeps most leaves out and water in
              </li>
              <li>Used for all Bushfire Attack levels</li>
              <li>Fire rating of 0 for the CSIRO</li>
              <li>
                Akzo Nobel Powder Coated finish in the full manufacturers range
                of colours
              </li>
              <li>15 years warranty</li>
            </ul>
            <div className="aluMeshIcons">
              <div className="meshIcon">
                <img src={Leave} alt="Leave Icon" />
                <p>
                  Stops leaves <br /> and debris
                </p>
              </div>
              <div className="meshIcon">
                <img src={Fire} alt="Fire Icon" />
                <p>
                  Stops bushfire <br /> attack
                </p>
              </div>
              <div className="meshIcon">
                <img src={Bird} alt="Bird Icon" />
                <p>
                  Stops birds <br /> and pests
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="solMeshCard2">
          <div className="emberMeshContent">
            <h4>Gutterguard Australia EmberMesh</h4>
            <p>
              Gutterguard Australia EmberMesh, is a premium mesh product unique
              to Gutterguard Australia. With a mesh aperture of just 2mm this is
              mesh profile keeps the finest of matter out. Perfect for pine
              needs, jacaranda, poinciana, wattle and similar. For a fine mesh
              product, EmberMesh has the best water penetrating qualities of any
              product in its class. The ideal gutter guard to prevent ember
              attacks during bushfires.
            </p>
            <ul>
              <li>Perfect as an Ember Gutterguard for Bushfire Areas</li>
              <li>2mm x 2mm hole size</li>
              <li>Used for all Bushfire Attack levels</li>
              <li>Fire rating of 0 for the CSIRO</li>
              <li>
                Akzo Nobel Powder Coated finish in the full manufacturers range
                of colours
              </li>
              <li>15 years warranty</li>
            </ul>
            <div className="emberMeshIcons">
              <div className="meshIcon">
                <img src={Leave} alt="Leave Icon" />
                <p>Stops leaves and debris</p>
              </div>
              <div className="meshIcon">
                <img src={Fire} alt="Fire Icon" />
                <p>Stops bushfire attack</p>
              </div>
              <div className="meshIcon">
                <img src={Bird} alt="Bird Icon" />
                <p>Stops birds and pests</p>
              </div>
              <div className="meshIcon">
                <img src={Particle} alt="Particle Icon" />
                <p>Stop fine particles</p>
              </div>
            </div>
          </div>
          <img src={Mesh02} alt="EmberMesh" className="aluMesh" />
        </div>
      </div>
    </div>
  );
};

export default index;
