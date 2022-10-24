import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News6Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[5]?.h3}</h3>
        <p className="firstPara">{data?.news[5]?.description}</p>
        <img src={data?.news[5]?.image} alt={data?.news[5]?.heading} />
        <div>
          <p>{data?.news[5]?.p1}</p>
          <p>{data?.news[5]?.p2}</p>
          <p>{data?.news[5]?.p3}</p>
          <p>{data?.news[5]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News6Detail;
