import React, { useState } from "react";
import Link from "@mui/material/Link";
import Button from "../shared/Button";
import LogoLight from "../../assets/logo-light.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/cross.svg";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  let formLink;
  if (
    window.location.pathname.includes("privacy") ||
    window.location.pathname.includes("terms") ||
    window.location.pathname.includes("about") ||
    window.location.pathname.includes("solutions") ||
    window.location.pathname.includes("faqs") ||
    window.location.pathname.includes("news")
  ) {
    formLink = "/#consForm";
  } else {
    formLink = "#consForm";
  }
  return (
    <>
      <div className="topBanner">Leaders in gutters and gutter guards</div>
      <header className="header">
        <div className="headerContainer">
          <div className="leftMenu">
            {show ? (
              <img
                src={CloseIcon}
                alt="Phone Icon"
                className="menuIcon"
                onClick={handleShow}
              />
            ) : (
              <img
                src={MenuIcon}
                alt="Phone Icon"
                className="menuIcon"
                onClick={handleShow}
              />
            )}
            <a href="/">
              <img
                src={LogoLight}
                alt="Gutterguard Logo"
                width={122}
                height={56}
                className="mainLogo"
              />
            </a>
          </div>
          <div className="navLinks">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navLinkActive" : "navLink"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                isActive ? "navLinkActive" : "navLink"
              }
            >
              Solutions
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "navLinkActive" : "navLink"
              }
            >
              News
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "navLinkActive" : "navLink"
              }
            >
              FAQs
            </NavLink>
          </div>
          {show ? (
            <div className="navLinksMob">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navLinkActiveM" : "navLinkM"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  isActive ? "navLinkActiveM" : "navLinkM"
                }
              >
                Solutions
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "navLinkActiveM" : "navLinkM"
                }
              >
                News
              </NavLink>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? "navLinkActiveM" : "navLinkM"
                }
              >
                FAQs
              </NavLink>
            </div>
          ) : (
            ""
          )}

          <div className="headerLinks">
            <a href="tel:1300 515 024">
              <img src={PhoneIcon} alt="Phone Icon" className="phoneIcon" />
            </a>
            <a href="tel:1300 515 024" style={{ textDecoration: "none" }}>
              <p>1300 515 024</p>
            </a>
            <Link href={formLink} className="customLink">
              <Button text="Fast free quote" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
