import React, { Component } from "react";
import update from "react-addons-update";

import "./App.scss";
import PersonalInformation from "./views/PersonalInformation";
import CVPreview from "./views/CVPreview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      title: "",
      phonenumber: "",
      email: "",
      linkedin: "",
      adress: "",
      profile: ``,
      image: null,

      expertise: "",
      expertises: [],

      experience: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        description: "",
      },

      experiences: [],

      education: {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },

      educations: [],
    };

    this.onStateChange = this.onStateChange.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onDeleteButtonClicked = this.onDeleteButtonClicked.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onExistingStateChange = this.onExistingStateChange.bind(this);
  }

  addExpertise() {
    this.setState({
      expertises: [...this.state.expertises, this.state.expertise],
    });

    this.state.expertise = "";
    document.querySelector("#expertise input").value = "";
  }

  addExperience() {
    const experience = {
      position: this.state.experience.position,
      company: this.state.experience.company,
      city: this.state.experience.city,
      from: this.state.experience.from,
      to: this.state.experience.to,
      description: this.state.experience.description,
    };

    this.setState({
      experiences: [...this.state.experiences, experience],
    });

    this.clearExperienceValues(experience);
  }

  addEducation() {
    const education = {
      university: this.state.education.university,
      city: this.state.education.city,
      degree: this.state.education.degree,
      subject: this.state.education.subject,
      from: this.state.education.from,
      to: this.state.education.to,
    };

    this.setState({
      educations: [...this.state.educations, education],
    });

    this.clearEducationValues(education);
  }

  clearEducationValues(education) {
    Object.keys(education).forEach((val) => {
      this.state.education[val] = "";
      document.querySelector(
        `#personal-information #education #${[val]}`
      ).value = "";
    });
  }

  clearExperienceValues(experience) {
    Object.keys(experience).forEach((val) => {
      this.state.experience[val] = "";
      document.querySelector(
        `#personal-information #experience #${[val]}`
      ).value = "";
    });
  }

  onButtonClicked(event, type) {
    if (type === "experience") return this.addExperience();
    if (type === "education") return this.addEducation();
    if (type === "expertise") return this.addExpertise();
  }

  onDeleteButtonClicked(event, type) {
    console.log("delete!");
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  onExistingStateChange = (event) => {
    const type = event.target.dataset.type;
    const index = event.target.dataset.index;
    // this.setState({'expertises': [this.state[type][index], event.target.value]});
    // console.log(this.state[type][index],type ,  event.target.value)

    const expertises = this.state[type][index];
    this.setState(
      update(this.state, {
        expertises: {
          [index]: {
            $set: event.target.value,
          },
        },
      })
    );
  };

  onStateChange = (event) => {
    const type = event.target.dataset.type;
    if (event.target.dataset.type !== undefined)
      return this.setState({
        [type]: {
          ...this.state[type],
          [event.target.name]: event.target.value,
        },
      });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <main>
          <PersonalInformation
            state={this.state}
            onStateChange={this.onStateChange}
            onExistingStateChange={this.onExistingStateChange}
            onButtonClicked={this.onButtonClicked}
            onImageChange={this.onImageChange}
            onDeleteButtonClicked={this.onDeleteButtonClicked}
            deleteButton={true}
          />
          <div className="center">
            <CVPreview state={this.state} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
