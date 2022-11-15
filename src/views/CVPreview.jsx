import React, { Component } from "react";

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="cv-preview">
        <div id="data">
          <div className="expertise">
            <div className="image">
              <img src={this.props.state.image} />
            </div>
            <h2>PERSONAL PROFILE</h2>
            <p>{this.props.state.description}</p>
          </div>
          <div className="experience">
            <h1>
              {this.props.state.firstname} {this.props.state.lastname}
            </h1>
            <h2>{this.props.state.title}</h2>
          </div>
        </div>
        <div id="extra-details"></div>
      </div>
    );
  }
}

export default CVPreview;
