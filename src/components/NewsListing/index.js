import ServicesCard from "./ServicesCard";

import { data } from "./data";

import "./services.css";

const index = () => {
  return (
    <div className="resourceListingSection">
      <div className="servicesCardNews">
        {data.news.map((news) => {
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

export default index;
