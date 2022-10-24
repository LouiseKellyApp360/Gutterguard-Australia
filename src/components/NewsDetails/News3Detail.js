import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News3Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[2]?.h3}</h3>
        <p className="firstPara">{data?.news[2]?.description}</p>
        <img src={data?.news[2]?.image} alt={data?.news[2]?.heading} />
        <div>
          <p>{data?.news[2]?.p1}</p>
          <p>{data?.news[2]?.p2}</p>
          <p>{data?.news[2]?.p3}</p>
          <p>{data?.news[2]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News3Detail;
