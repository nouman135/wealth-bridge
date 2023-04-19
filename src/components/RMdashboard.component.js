import React from "react";
import "./Sidenav.css"
import { Link } from "react-router-dom";

export default function RMDashboard() {
  return (
    <>
    <div><h1>Welcome to RM dashboard</h1></div>
    <div className="sidenav">
      <ul>
                  <li><a href="#Home">Home</a></li>
                  <li><a href="/PostedIdea">Posted ideas</a></li>
                  <li><a href="/Clients">Clients</a></li>
                  <li className="nav-item">
                  <Link to="/logout">
                     {" "}
                   logout{" "}
          </Link>
        </li>
                  
      </ul>
    </div>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            <div>
             <h1>WealthBridge Investments </h1>
             <p>
                  Investing in emerging markets can offer significant growth
                  opportunities for investors looking to diversify their
                  portfolios. Emerging markets, such as China, India, and
                  Brazil, are characterized by their high-growth potential and
                  rapidly expanding economies. While investing in these markets
                  can be more volatile and riskier than investing in developed
                  markets, it can also yield higher returns in the long run.{" "}
              </p>
             </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}