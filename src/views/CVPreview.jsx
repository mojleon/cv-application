import React, { Component } from "react";

import Phone from "@images/phone.svg";
import Message from "@images/message.svg";
import LinkedIn from "@images/linkedin.svg";
import House from "@images/house.svg";

class CVPreview extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.state)
  }

  render() {
    return (
      <div id="cv-preview">
        <div id="data">
          <div className="expertise">
            <section>
              <div className="contact-information">
                <div>
                  <img src={Phone} alt="house" />
                  <p>{this.props.state.phonenumber}</p>
                </div>
                <div>
                  <img src={Message} alt="house" />
                  <p>{this.props.state.email}</p>
                </div>
                <div>
                  <img src={LinkedIn} alt="house" />
                  <p>{this.props.state.linkedin}</p>
                </div>
                <div>
                  <img src={House} alt="house" />
                  <p>{this.props.state.adress}</p>
                </div>
              </div>
              <hr />
              <div className="expertise">
                <h1>Expertise</h1>
                <ul>
                  {this.props.state.expertises.map((item, index) => (
                  <li key={index}>
                      {item}
                  </li>
                ))}
              </ul>
              </div>
            </section>
           
          </div>
          <div className="experience-and-education">
            <div className="experience">
              <h1>Experience</h1>
              {this.props.state.experiences.map((item, index) => (
                <div key={index}>
                  <h2>{item.position}</h2>
                  <i>
                    {item.company} | {item.company} | {item.from} - {item.to}
                  </i>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="education">
              <h1>Education</h1>
              {this.props.state.educations.map((item, index) => (
                <div key={index}>
                  <h2>{item.university}</h2>
                  <h3>{item.subject}</h3>
                  <i>
                    {item.city} | {item.degree} | {item.from} - {item.to}
                  </i>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="extra-details">
          <div className="yellowLine"></div>
          <div className="blackLine"></div>
          <h1>
            {this.props.state.firstname} {this.props.state.lastname}
          </h1>
          <h2>{this.props.state.title}</h2>
          <div className="image">
            <img src={this.props.state.image} />
          </div>
          <div className="prefixes">
            <h1>{this.props.state.firstname[0]}</h1>
            <h1>{this.props.state.lastname[0]}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default CVPreview;
