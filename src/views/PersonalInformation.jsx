import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import NameAndJob from "./PersonalInformation/NameAndJob";
import ContactInformation from "./PersonalInformation/ContactInformation";
import Experience from "./PersonalInformation/Experience";
import Education from "./PersonalInformation/Education";
import Expertise from "./PersonalInformation/Expertise";
import Print from "../components/Print";

function PersonalInformation(props) {
  return (
    <div className="App">
      <div id="personal-information">
        <h1>Personal Information</h1>
        <NameAndJob onStateChange={props.onStateChange} />
        <ContactInformation
          onStateChange={props.onStateChange}
          onImageChange={props.onImageChange}
        />
        <Expertise
          onStateChange={props.onStateChange}
          onExistingStateChange={props.onExistingStateChange}
          onImageChange={props.onImageChange}
          onButtonClicked={props.onButtonClicked}
          expertises={props.state.expertises}
          onDeleteButtonClicked={props.onDeleteButtonClicked}
        />
        <Experience
          onStateChange={props.onStateChange}
          onImageChange={props.onImageChange}
          onButtonClicked={props.onButtonClicked}
          experiences={props.state.experiences}
          onDeleteButtonClicked={props.onDeleteButtonClicked}
        />
        <Education
          onStateChange={props.onStateChange}
          onImageChange={props.onImageChange}
          onButtonClicked={props.onButtonClicked}
          educations={props.state.educations}
          onDeleteButtonClicked={props.onDeleteButtonClicked}
        />
        <Print
          type="print"
          value="Generate PDF"
          onButtonClicked={props.onButtonClicked}
          state={props.state}
        />
      </div>
    </div>
  );
}

export default PersonalInformation;
