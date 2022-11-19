import React, { Component } from "react";
import Input from "../../components/Input";
import Image from "../../components/Image";

class ContactInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact-information">
        <h3>Contact information</h3>
        <Input
          placeholder="Phone number"
          name="phonenumber"
          onStateChange={this.props.onStateChange}
        />
        <Input
          placeholder="Email"
          name="email"
          onStateChange={this.props.onStateChange}
        />
        <Input
          placeholder="LinkedIn"
          name="linkedin"
          onStateChange={this.props.onStateChange}
        />
        <Input
          placeholder="Adress"
          name="adress"
          onStateChange={this.props.onStateChange}
        />
        <h3>Profile picture</h3>
        <Image
          placeholder="Image"
          name="image"
          onImageChange={this.props.onImageChange}
        />
      </div>
    );
  }
}

export default ContactInformation;
