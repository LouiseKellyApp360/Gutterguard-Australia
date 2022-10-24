import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News5Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[4]?.h3}</h3>
        <p className="firstPara">{data?.news[4]?.description}</p>
        <img src={data?.news[4]?.image} alt={data?.news[4]?.heading} />
        <div>
          <p>{data?.news[4]?.p1}</p>
          <p>{data?.news[4]?.p2}</p>
          <p>{data?.news[4]?.p3}</p>
          <p>{data?.news[4]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News5Detail;
