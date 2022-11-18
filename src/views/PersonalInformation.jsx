import React, { Component } from "react";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Image from "../components/Image";
import Button from "../components/Button";

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div id="personal-information">
          <h1>Personal Information</h1>
          <div id="name-and-job">
            <h3>Name and job</h3>
            <Input
              placeholder="First name"
              name="firstname"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="Last name"
              name="lastname"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="Title"
              name="title"
              onStateChange={this.props.onStateChange}
            />
            </div>
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
          <div id="expertise">
            <h1>Expertise</h1>
            <Input placeholder="Expertise" type="text" />
          </div>
          <div id="experience">
            <h1>Experience</h1>
            <Input
              placeholder="Position"
              name="position"
              dataType="experience"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="Company"
              name="company"
              dataType="experience"
              onStateChange={this.props.onStateChange}
            />
            <Input
              placeholder="City"
              name="city"
              dataType="experience"
              onStateChange={this.props.onStateChange}
            />
            <div className="side-by-side-2">
              <Input
                placeholder="From"
                name="from"
                dataType="experience"
                onStateChange={this.props.onStateChange}
              />
              <Input
                placeholder="To"
                name="to"
                dataType="experience"
                onStateChange={this.props.onStateChange}
              />
            </div>
            <Textarea
              placeholder="Description"
              name="description"
              dataType="experience"
              onStateChange={this.props.onStateChange}
            />
            <Button
              type="experience"
              value="ADD"
              onButtonClicked={this.props.onButtonClicked}
            />
          </div>
          <div id="education">
            <h1>Education</h1>
            <Input placeholder="Universtiry name" type="text" />
            <Input placeholder="City" type="text" />
            <Input placeholder="Degree" type="text" />
            <Input placeholder="Subject" type="text" />
            <div className="side-by-side-2">
              <Input placeholder="From" type="text" />
              <Input placeholder="To" type="text" />
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
