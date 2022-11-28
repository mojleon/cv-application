import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Education(props) {
    return (
      <div id="education">
        <h1>Education</h1>
        <Input
          placeholder="Universtiry name"
          name="university"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <Input
          placeholder="City"
          name="city"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <Input
          placeholder="Degree"
          name="degree"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <Input
          placeholder="Subject"
          name="subject"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <div className="side-by-side-2">
          <Input
            placeholder="From"
            name="from"
            dataType="education"
            onStateChange={props.onStateChange}
          />
          <Input
            placeholder="To"
            name="to"
            dataType="education"
            onStateChange={props.onStateChange}
          />
        </div>
        <Button
          type="education"
          value="ADD"
          onButtonClicked={props.onButtonClicked}
        />
      </div>
    );
}

export default Education;
