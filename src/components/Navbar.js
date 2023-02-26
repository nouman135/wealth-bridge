import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Wealth Bridge</Link>
                <Link className="btn btn-light log-in-btn" to="/login">Log In</Link>
                <Link className="btn btn-primary" to="/signup">Sign Up</Link>
            </div>
        </nav>
    </div>
  )
}
