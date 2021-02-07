import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Resume extends Component {
  render() {
    return (
      <div className="condiv">
        <h3 className="judul" style={{color: "blue;"}}>Resume</h3>
        <h4 className="judul">Education</h4>
        <div class="card" style={{width: "18rem;"}, {margin:"30px"}}>
          <div class="card-body">
            <h5 class="card-title">Website developer</h5>
            <h6 class="card-subtitle mb-2 text-muted">juara coding</h6>
            <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</h6>
          </div>
        </div>

        <div class="card" style={{width: "18rem;"}, {margin:"30px"}}>
          <div class="card-body">
            <h5 class="card-title">Website developer</h5>
            <h6 class="card-subtitle mb-2 text-muted">juara coding</h6>
            <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</h6>
          </div>
        </div> <div class="card" style={{width: "18rem;"}, {margin:"30px"}}>
          <div class="card-body">
            <h5 class="card-title">Website developer</h5>
            <h6 class="card-subtitle mb-2 text-muted">juara coding</h6>
            <h6 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</h6>
          </div>
        </div>
      </div>
    );
  }
}
