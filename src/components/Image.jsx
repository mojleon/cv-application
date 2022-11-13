import React, { Component, useState } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <input
          onChange={this.props.onImageChange}
          type="file"
          name={this.props.name}
        />
      </div>
    );
  }
}

export default Image;
