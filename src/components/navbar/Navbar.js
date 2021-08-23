import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom shadow">
      <Link to ="/" className="navbar-brand text-white">
        <h3 className="textShadow">ADAM JUWIG</h3>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto text-white">
          <li className="nav-item active">
            <Link to="/" className="nav-link text-white">
              <button type="button" className="btn btn-outline-light">about</button> <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link text-white">
            <button type="button" className="btn btn-outline-light projects">projects</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white">
            <button type="button" className="btn btn-outline-light">contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;