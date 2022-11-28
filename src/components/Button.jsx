import React, { Component } from "react";

function Button(props) {
    return (
      <div className="input">
        <button
          onClick={(event) =>
            props.onButtonClicked(event, props.type)
          }
        >
          {props.value}
        </button>
      </div>
    );
}

export default Button;
