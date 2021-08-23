import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-custom shadow">
      <Link to="/" className="navbar-brand text-white">
        <h3 className="textShadow logo">ADAM JUWIG</h3>
      </Link>
      <button
        class="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <ul className="navbar-nav ml-auto text-white">
          <li className="nav-item active d-inline">
            <Link to="/" className="nav-link text-white">
              <button type="button" className="btn btn-outline-light">
                about
              </button>{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link text-white">
              <button type="button" className="btn btn-outline-light">
                projects
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white">
              <button type="button" className="btn btn-outline-light">
                contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
