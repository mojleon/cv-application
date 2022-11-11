import React, { Component } from "react";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
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
          <Input
            placeholder="First name"
            type="text"
            onStateChange={this.props.onStateChange}
          />
          <Input placeholder="Last name" type="text" />
          <Input placeholder="Title" type="text" />
          <Input placeholder="Title" type="file" />
          <Input placeholder="Adress" type="text" />
          <Input placeholder="Phone number" type="text" />
          <Input placeholder="Email" type="text" />
          <Textarea placeholder="Description" type="text" />

          <h1>Experience</h1>
          <Input placeholder="Position" type="text" />
          <Input placeholder="Company" type="text" />
          <Input placeholder="City" type="text" />
          <div className="side-by-side-2">
            <Input placeholder="From" type="text" />
            <Input placeholder="To" type="text" />
          </div>
          <Button value="ADD" onButtonClicked={this.props.onButtonClicked} />

          <h1>Education</h1>
          <Input placeholder="Universtiry name" type="text" />
          <Input placeholder="City" type="text" />
          <Input placeholder="Degree" type="text" />
          <Input placeholder="Subject" type="text" />
          <div className="side-by-side-2">
            <Input placeholder="From" type="text" />
            <Input placeholder="To" type="text" />
          </div>
          <Button value="ADD" />

          <h1>Generate</h1>
          <Button value="Generate PDF" />
          <Button value="Load example" />
          <Button value="Reset" />
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
