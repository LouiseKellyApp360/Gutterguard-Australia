import ServicesCard from "./ServicesCard";

import { data } from "./data";

import "./services.css";

const RelatedNews = ({ heading, s, e }) => {
  return (
    <div
      className="resourceListingSection"
      style={{ borderTop: "1px solid #E8EDE5" }}
    >
      <p className="meshHeading">{heading}</p>
      <div className="servicesCard">
        {data.news.slice(s, e).map((news) => {
          return (
            <ServicesCard
              image={news.image}
              heading={news.heading}
              slug={news.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedNews;
