import React, { Component } from "react";

import Phone from "@images/phone.png";
import Message from "@images/message.png";
import LinkedIn from "@images/linkedin.png";
import House from "@images/house.png";

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
              <div class="contact-information">
                <div>
                  <img src={Phone} alt="house" />
                  <p>{this.props.state.firstname}</p>
                </div>
                <div>
                  <img src={Message} alt="house" />
                  <p>{this.props.state.firstname}</p>
                </div>
                <div>
                  <img src={LinkedIn} alt="house" />
                  <p>{this.props.state.firstname}</p>
                </div>
                <div>
                  <img src={House} alt="house" />
                  <p>{this.props.state.firstname}</p>
                </div>
              </div>
            </section>
          </div>
          <div className="experience"></div>
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
