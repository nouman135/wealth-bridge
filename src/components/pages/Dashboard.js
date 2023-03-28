import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Dashboard</h1>
        <hr />
        <form>
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card  h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Profile</h5>
                <p className="card-text text-center">
                  You can update and delete your profile here
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <div class="form my-3">
                    <label for="FirstName">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="FirstName"
                      placeholder="Enter your first name"
                      value="John"
                      disabled
                    />
                  </div>
                  <div class="form my-3">
                    <label for="LastName">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="LastName"
                      placeholder="Enter your last name"
                      value="Doe"
                      disabled
                    />
                  </div>
                  <div class="form my-3">
                    <label for="Email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="Email"
                      value="johndoe@gmail.com"
                      placeholder="name@example.com"
                      disabled
                    />
                  </div>
                  <div class="form my-3">
                    <label for="Category">Investment Field</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Category"
                      value="Crypto"
                      placeholder="Investment Field here"
                    />
                  </div>
                  <div class="form my-3">
                    <label for="Password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="Password"
                      placeholder="********"
                    />
                  </div>
                  <div className="text-center"></div>
                </li>
              </ul>
              <div className="card-body text-center">
                <button className="btn">Update</button>
                <button className="btn btn-danger ml-1">Delete</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
