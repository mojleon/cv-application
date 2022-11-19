import React, { Component } from "react";
import Input from "../../components/Input";

class NameAndJob extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default NameAndJob;
