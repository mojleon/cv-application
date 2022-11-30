import React, { Component } from "react";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

function Experience(props) {
    return (
      <div id="experience">
        <h1>Experience</h1>
          {props.experiences.map((_, index, value) => (
            <div className="template-2-grid" key={index}>
              {index}
              <Button
                type="experience"
                value="REMOVE"
                dataType="experiences"
                dataIndex={index}
                forId="experience-inputs"
                onButtonClicked={props.onDeleteButtonClicked}
              />
            </div>
        ))}
        <div className="original-experiences">
          <Input
            placeholder="Position"
            name="position"
            dataType="experience"
            onStateChange={props.onStateChange}
          />
          <Input
            placeholder="Company"
            name="company"
            dataType="experience"
            onStateChange={props.onStateChange}
          />
          <Input
            placeholder="City"
            name="city"
            dataType="experience"
            onStateChange={props.onStateChange}
          />
          <div className="side-by-side-2">
            <Input
              placeholder="From"
              name="from"
              dataType="experience"
              onStateChange={props.onStateChange}
            />
            <Input
              placeholder="To"
              name="to"
              dataType="experience"
              onStateChange={props.onStateChange}
            />
          </div>
          <Textarea
            placeholder="Description"
            name="description"
            dataType="experience"
            onStateChange={props.onStateChange}
          />
        </div>
        <Button
          type="experience"
          value="ADD"
          onButtonClicked={props.onButtonClicked}
        />
      </div>
    );
}

export default Experience;
