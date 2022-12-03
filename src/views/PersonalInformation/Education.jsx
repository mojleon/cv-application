import Input from "../../components/Input";
import Button from "../../components/Button";

function Education(props) {
  return (
    <div id="education">
      <h1>Education</h1>
      {props.educations.map((_, index, value) => (
        <div className="template-2-grid" key={index}>
          {index}
          <Button
            type="education"
            value="REMOVE"
            dataType="educations"
            dataIndex={index}
            forId="educations-inputs"
            onButtonClicked={props.onDeleteButtonClicked}
          />
        </div>
      ))}
      <div className="original-education">
        <Input
          placeholder="Universtiry name"
          name="university"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <Input
          placeholder="City"
          name="city"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <Input
          placeholder="Degree"
          name="degree"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <Input
          placeholder="Subject"
          name="subject"
          dataType="education"
          onStateChange={props.onStateChange}
        />
        <div className="side-by-side-2">
          <Input
            placeholder="From"
            name="from"
            dataType="education"
            onStateChange={props.onStateChange}
          />
          <Input
            placeholder="To"
            name="to"
            dataType="education"
            onStateChange={props.onStateChange}
          />
        </div>
      </div>
      <Button
        type="education"
        value="ADD"
        onButtonClicked={props.onButtonClicked}
      />
    </div>
  );
}

export default Education;
