import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News8Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[7]?.h3}</h3>
        <p className="firstPara">{data?.news[7]?.description}</p>
        <img src={data?.news[7]?.image} alt={data?.news[7]?.heading} />
        <div>
          <p>{data?.news[7]?.p1}</p>
          <p>{data?.news[7]?.p2}</p>
          <p>{data?.news[7]?.p3}</p>
          <p>{data?.news[7]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News8Detail;
