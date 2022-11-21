import React, { Component } from "react";
import ReactToPrint from 'react-to-print';
import CVPreview from "../views/CVPreview";

class Print extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <ReactToPrint
          trigger={() => {
            return <button>{this.props.value}</button>
          }}
          content={()=>this.componentRef}
          documentTitle="CV"
          copyStyles={true}
          />
          <div className="hide">
            <div ref={el=>{this.componentRef=el}}>
              <CVPreview state={this.props.state} />
            </div>
        </div>
      </div>
    );
  }
}

export default Print;