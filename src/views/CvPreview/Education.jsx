import React, { Component } from "react";

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education">
        <h1>Education</h1>
        {this.props.educations.map((item, index) => (
          <div key={index}>
            <h2>{item.university}</h2>
            <h3>{item.subject}</h3>
            <i>
              {item.city} | {item.degree} | {item.from} - {item.to}
            </i>
          </div>
        ))}
      </div>
    );
  }
}

export default CVPreview;
