import { Link } from "react-router-dom";

const ServicesCard = ({ image, heading, slug }) => {
  return (
    <div className="serviceCard">
      <img src={image} alt={`${heading}`} />
      <h5 className="serviceCardHeading">{heading}</h5>
      <Link to={`/news-detail/${slug}`} className="serviceCardLink">
        Read more
      </Link>
    </div>
  );
};

export default ServicesCard;
