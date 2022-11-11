import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="input">
        <button>{this.props.value}</button>
      </div>
    );
  }
}

export default Button