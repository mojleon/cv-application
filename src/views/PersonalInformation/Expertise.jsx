import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Expertise(props) {
  return (
    <div id="expertise">
      <h1>Expertise</h1>
      {props.expertises.map((item, index, value) => (
        <div key={index}>
          <Input
            name="expertise"
            placeholder="Expertise"
            type="text"
            dataType="expertises"
            value={value[index]}
            index={index}
            onStateChange={props.onExistingStateChange}
            onDeleteButtonClicked={props.onDeleteButtonClicked}
          />
        </div>
      ))}
      <Input
        name="expertise"
        placeholder="Expertise"
        type="text"
        onStateChange={props.onStateChange}
      />
      <Button
        type="expertise"
        value="ADD"
        onButtonClicked={props.onButtonClicked}
      />
    </div>
  );
}

export default Expertise;
