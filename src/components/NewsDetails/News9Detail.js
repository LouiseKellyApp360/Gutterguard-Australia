import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News9Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[8]?.h3}</h3>
        <p className="firstPara">{data?.news[8]?.description}</p>
        <img src={data?.news[8]?.image} alt={data?.news[8]?.heading} />
        <div>
          <p>{data?.news[8]?.p1}</p>
          <p>{data?.news[8]?.p2}</p>
          <p>{data?.news[8]?.p3}</p>
          <p>{data?.news[8]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News9Detail;
