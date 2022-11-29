import React, { Component } from "react";

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
      </div>
    );
}

export default Input;
