import React, { Component } from "react";

class Textarea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <textarea
          placeholder={this.props.placeholder}
          name={this.props.name}
          id={this.props.name}
          onChange={this.props.onStateChange}
        />
      </div>
    );
  }
}

export default Textarea;
