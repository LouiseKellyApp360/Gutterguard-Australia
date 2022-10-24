import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News1Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[0]?.h3}</h3>
        <p className="firstPara">{data?.news[0]?.description}</p>
        <img src={data?.news[0]?.image} alt={data?.news[0]?.heading} />
        <div>
          <p>{data?.news[0]?.p1}</p>
          <p>{data?.news[0]?.p2}</p>
          <p>{data?.news[0]?.p3}</p>
          <p>{data?.news[0]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News1Detail;
