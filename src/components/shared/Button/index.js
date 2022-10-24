import * as React from "react";
import Button from "@mui/material/Button";

import "./CustomButton.css";

const index = ({ text, onClick, disable, title, fullWidth }) => {
  return (
    <Button
      variant="contained"
      className="customButton"
      onClick={onClick}
      title={title}
      disabled={disable}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};

export default index;
