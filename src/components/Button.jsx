import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <button
          onClick={(event) =>
            this.props.onButtonClicked(event, this.props.type)
          }
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
