import React, { Component } from "react";

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience">
        <h1>Experience</h1>
        {this.props.experiences.map((item, index) => (
          <div key={index}>
            <h2>{item.position}</h2>
            <i>
              {item.company} | {item.company} | {item.from} - {item.to}
            </i>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CVPreview;
