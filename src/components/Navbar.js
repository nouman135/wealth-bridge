import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './post/HomePage'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand ml-3" href="#">
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to='./'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='./dashboard'>
                  Dashboard
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
