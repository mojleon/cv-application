import React, { Component } from "react";

import "./App.scss";
import PersonalInformation from "./views/PersonalInformation";
import CVPreview from "./views/CVPreview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      email: "",
    };

    this.updateState = this.updateState.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  updateState = (event) => {
    this.setState({
      name: event.target.value,
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
          />
          <CVPreview state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
