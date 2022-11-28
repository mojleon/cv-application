import React, { Component } from "react";
import ContactInformation from "./CvPreview/ContactInformation";
import Expertise from "./CvPreview/Expertise";
import Experience from "./CvPreview/Experience";
import Education from "./CvPreview/Education";
import ExtraDetails from "./CvPreview/ExtraDetails";
function CVPreview(props) {
    return (
      <div id="cv-preview">
        <div id="data">
          <div className="expertise">
            <section>
              <ContactInformation state={props.state} />
              <Expertise expertises={props.state.expertises} />
            </section>
          </div>
          <div className="profile-experience-education">
            <h1>Profile</h1>
            <p>{props.state.profile}</p>
            <Experience experiences={props.state.experiences} />
            <Education educations={props.state.educations} />
          </div>
        </div>
        <ExtraDetails state={props.state} />
      </div>
    );
}

export default CVPreview;
