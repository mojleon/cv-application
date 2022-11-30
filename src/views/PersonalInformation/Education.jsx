import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Education(props) {
    return (
      <div id="education">
        <h1>Education</h1>
        {props.educations.map((_, index, value) => (
            <div key={index}>
              <Input
                value={value[index].university}
                placeholder="Universtiry name"
                name="university"
                dataType="education"
                onStateChange={props.onStateChange}
              />
              <Input
                value={value[index].city}
                placeholder="City"
                name="city"
                dataType="education"
                onStateChange={props.onStateChange}
              />
              <Input
                value={value[index].degree}
                placeholder="Degree"
                name="degree"
                dataType="education"
                onStateChange={props.onStateChange}
              />
              <Input
                value={value[index].subject}
                placeholder="Subject"
                name="subject"
                dataType="education"
                onStateChange={props.onStateChange}
              />
              <div className="side-by-side-2">
                <Input
                  value={value[index].from}
                  placeholder="From"
                  name="from"
                  dataType="education"
                  onStateChange={props.onStateChange}
                />
                <Input
                  value={value[index].to}
                  placeholder="To"
                  name="to"
                  dataType="education"
                  onStateChange={props.onStateChange}
                />
              </div>
              <Button
                type="education"
                value="REMOVE"
                dataType="educations"
                dataIndex={index}
                onButtonClicked={props.onDeleteButtonClicked}
              />
            </div>
        ))}
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
        <Button
          type="education"
          value="ADD"
          onButtonClicked={props.onButtonClicked}
        />
      </div>
    );
}

export default Education;
