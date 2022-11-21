import React, { Component } from "react";

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="extra-details">
        <div className="yellowLine"></div>
        <div className="blackLine"></div>
        <h1>
          {this.props.state.firstname} {this.props.state.lastname}
        </h1>
        <h2>{this.props.state.title}</h2>
        <div className="image">
          <img src={this.props.state.image} />
        </div>
        <div className="prefixes">
          <h1>{this.props.state.firstname[0]}</h1>
          <h1>{this.props.state.lastname[0]}</h1>
        </div>
      </div>
    );
  }
}

export default CVPreview;
