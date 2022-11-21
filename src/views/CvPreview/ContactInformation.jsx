import React, { Component } from "react";

import Phone from "@images/phone.svg";
import Message from "@images/message.svg";
import LinkedIn from "@images/linkedin.svg";
import House from "@images/house.svg";

class ContactInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-information">
        <div>
          <img src={Phone} alt="house" />
          <p>{this.props.state.phonenumber}</p>
        </div>
        <div>
          <img src={Message} alt="house" />
          <p>{this.props.state.email}</p>
        </div>
        <div>
          <img src={LinkedIn} alt="house" />
          <p>{this.props.state.linkedin}</p>
        </div>
        <div>
          <img src={House} alt="house" />
          <p>{this.props.state.adress}</p>
        </div>
      </div>
    );
  }
}

export default ContactInformation;
