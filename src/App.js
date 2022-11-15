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
      description: ` Working quickly and coming up with ideas is a great passion for mine. I enjoy researching and figuring out how to advance through an application in a logical manner. I also like to illustrate simple vector graphics. 
      I enjoy HTML, CSS and JS and have immersed myself in the Vuejs framework with Typescript and Sass.
      Besides my work I also like to ride my bicycle and study to further my web development skills and UX/UI skills.`,
      image: null,
    };

    this.updateState = this.updateState.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  onClickBtn() {
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
