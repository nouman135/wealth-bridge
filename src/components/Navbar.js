import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav style={{background:'#332C39'}} className="navbar navbar-light static-top">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand text-light" to="/">Wealth Bridge</Link>
          {location.pathname === "/login" || location.pathname === "/signup" ?
            <div>
              <Link style={{background:'#F0EEED'}} className="btn log-in-btn me-2" to="/login">Log In</Link>
              <Link style={{background:'#609EA2'}} className="btn me-2" to="/signup">Sign Up</Link>
              <img style={{width: '30px', color: 'white'}} src='https://www.svgrepo.com/show/43426/profile.svg' alt="Profile" />
            </div>
          :
            <div>
              <Link style={{background:'#F0EEED'}} className="btn log-in-btn me-2" to="/login">Log In</Link>
              <Link style={{background:'#609EA2'}} className="btn me-2" to="/signup">Sign Up</Link>
            </div>
          }
        </div>
      </nav>
    </div>
  )
}
