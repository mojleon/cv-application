import React, { Component } from "react";
import ContactInformation from "./CvPreview/ContactInformation";
import Expertise from "./CvPreview/Expertise";
import Experience from "./CvPreview/Experience";
import Education from "./CvPreview/Education";
import ExtraDetails from "./CvPreview/ExtraDetails";
class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="cv-preview">
        <div id="data">
          <div className="expertise">
            <section>
              <ContactInformation state={this.props.state} />
              <Expertise expertises={this.props.state.expertises} />
            </section>
          </div>
          <div className="profile-experience-education">
            <h1>Profile</h1>
            <p>{this.props.state.profile}</p>
            <Experience experiences={this.props.state.experiences} />
            <Education educations={this.props.state.educations} />
          </div>
        </div>
        <ExtraDetails state={this.props.state} />
      </div>
    );
  }
}

export default CVPreview;
