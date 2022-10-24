const ProtectionCard = ({ image, heading, description }) => {
  return (
    <div className="protectionCard">
      <img
        style={{ width: "204px", height: "164px" }}
        src={image}
        alt={`${heading}`}
      />
      <h5 className="pCardHeaing">{heading}</h5>
      <p className="pCardDescription">{description}</p>
    </div>
  );
};

export default ProtectionCard;
