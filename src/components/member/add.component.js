import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Navbar from "../navbar.component";
import { getUser } from "../../helper/http-common";
import withRouter from "../../helper/HOC";


export default withRouter(class Add extends Component {
  constructor(props) {
    super(props);

    const udata = getUser();
    let loggedIN = true;

    if (udata == null) loggedIN = false;

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirmation =
      this.onChangePasswordConfirmation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      full_name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      loggedIN,
    };

    this.navigate = this.props.navigate;
  }

  onChangeFullName(e) {
    this.setState({ full_name: e.target.value });
  }
  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangePasswordConfirmation(e) {
    this.setState({ password_confirmation: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.full_name.length < 4 || this.state.full_name.length > 20) {
      alert("Full-name should be between 4-20 charaters");
    }
    if (this.state.phone.length < 5 || this.state.phone.length > 12) {
      alert("Phone number should be between 5-12 digits");
    }
    if (this.state.password.length < 6) {
      alert("Password should be greater then 5 charaters");
    }
    if (this.state.password !== this.state.password_confirmation) {
      alert("Enter same password in both fields");
    }

    const userObject = {
      full_name: this.state.full_name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      role: "MEMBER",
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/register", userObject)
      .then((res) => {
        if (res.data.message === "User successfully registered") {
          alert("Member added Successfully");
          window.location = "/dashboard";
        }
      })
      .catch((error) => {
        if (
          error.response.data ===
          '{"email":["The email has already been taken."]}'
        ) {
          alert("The email has already been taken.");
        }
      });

    this.setState({
      full_name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  }

  cancel() {
    this.navigate("/dashboard");
  }

  render() {
    if (this.state.loggedIN === false) {
      return <Navigate to="/dashboard" />;
    }
    return (
      <>
        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.onSubmit}>
              <h3>Add Member</h3>
              <div>
                <div className="row">
                  <div className="mb-3 col-md-6 col-12">
                    <label>Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      onChange={this.onChangeFullName}
                      name="fullname"
                      value={this.state.full_name}
                    />
                  </div>
                  <div className="mb-3 col-md-6 col-12">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter phone number"
                      onChange={this.onChangePhone}
                      name="phone"
                      value={this.state.phone}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={this.onChangeUserEmail}
                    name="email"
                    value={this.state.email}
                  />
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6 col-12">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={this.onChangePassword}
                      name="password"
                      value={this.state.password}
                    />
                  </div>
                  <div className="mb-3 col-md-6 col-12">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={this.onChangePasswordConfirmation}
                      name="confirmpassword"
                      value={this.state.password_confirmation}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
})
