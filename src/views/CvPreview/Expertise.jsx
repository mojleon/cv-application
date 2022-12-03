function Expertise(props) {
  return (
    <div className="expertise">
      <h1>Expertise</h1>
      <ul>
        {props.expertises.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expertise;
