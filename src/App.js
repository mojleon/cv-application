import React, { Component } from "react";

import "./App.scss";
import PersonalInformation from "./views/PersonalInformation";
import CVPreview from "./views/CVPreview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "John",
      lastname: "Doe",
      title: "Frontend Developer",
      phonenumber: "0812345678",
      email: "contact@johndoe.com",
      linkedin: "linkedin.com/in/johndoe",
      adress: "1234 Street, City, Country",
      description: `Prolific, full stack web developer with a passion for metrics and beating former "best-yets." Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure.`,
      image: null,

      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      experienceDescription: "",

      experience: [],
    };

    this.updateState = this.updateState.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  addExperience() {
    const experience = {
      position: this.state.position,
      company: this.state.company,
      city: this.state.city,
      from: this.state.from,
      to: this.state.to,
      experienceDescription: this.state.experienceDescription,
    };

    this.setState({
      experience: [...this.state.experience, experience],
    });

    this.clearExperienceValues(experience);
  }

  clearExperienceValues(experience) {
    Object.keys(experience).forEach((val) => {
      this.state[val] = "";
      document.getElementsByName(val)[0].value = "";
    });
  }

  onClickBtn(event, type) {
    if (type === "experience") return this.addExperience();
    console.log(type);
    console.log("Button has been clicked!");
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <main>
          <PersonalInformation
            state={this.state}
            onStateChange={this.updateState}
            onButtonClicked={this.onClickBtn}
            onImageChange={this.onImageChange}
          />
          <CVPreview state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
