/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import profilepic from "../img/icon-people.png";
import Social from "../components/Social";
class Home extends Component {
  render() {
    return (
      <div className="condiv">
        <img src={profilepic} className="profilepic"></img>
        <h1 className="subtopic">Hi, i'm Abimanyu</h1>
        <p>web developer</p>
        <p>Founder of mejakoding.com. Sometimes works as a freelancer.</p>
        <div className="email">
          <p>email: john@dotrex.co / phone +123 456 789 111</p>
        </div>

        <Social />
      </div>
    );
  }
}
export default Home;
