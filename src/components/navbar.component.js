import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
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
    const isLoggedIn = this.state.loggedIN;
    let button;

    if (isLoggedIn) {
      button = (
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            {" "}
            logout{" "}
          </Link>
        </li>
      );
    } else {
      button = (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/sign-in">
              {" "}
              login{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sign-up">
              {" "}
              Sign up{" "}
            </Link>
          </li>
        </>
      );
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand ml-3" href="/">
              Wealth Bridge
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/RMDashboard">
                    RMDashboard
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">{button}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
