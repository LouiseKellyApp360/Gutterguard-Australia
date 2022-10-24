const FeatureCard = ({ image, iconname, description }) => {
  return (
    <div className="featureCard">
      <img src={image} alt={iconname} />
      <p className="featureDescription">{description}</p>
    </div>
  );
};

export default FeatureCard;
