function Image(props) {
  return (
    <div>
      <label htmlFor={props.name} id="image-label">
        UPLOAD IMAGE
      </label>
      <input
        onChange={props.onImageChange}
        type="file"
        name={props.name}
        id={props.name}
      />
    </div>
  );
}

export default Image;
