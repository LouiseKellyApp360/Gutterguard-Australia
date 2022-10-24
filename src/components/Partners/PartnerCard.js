import React from "react";

const PartnerCard = ({ image, detail }) => {
  return (
    <div className="partnerCard">
      <div className="partnerImageContainer">
        <img src={image} alt="Partner Logo" />
      </div>
      <p className="partnerDetail">{detail}</p>
    </div>
  );
};

export default PartnerCard;
