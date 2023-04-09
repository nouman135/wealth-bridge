import React, { Component } from "react";
import { getUser } from "../helper/http-common";
import Navbar from "../components/navbar.component";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    const data = getUser();

    this.state = {
      user: data.user,
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">Profile</h1>
          <hr />
          <form className="d-flex justify-content-center">
            <div className="card w-50 h-100">
              <div className="card-body">
                <p className="card-text text-center">
                  You can delete your profile here
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <div className="my-3">
                    <label htmlFor="FirstName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirstName"
                      placeholder="Enter your first name"
                      value={this.state.user.full_name}
                      disabled
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      value={this.state.user.email}
                      placeholder="name@example.com"
                      disabled
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="Category">Investment Field</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Category"
                      // value={data.user.category}
                      placeholder="Investment Field here"
                      disabled
                    />
                  </div>
                </li>
              </ul>
              <div className="card-body text-center">
                {/* <button className="btn">Update</button> */}
                <button className="btn btn-danger ml-1">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
