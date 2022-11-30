import React, { Component } from "react";

function DeleteButton(props) {
  return (
    <div
      className="delete-button"
      onClick={(event) => props.onDeleteButtonClicked(event, props.type)}
      data-type={props.dataType}
      data-index={props.dataIndex}
    >
      X
    </div>
  );
}

export default DeleteButton;
