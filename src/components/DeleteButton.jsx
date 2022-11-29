import React, { Component } from "react";

function DeleteButton(props) {
  return (
    <div
      className="delete-button"
      onClick={(event) => props.onDeleteButtonClicked(event, props.type)}
    >
      X
    </div>
  );
}

export default DeleteButton;
