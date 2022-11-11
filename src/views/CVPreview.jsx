import React, { Component } from "react";

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="cv-preview">
        <h1>{this.props.state.name}</h1>
      </div>
    );
  }
}

export default CVPreview;
