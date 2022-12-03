function CVPreview(props) {
  return (
    <div className="education">
      <h1>Education</h1>
      {props.educations.map((item, index) => (
        <div key={index}>
          <h2>{item.university}</h2>
          <h3>{item.subject}</h3>
          <i>
            {item.city} | {item.degree} | {item.from} - {item.to}
          </i>
        </div>
      ))}
    </div>
  );
}

export default CVPreview;
