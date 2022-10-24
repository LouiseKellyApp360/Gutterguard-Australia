import React from "react";

import Image from "../../assets/partner.jpg";

import "./partner.css";

const index = () => {
  return (
    <div className="partneringSection">
      <h3>Partnering with an Australian icon</h3>
      <p>
        For over 20 years we have partnered with BlueScope ColorBond Steel. We
        are the only Gutterguard mesh with two decades of track record. It’s the
        quality that is trusted by millions of Australians.​
      </p>
      <img src={Image} alt="Partering Img" />
    </div>
  );
};

export default index;
