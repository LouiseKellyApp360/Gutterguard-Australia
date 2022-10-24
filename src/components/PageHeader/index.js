import React from "react";

import "./page-header.css";

const index = ({ backgroundcolor, textcolor, heading }) => {
  return (
    <div className="pageHeader" style={{ backgroundColor: backgroundcolor }}>
      <h1 style={{ color: textcolor }}>{heading}</h1>
    </div>
  );
};

export default index;
