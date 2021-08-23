import React from "react";
import "./projects.css";

import Pitch from "./images/pitch.png";
import Budget from "./images/budget.png";
import EmpDirectory from "./images/empdirectory.png";
import Password from "./images/password.png";
import Weather from "./images/weather.png";
import NoteTaker from "./images/notetakerSS.png";

const Projects = () => {
  return (
    <div className="d-flex justify-content-center fade">
      <section className="section">
        <div className="container">
          <div className="row hidden-md-up">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card shadow-sm">
                <img
                  src={Pitch}
                  alt="Pitch A Tent"
                  style={{ height: "325px" }}
                  className="center"
                />

                <div className="card-block">
                  <h4 className="card-title text-center">Pitch A Tent</h4>

                  <a
                    href="https://adamjuwig.github.io/pitch-a-tent/"
                    target="_blank"
                    className="text-secondary float-left ml-2 projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/pitch-a-tent/"
                    target="_blank"
                    className="text-secondary float-right mr-2 projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center">
              <div className="card shadow-sm">
                <img
                  src={Budget}
                  alt="Budget Tracker"
                  style={{ height: "325px" }}
                  className="center"
                />
                <div className="card-block">
                  <h4 className="card-title text-center">
                    Budget Tracker - PWA
                  </h4>

                  <a
                    href="https://github.com/adamjuwig/Budget-Tracker"
                    target="_blank"
                    className="text-secondary d-flex justify-content-center projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card shadow-sm">
                <img
                  src={EmpDirectory}
                  alt="React Employee Directory"
                  style={{ height: "325px" }}
                  className="center"
                />
                <div className="card-block">
                  <h4 className="card-title text-center">
                    Employee Directory - React
                  </h4>

                  <a
                    href="https://github.com/adamjuwig/React-Employee-Directory"
                    target="_blank"
                    className="text-secondary d-flex justify-content-center projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* SECOND ROW */}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card shadow-sm">
                <img
                  src={Password}
                  alt="Password Generator"
                  style={{ height: "325px" }}
                  className="center"
                />
                <div className="card-block">
                  <h4 className="card-title text-center">Password Generator</h4>

                  <a
                    href="https://adamjuwig.github.io/password-generator/"
                    target="_blank"
                    className="text-secondary float-left ml-2 projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/password-generator/"
                    target="_blank"
                    className="text-secondary float-right mr-2 projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card shadow-sm">
                <img
                  src={Weather}
                  alt="Weather Dashboard"
                  style={{ height: "325px" }}
                  className="center"
                />
                <div className="card-block">
                  <h4 className="card-title text-center">Weather Dashboard</h4>

                  <a
                    href="https://adamjuwig.github.io/weather-dashboard"
                    target="_blank"
                    class="text-secondary float-left ml-2 projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/weather-dashboard"
                    target="_blank"
                    class="text-secondary float-right mr-2 projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card shadow-sm">
                <img
                  src={NoteTaker}
                  alt="Note Taker"
                  style={{ height: "325px" }}
                  className="center"
                />
                <div className="card-block">
                  <h4 className="card-title text-center">Note Taker</h4>
                  <a
                    href="https://boiling-headland-50236.herokuapp.com/"
                    target="_blank"
                    class="text-secondary float-left ml-2 projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/note-taker/"
                    target="_blank"
                    class="text-secondary float-right mr-2 projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
