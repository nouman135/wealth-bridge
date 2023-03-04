import React from "react";
import "../components/signup.css";

export default function SignupPage() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div
                style={{ background: "#609EA2" }}
                className="card-header text-center"
              >
                <h4>Create your account</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group row mb-3">
                    <label for="name" className="col-sm-3 col-form-label">
                      Name:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label for="email" className="col-sm-3 col-form-label">
                      Email:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label for="dob" className="col-sm-3 col-form-label">
                      Date of birth:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        placeholder="Enter your date of birth"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label for="contact" className="col-sm-3 col-form-label">
                      Contact number:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        className="form-control"
                        id="contact"
                        placeholder="Enter your contact number"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label for="interests" className="col-sm-3 col-form-label">
                      Area of interest:
                    </label>
                    <div className="col-sm-9">
                      <select multiple className="form-control" id="interests">
                        <option>Stocks</option>
                        <option>Bonds</option>

                        <option>Real estate</option>
                        <option>Cryptocurrency</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label for="income" className="col-sm-3 col-form-label">
                      Gross income:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        id="income"
                        placeholder="Enter your gross income"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label for="networth" className="col-sm-3 col-form-label">
                      Net worth:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        id="networth"
                        placeholder="Enter your net worth"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                      <button type="submit" style={{background:'#609EA2'}} className="btn">
                        Sign up
                      </button>
                      <button type="submit" style={{background:'#609EA2'}} className="btn">
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
