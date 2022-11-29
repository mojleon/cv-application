import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

function Input(props) {
  return (
    <div className="input">
      <input
        onChange={props.onStateChange}
        placeholder={props.placeholder}
        type={props.type}
        data-type={props.dataType}
        data-index={props.index}
        value={props.value}
        id={props.name}
        name={props.name}
      />
      {props.onDeleteButtonClicked ? (
        <DeleteButton onDeleteButtonClicked={props.onDeleteButtonClicked} />
      ) : null}
    </div>
  );
}

export default Input;
