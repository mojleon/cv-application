import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="input">
        <textarea placeholder={this.props.placeholder} type={this.props.type} />
      </div>
    );
  }
}

export default Textarea