import React, { Component } from "react";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default Experience;
