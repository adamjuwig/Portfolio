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
    <div className="p-4 d-flex justify-content-center fade">
      <div className="container-fluid justify-content-center">
        {/* TOP ROW */}
        <div className="row hidden-lg-up">
          {/* PITCH A TENT */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-4">
            <div className="card shadow-sm">
              <img
                src={Pitch}
                alt="Pitch A Tent"
                style={{ height: "325px" }}
                className="center img-fluid"
              />

              <div class="overlay">
                <div class="text">
                  <p className="h6">
                    Pitch A Tent is a state campsite search tool that uses the
                    National Park Service campsite API. When a state is searched
                    using the drop-down menu; the site will list four campsites
                    in that state; along with weather in three major cities
                    across that state.
                  </p>

                  <a
                    href="https://adamjuwig.github.io/pitch-a-tent/"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/pitch-a-tent/"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
              <div className="card-block">
                <h4 className="card-title text-center">Pitch A Tent</h4>
              </div>
            </div>
          </div>
          {/* NOTE TAKER */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-4">
            <div className="card shadow-sm">
              <img
                src={NoteTaker}
                alt="Note Taker"
                style={{ height: "325px" }}
                className="center"
              />
              <div class="overlay">
                <div class="text">
                  <p className="h6">
                    Create a note by adding a title and text to body then saving
                    by clicking the save icon in the top right corner. Users can
                    delete old notes by clicking the trash can icon in the top
                    right corner. This app uses an Express.JS back end - note
                    data is sent and retrieved via JSON file.
                  </p>

                  <a
                    href="https://boiling-headland-50236.herokuapp.com/"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/note-taker"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
              <div className="card-block">
                <h4 className="card-title text-center">Note Taker</h4>
              </div>
            </div>
          </div>
          {/* REACT EMPLOYEE DIRECTORY */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-4">
            <div className="card shadow-sm">
              <img
                src={EmpDirectory}
                alt="React Employee Directory"
                style={{ height: "325px" }}
                className="center"
              />
              <div class="overlay">
                <div class="text">
                  <p className="h6 d-flex">
                    Employee Directory is an application built using React JS.
                    The purpose of this project was to create an application for
                    employees and managers to view non-sensitive data about
                    other employees. The application required an API to pull
                    data from Random User Generator, which requests are made by
                    the Axios NPM library. By use of React components, states
                    and hooks; a user can sort by first name or search by last
                    name.
                  </p>
                  <a
                    href="https://github.com/adamjuwig/budget-tracker/"
                    target="_blank"
                    className="text-secondary font-weight-bold text-center projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
              <div className="card-block">
                <h4 className="card-title text-center">
                  Employee Directory - React
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row">
          {/* PASSWORD GENERATOR */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-4">
            <div className="card shadow-sm">
              <img
                src={Password}
                alt="Password Generator"
                style={{ height: "325px" }}
                className="center img-fluid"
              />
              <div class="overlay">
                <div class="text">
                  <p className="h6">
                    The objective of this application allows a user to generate
                    a random password using vanilla JS. The password criteria is
                    ran inside of a function to generate the password. Within
                    this function, variables are defined to each specific
                    criteria the user selects. Using the concat method,
                    respective variables are assigned to an array in which the
                    user selects for their specific criteria. With using a loop,
                    the selected criteria will then generate a random password
                    for the user.
                  </p>

                  <a
                    href="https://adamjuwig.github.io/password-generator/"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/password-generator/"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
              <div className="card-block">
                <h4 className="card-title text-center">Password Generator</h4>
              </div>
            </div>
          </div>
          {/* WEATHER DASHBOARD */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-4">
            <div className="card shadow-sm">
              <img
                src={Weather}
                alt="Weather Dashboard"
                style={{ height: "325px" }}
                className="center"
              />
              <div class="overlay">
                <div class="text">
                  <p className="h6">
                    For this project, we were to create a simple weather
                    application by using AJAX calls to multiple API databases to
                    retrieve information depending on what the user searched
                    for. API's used in this application were from OpenWeather
                    using calls for daily, five day and UV data. The HTML
                    document is changed dynamically by using jQuery.
                  </p>

                  <a
                    href="https://adamjuwig.github.io/weather-dashboard/"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/adamjuwig/weather-dashboard"
                    target="_blank"
                    className="text-secondary font-weight-bold d-block projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
              <div className="card-block">
                <h4 className="card-title text-center">Weather Dashboard</h4>
              </div>
            </div>
          </div>
          {/* BUDGET TRACKER */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-4">
            <div className="card shadow-sm">
              <img
                src={Budget}
                alt="Budget Tracker"
                style={{ height: "325px" }}
                className="center img-thumbnail"
              />
              <div class="overlay">
                <div class="text">
                  <p className="h6">
                    A progressive web application that utilizes a service worker
                    to allow users to enter online and offline data.
                  </p>
                  <a
                    href="https://github.com/adamjuwig/budget-tracker/"
                    target="_blank"
                    className="text-secondary font-weight-bold text-center projectLink"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
              <div className="card-block">
                <h4 className="card-title text-center">Budget Tracker - PWA</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
