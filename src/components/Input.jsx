import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <input
          onChange={this.props.onStateChange}
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
