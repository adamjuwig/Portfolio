import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom shadow">
      <a className="navbar-brand text-white" href="/">
        <h3 className="textShadow">ADAM JUWIG</h3>
      </a>
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
            <a className="nav-link text-white" href="/">
              <button type="button" className="btn btn-outline-light about">about</button> <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white projects" href="/projects">
            <button type="button" className="btn btn-outline-light"> projects</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contact">
            <button type="button" className="btn btn-outline-light"> contact</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
