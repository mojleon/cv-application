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
          <Input placeholder="Adress" type="text" name="adress" />
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
          <Textarea
            placeholder="Description"
            name="description"
            onStateChange={this.props.onStateChange}
          />
          <Image
            placeholder="Image"
            name="image"
            onImageChange={this.props.onImageChange}
          />

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
          <Button value="ADD" onButtonClicked={this.props.onButtonClicked} />

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
