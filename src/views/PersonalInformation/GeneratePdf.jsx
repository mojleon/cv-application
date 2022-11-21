import React, { Component } from "react";
import Button from "../../components/PrintButton";

class GeneratePDF extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="generate">
        <h1>Generate</h1>
        <Button
          type="generate-pdf"
          value="Generate PDF"
          onButtonClicked={this.props.onButtonClicked}
        />
      </div>
    );
  }
}

export default GeneratePDF;
