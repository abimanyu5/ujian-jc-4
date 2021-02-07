import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h4>Contact</h4>

        <div class="card" style={{width: "18rem;"}, {margin:"30px"}}>
          <img className="card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauxcpaYU9ZKajqbC4AiVsdfa7eJ_AborF-w&usqp=CAU" alt="Card image cap" />
        </div>

        <h6>addres</h6>
        <h6>phone</h6>
        <h6>mail</h6>

        <div class="card" style={({ width: "18rem;" }, { margin: "30px" })}>
          <h5 className="skill">send me a message</h5>
          <form>
            <div className="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Subject"
              />
            </div>

            <button type="button" className="btn btn-primary btn-lg btn-block">send</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
