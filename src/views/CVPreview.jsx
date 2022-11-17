import React, { Component } from "react";

import Phone from "@images/phone.svg";
import Message from "@images/message.svg";
import LinkedIn from "@images/linkedin.svg";
import House from "@images/house.svg";

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
            </section>
            <div className="expertise"></div>
          </div>
          <div className="experience">
            {this.props.state.experience.map((item, index) => (
              <div key={index}>
                <h2>{item.position}</h2>
                <i>
                  {item.company} | {item.company} | {item.from} - {item.to}
                </i>
                <p>{item.experienceDescription}</p>
              </div>
            ))}
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
