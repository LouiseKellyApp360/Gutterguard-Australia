import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import FormImage from "../assets/form-image2.png";
import ReviewStars from "../assets/review-stars-white.svg";

const EmailSent = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    <>
      <Header />
      <div className="mailForm" id="consForm">
        <img src={FormImage} alt="Main Hero" />
        <div className="formContent">
          <h4 className="formHeading">
            Thank you {firstName} {lastName} for interesting in Gutterguard
            Australia.
          </h4>
          <p className="addressText">
            We respond to all requests within 2 hours.
          </p>
        </div>
      </div>
      <div className="customerFeedback">
        <h4 className="customerFeedbackHeading">
          What our customers are saying about us.
        </h4>
        <div className="feedback">
          <div className="reviewCard2">
            <p className="reviewGivenBy1">“Great communication”</p>
            <img src={ReviewStars} alt="Review Star" />
            <p className="reviewGivenBy1">Kevin Huynh</p>
            <p className="review1">
              "Great product and communication, could not have been happier with
              the service."
            </p>
          </div>
          <div className="reviewCard2">
            <p className="reviewGivenBy1">“Easy installation”</p>
            <img src={ReviewStars} alt="Review Star" />
            <p className="reviewGivenBy1">Liam Byrne</p>
            <p className="review1">
              “Incredible product great to work with I’ve been installing for a
              couple months now and love how easily it goes on and how elegant
              it looks very simplistic products plus makes all the difference to
              cleaning out your gutters and home maintenance also fire rated so
              perfect for those high-risk areas.”
            </p>
          </div>
          <div className="reviewCard2">
            <p className="reviewGivenBy1">“Good investment”</p>
            <img src={ReviewStars} alt="Review Star" />
            <p className="reviewGivenBy1">Niki</p>
            <p className="review1">
              “We purchased the gutter mesh and installed it ourselves, Greg was
              very helpful and answered all our questions in a timely manner.
              The product was great quality and we haven’t had any problems with
              birds or rodents since the installation. It was a very worthwhile
              investment.”
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmailSent;
