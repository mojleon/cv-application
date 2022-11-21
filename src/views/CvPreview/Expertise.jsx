import React, { Component } from "react";

class Expertise extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="expertise">
        <h1>Expertise</h1>
        <ul>
          {this.props.expertises.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Expertise;
