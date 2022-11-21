import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NameAndJob from "./PersonalInformation/NameAndJob";
import ContactInformation from "./PersonalInformation/ContactInformation";
import Experience from "./PersonalInformation/Experience";
import Education from "./PersonalInformation/Education";
import Expertise from "./PersonalInformation/Expertise";
import Print from "../components/Print";

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div id="personal-information">
          <h1>Personal Information</h1>
          <NameAndJob onStateChange={this.props.onStateChange} />
          <ContactInformation
            onStateChange={this.props.onStateChange}
            onImageChange={this.props.onImageChange}
          />
          <Expertise
            onStateChange={this.props.onStateChange}
            onImageChange={this.props.onImageChange}
            onButtonClicked={this.props.onButtonClicked}
          />
          <Experience
            onStateChange={this.props.onStateChange}
            onImageChange={this.props.onImageChange}
            onButtonClicked={this.props.onButtonClicked}
          />
          <Education
            onStateChange={this.props.onStateChange}
            onImageChange={this.props.onImageChange}
            onButtonClicked={this.props.onButtonClicked}
          />
          <Print
            type="print"
            value="Generate PDF"
            onButtonClicked={this.props.onButtonClicked}
            state={this.props.state}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
