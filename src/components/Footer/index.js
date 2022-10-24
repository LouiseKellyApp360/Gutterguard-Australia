import React from "react";
import { Link } from "react-router-dom";

import LogoDark from "../../assets/logo-dark.svg";

import "./footer.css";

const index = () => {
  return (
    <div className="footerSection">
      <img src={LogoDark} alt="Gutterguard Australia" />
      <div className="footerContent">
        <div className="footerLinkContent">
          <h6 className="footerLinkHeading">Links</h6>
          <Link to="/privacy-policy" className="pLink">
            Privacy Policy
          </Link>
          <br />
          <Link to="/terms-and-conditions" className="pLink">
            Terms and Conditions
          </Link>
        </div>
        <div className="footerLinkContent">
          <h6 className="footerLinkHeading">Contact us</h6>
          <p className="footerLinkText">
            Areas serviced: Australia wide <br />{" "}
            <a
              href="tel:1300 515 024"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Phone: 1300 515 024{" "}
            </a>
            <br />
            Email us: info@gutterguard.company <br /> ABN 76 468 841 780
          </p>
        </div>
        <div className="footerLinkContent">
          <h6 className="footerLinkHeading">Opening hours</h6>
          <p className="footerLinkText">
            We are open 6 days a week <br /> 8am to 6pm
          </p>
        </div>
        <div className="footerLinkContent">
          <h6 className="footerLinkHeading">Head office</h6>
          <p className="footerLinkText">
            3 Old Regret Road, <br /> Clifton Grove, Orange 2800
          </p>
        </div>
        <div className="footerLinkContent">
          <h6 className="footerLinkHeading">Installer locations</h6>
          <p className="footerLinkText">
            New South Wales, <br /> Canberra ACT, <br /> NT, <br /> Queensland,{" "}
            <br />
            Victoria,
            <br /> South Australia, <br /> Western Australia,
            <br /> Tasmania
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
