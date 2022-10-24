import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "../shared/Button";
import FormImage from "../../assets/form-image.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./form.css";

export const UserContext = React.createContext();

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState("");
  const [postCode, setPostalCode] = useState("");

  const navigate = useNavigate();

  const handlefNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handlelNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAdd(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    document.body.style.cursor = "wait";
    var data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      address: add,
      postal_code: postCode,
    };

    var config = {
      method: "post",
      url: "https://guttergaur-company.netlify.app/.netlify/functions/api/mail",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        navigate("submit/success");
        document.body.style.cursor = "pointer";
      })
      .catch(function (error) {
        console.log(error);
        document.body.style.cursor = "pointer";
      });
  };

  return (
    <div className="mailForm" id="consForm">
      <img src={FormImage} alt="Main Hero" />
      <div className="formContent">
        <h4 className="formHeading">
          Get a free consultation with a certified roofing professional about
          your unique needs.
        </h4>
        <form ref={form}>
          <div className="inputFields">
            <TextField
              name="first_name"
              label="First name"
              variant="filled"
              className="inputField"
              required="true"
              onChange={handlefNameChange}
            />
            <TextField
              name="last_name"
              label="Last name"
              variant="filled"
              className="inputField inputFieldResponsive"
              required="true"
              onChange={handlelNameChange}
            />
          </div>
          <div className="inputFields">
            <TextField
              name="phone"
              label="Phone"
              variant="filled"
              className="inputField"
              required="true"
              onChange={handlePhoneChange}
            />
            <TextField
              name="email"
              label="Email"
              variant="filled"
              className="inputField inputFieldResponsive"
              required="true"
              onChange={handleEmailChange}
            />
          </div>
          <p className="addressText">
            Share your address and we’ll research your needs before we speak
          </p>
          <div className="inputFields" style={{ marginTop: "0px" }}>
            <TextField
              name="address"
              label="Address"
              variant="filled"
              className="inputField"
              required="true"
              onChange={handleAddressChange}
            />
            <TextField
              name="postalcode"
              label="Postal Code"
              variant="filled"
              className="inputField inputFieldResponsive"
              required="true"
              onChange={handlePostalCodeChange}
            />
          </div>
          <div style={{ marginTop: "24px" }}></div>
          <Button
            disable={
              !email ||
              !firstName ||
              !lastName ||
              !phoneNumber ||
              !add ||
              !postCode
            }
            text="Submit"
            title={
              (!email ||
                !firstName ||
                !lastName ||
                !phoneNumber ||
                !add ||
                !postCode) &&
              "please fill all the fields"
            }
            onClick={sendEmail}
            loading={true}
            fullWidth={true}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
