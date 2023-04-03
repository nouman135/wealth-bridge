import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import List from "./post/list.component";
import { getUser } from "../helper/http-common";
import Navbar from "./navbar.component";
import withRouter from "../helper/HOC";
import "./dashboard.component.css";

export default withRouter(class Dashboard extends Component {
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

    this.addPost = this.addPost.bind(this);
    this.addMember = this.addMember.bind(this);

    this.navigate = this.props.navigate;
  }

  addPost() {
    this.navigate(`/add-post/_add`);
  }

  addMember() {
    this.navigate(`/add-member`);
  }

  render() {
    if (this.state.loggedIN === false) {
      return <Navigate to="/sign-in" />;
    }
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <header className="">
            <h2>Dashboard</h2>
            <div className="header-buttons">
              <button onClick={() => this.addMember()}>Add RM</button>
              <button onClick={() => this.addPost()}>Add New Idea</button>
            </div>
          </header>
        </div>
        <List />
      </>
    );
  }
})
