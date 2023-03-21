import React, { Component } from "react";
import { Navigate } from "react-router-dom";

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
      user: odata.user,
      loggedIN,
    };
  }

  render() {
    if (this.state.loggedIN === false) {
      return <Navigate to="/sign-in" />;
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/dashboard">
              Wealth Bridge Investments!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/dashboard"
                  >
                    RM Dashboard
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <a class="nav-link" href="/logout">
                  logout{" "}
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

