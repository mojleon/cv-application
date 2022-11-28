import React, { Component } from "react";

function Textarea(props) {
    return (
      <div className="input">
        <textarea
          placeholder={props.placeholder}
          name={props.name}
          id={props.name}
          data-type={props.dataType}
          onChange={props.onStateChange}
        />
      </div>
    );
}

export default Textarea;
