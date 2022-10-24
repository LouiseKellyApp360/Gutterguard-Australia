import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News7Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[6]?.h3}</h3>
        <p className="firstPara">{data?.news[6]?.description}</p>
        <img src={data?.news[6]?.image} alt={data?.news[6]?.heading} />
        <div>
          <p>{data?.news[6]?.p1}</p>
          <p>{data?.news[6]?.p2}</p>
          <p>{data?.news[6]?.p3}</p>
          <p>{data?.news[6]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News7Detail;
