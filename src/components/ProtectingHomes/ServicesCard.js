const ServicesCard = ({ image, heading, description }) => {
  return (
    <div className="serviceCard">
      <img src={image} alt={`${heading}`} />
      <h5 className="serviceCardHeading">{heading}</h5>
      <p className="serviceCardDescription">{description}</p>
    </div>
  );
};

export default ServicesCard;
