import React from "react";
// import 'projects.css';

import Pitch from "./images/pitch.png";
import Budget from "./images/budget.png";
import EmpDirectory from "./images/empdirectory.png";
import Password from "./images/password.png";
import Weather from "./images/weather.png";
import FirstPortfolio from "./images/firstport.png";

const Projects = () => {
  return (
<div>
    <section className="section">
    <div class="container">
      <div class="row hidden-md-up">

        <div class="col-md-4">
          <div class="card">
          <img
        src={Pitch}
        alt="Pitch A Tent"
        style={{ height: "325px" }}
        className="center"
      />
            <div class="card-block">            
              <h4 class="card-title text-center">Pitch A Tent</h4>              
              
              <a href="https://adamjuwig.github.io/pitch-a-tent/" target="_blank" className="text-secondary" rel="noreferrer">GitHub</a>
             
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
          <img
        src={Budget}
        alt="Pitch A Tent"
        style={{ height: "325px" }}
        className="center"
      />
            <div class="card-block">            
              <h4 class="card-title text-center">Budget Tracker - PWA</h4>              
              
              <a href="https://github.com/adamjuwig/Budget-Tracker" target="_blank" class="text-secondary" rel="noreferrer">GitHub</a>
             
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
          <img
        src={EmpDirectory}
        alt="Pitch A Tent"
        style={{ height: "325px" }}
        className="center"
      />
            <div class="card-block">            
              <h4 class="card-title text-center">Employee Directory</h4>              
              
              <a href="https://github.com/adamjuwig/React-Employee-Directory" target="_blank" class="text-secondary" rel="noreferrer">GitHub</a>
             
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="row">
      <div class="col-md-4">
          <div class="card">
          <img
        src={Password}
        alt="Password Generator"
        style={{ height: "325px" }}
        className="center"
      />
            <div class="card-block">            
              <h4 class="card-title text-center">Password Generator</h4>              
              
              <a href="https://adamjuwig.github.io/password-generator/" target="_blank" class="text-secondary" rel="noreferrer">GitHub</a>
             
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
          <img
        src={Weather}
        alt="Weather Dashboard"
        style={{ height: "325px" }}
        className="center"
      />
            <div class="card-block">            
              <h4 class="card-title text-center">Weather Dashboard</h4>              
              
              <a href="https://github.com/adamjuwig/weather-dashboard" target="_blank" class="text-secondary" rel="noreferrer">GitHub</a>
             
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
          <img
        src={FirstPortfolio}
        alt="First Portfolio"
        style={{ height: "325px" }}
        className="center"
      />
            <div class="card-block">            
              <h4 class="card-title text-center">First Portfolio</h4>              
              
              <a href="https://adamjuwig.github.io/responsive-portfolio/" target="_blank" class="text-secondary" rel="noreferrer">GitHub</a>
             
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
