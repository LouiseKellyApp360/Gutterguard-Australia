import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News1Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[1]?.h3}</h3>
        <p className="firstPara">{data?.news[1]?.description}</p>
        <img src={data?.news[1]?.image} alt={data?.news[1]?.heading} />
        <div>
          <p>{data?.news[1]?.p1}</p>
          <p>{data?.news[1]?.p2}</p>
          <p>{data?.news[1]?.p3}</p>
          <p>{data?.news[1]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News1Detail;
