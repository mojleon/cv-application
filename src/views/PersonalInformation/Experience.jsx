import React, { Component } from "react";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

function Experience(props) {
    return (
      <div id="experience">
        <h1>Experience</h1>
          {props.experiences.map((_, index, value) => (
            <div key={index}>
              <Input
              value={value[index].position}
              placeholder="Position"
              name="position"
              dataType="experience"
              onStateChange={props.onStateChange}
              />
              <Input
                value={value[index].company}
                placeholder="Company"
                name="company"
                dataType="experience"
                onStateChange={props.onStateChange}
              />
              <Input
                value={value[index].city}
                placeholder="City"
                name="city"
                dataType="experience"
                onStateChange={props.onStateChange}
              />
              <div className="side-by-side-2">
                <Input
                  value={value[index].from}
                  placeholder="From"
                  name="from"
                  dataType="experience"
                  onStateChange={props.onStateChange}
                />
                <Input
                  value={value[index].to}
                  placeholder="To"
                  name="to"
                  dataType="experience"
                  onStateChange={props.onStateChange}
                />
              </div>
              <Textarea
                value={value[index].description}
                placeholder="Description"
                name="description"
                dataType="experience"
                onStateChange={props.onStateChange}
              />
              <Button
                type="experience"
                value="REMOVE"
                dataType="experiences"
                dataIndex={index}
                onButtonClicked={props.onDeleteButtonClicked}
              />
            </div>
        ))}
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
        <Button
          type="experience"
          value="ADD"
          onButtonClicked={props.onButtonClicked}
        />
      </div>
    );
}

export default Experience;
