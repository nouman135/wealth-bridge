import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import List from "./post/list.component";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    const udata = localStorage.getItem("user");
    const odata = JSON.parse(udata);
    let loggedIN = true;
    if (udata == null) {
      loggedIN = false;
    }
    this.state = {
      user: odata?.user,
      loggedIN,
    };
  }

  render() {
    if (this.state.loggedIN === false) {
      return <Navigate to="/sign-in" />;
    }
    return (
      <div>
        <h1 className="text-black mt-5">
          welcome to your profile{" "}
          <span className="text-primary">{this.state.user.first_name} </span>
        </h1>
        <List />
      </div>
    );
  }
}
