import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="input">
        <input placeholder={this.props.placeholder} type="text" />
      </div>
    );
  }
}

export default Input