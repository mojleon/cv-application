import React, { Component } from "react";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

function NameAndJob(props) {
  return (
    <div id="name-and-job">
      <h3>Name and job</h3>
      <Input
        placeholder="First name"
        name="firstname"
        onStateChange={props.onStateChange}
      />
      <Input
        placeholder="Last name"
        name="lastname"
        onStateChange={props.onStateChange}
      />
      <Input
        placeholder="Title"
        name="title"
        onStateChange={props.onStateChange}
      />
      <Textarea
        placeholder="Profile"
        name="profile"
        onStateChange={props.onStateChange}
      />
    </div>
  );
}

export default NameAndJob;
