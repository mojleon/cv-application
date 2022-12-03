function CVPreview(props) {
  return (
    <div id="extra-details">
      <div className="yellowLine"></div>
      <div className="blackLine"></div>
      <h1>
        {props.state.firstname} {props.state.lastname}
      </h1>
      <h2>{props.state.title}</h2>
      <div className="image">
        <img src={props.state.image} />
      </div>
      <div className="prefixes">
        <h1>{props.state.firstname[0]}</h1>
        <h1>{props.state.lastname[0]}</h1>
      </div>
    </div>
  );
}

export default CVPreview;
