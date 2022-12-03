function Button(props) {
  return (
    <div className="input">
      <button
        data-type={props.dataType}
        data-index={props.dataIndex}
        onClick={(event) =>
          props.onButtonClicked(
            event,
            props.type,
            props.forId,
            props.dataType,
            props.index
          )
        }
      >
        {props.value}
      </button>
    </div>
  );
}

export default Button;
