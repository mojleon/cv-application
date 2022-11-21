import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Expertise extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="expertise">
        <h1>Expertise</h1>
        <Input
          name="expertise"
          placeholder="Expertise"
          type="text"
          onStateChange={this.props.onStateChange}
        />
        <Button
          type="expertise"
          value="ADD"
          onButtonClicked={this.props.onButtonClicked}
        />
      </div>
    );
  }
}

export default Expertise;
