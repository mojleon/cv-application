import React, { Component, useState } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name} id="image-label">UPLOAD IMAGE</label>
        <input
          onChange={this.props.onImageChange}
          type="file"
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default Image;
