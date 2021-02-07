import React from "react";

import axios from "axios";
const BASE_URL =
  "https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10";
const APP_ID = "{601f6d46590f5bb5c8eb0a00}";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10`,
        { headers: { "app-id": `601f6d46590f5bb5c8eb0a00` } }
      )
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="condiv">
        <h3 className="porto">Portofolio</h3>
        {JSON.stringify(this.state.data)}

        <div class="card" style={({ width: "18rem;" }, { margin: "30px" })}>
          <img className="card" src="https://img.dummyapi.io/photo-1585948010691-75fedc3061d2.jpg" alt="Card image cap" />
          <p></p>
        </div>


       
      </div>
    );
  }
}
