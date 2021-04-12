import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <a className="navbar-brand text-white" href="#">
        adam juwig
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
              about <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/projects">
              projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
