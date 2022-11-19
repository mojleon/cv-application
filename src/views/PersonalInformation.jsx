import React, { Component } from "react";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Image from "../components/Image";
import Button from "../components/Button";
import NameAndJob from "./PersonalInformation/NameAndJob";
import ContactInformation from "./PersonalInformation/ContactInformation";
import Experience from "./PersonalInformation/Experience";
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
          <div id="expertise">
            <h1>Expertise</h1>
            <Input placeholder="Expertise" type="text" />
          </div>
          <Experience
            onStateChange={this.props.onStateChange}
            onImageChange={this.props.onImageChange}
            onButtonClicked={this.props.onButtonClicked}
          />
          <div id="education">
            <h1>Education</h1>
            <Input
              placeholder="Universtiry name"
              name="university"
              dataType="education"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="City"
              name="city"
              dataType="education"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="Degree"
              name="degree"
              dataType="education"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="Subject"
              name="subject"
              dataType="education"
              onStateChange={this.props.onStateChange}
            />
            <div className="side-by-side-2">
              <Input
                placeholder="From"
                name="from"
                dataType="education"
                onStateChange={this.props.onStateChange}
              />
              <Input
                placeholder="To"
                name="to"
                dataType="education"
                onStateChange={this.props.onStateChange}
              />
            </div>
            <Button
              type="education"
              value="ADD"
              onButtonClicked={this.props.onButtonClicked}
            />
          </div>
          <div id="generate">
            <h1>Generate</h1>
            <Button type="generate-pdf" value="Generate PDF" />
            <Button type="reset" value="Reset" />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
