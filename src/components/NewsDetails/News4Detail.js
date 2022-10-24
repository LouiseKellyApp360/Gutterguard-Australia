import React from "react";

import { data } from "../NewsListing/data";

import "./news-detail.css";

const News4Detail = () => {
  return (
    <div className="newsSection">
      <div className="newsDetail">
        <h3>{data?.news[3]?.h3}</h3>
        <p className="firstPara">{data?.news[3]?.description}</p>
        <img src={data?.news[3]?.image} alt={data?.news[3]?.heading} />
        <div>
          <p>{data?.news[3]?.p1}</p>
          <p>{data?.news[3]?.p2}</p>
          <p>{data?.news[3]?.p3}</p>
          <p>{data?.news[3]?.p4}</p>
        </div>
      </div>
    </div>
  );
};

export default News4Detail;
