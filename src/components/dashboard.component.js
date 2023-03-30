import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import List from "./post/list.component";
import { getUser } from "../helper/http-common";
import Navbar from "./navbar.component";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    const udata = getUser();
    let loggedIN = true;

    if (udata == null) {
      loggedIN = false;
    }

    this.state = {
      user: udata?.user,
      loggedIN,
    };
  }

  render() {
    if (this.state.loggedIN === false) {
      return <Navigate to="/sign-in" />;
    }
    return (
      <div>
        <Navbar />
        <h1 className="text-black mt-5">
          welcome to your profile{" "}
          <span className="text-primary">{this.state.user.first_name} </span>
        </h1>
        <List />
      </div>
    );
  }
}
