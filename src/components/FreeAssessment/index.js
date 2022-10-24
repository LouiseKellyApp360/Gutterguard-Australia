import Link from "@mui/material/Link";
import Button from "../shared/Button";

import "./free-assessment.css";

const index = ({ heading, description }) => {
  return (
    <div className="freeAssessmentSection">
      <h3 className="assessmentHeading">{heading}</h3>
      <p className="assessmentDescription">{description}</p>
      <div className="assessmentLinks">
        <a href="tel:1300 515 024" className="customLink">
          <Button text="1300 515 024" />
        </a>
        <Link href="#consForm" className="customLink">
          <Button text="Email us" />
        </Link>
      </div>
    </div>
  );
};

export default index;
