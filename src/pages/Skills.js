import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "PHP", "REACT JS", "FIREBASE", "MIT APP"],
    };
  }

  render() {
    return (
      <div className="condiv">
        <h3 className="porto">Skills</h3>
        <div class="card" style={({ width: "18rem;" }, { margin: "30px" })}>
          <h5 className="skill">Profesional Skills</h5>
          <div class="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width:" 70%"}}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >HTML</div>
          </div>
          <div className="progress">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style={{width: "50%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >CSS</div>
          </div>
          <div className="progress">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style={{width: "75%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >JavaScript</div>
          </div>
        </div>

        <div class="card" style={({ width: "18rem;" }, { margin: "30px" })}>
          <h5 className="skill">Profesional Skills</h5>
          <div class="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width:" 70%"}}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >HTML</div>
          </div>
          <div className="progress">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style={{width: "50%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >CSS</div>
          </div>
          <div className="progress">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style={{width: "75%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >JavaScript</div>
          </div>
        </div>
        <div class="card" style={({ width: "18rem;" }, { margin: "30px" })}>
          <h5 className="skill">Profesional Skills</h5>
          <div class="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width:" 70%"}}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >HTML</div>
          </div>
          <div className="progress">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style={{width: "50%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >CSS</div>
          </div>
          <div className="progress">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style={{width: "75%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >JavaScript</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
