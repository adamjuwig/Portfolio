import React from "react";
import "./about.css";
import Image from "./images/cartoonHiRes.png";

const About = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-4">
        <img
          src={Image}
          alt="Cartoon"
          style={{ width: "325px" }}
          className="center fade"
        />
      </div>
      <section className="section">
        <div className="container fade col-xs-8 col-sm-8 col-md-12 col-lg-12">
          <div className="card shadow fade">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fade d-flex justify-content-left">
                    A little bit about me...
                  </h3>
                  <hr />
                </div>
              </div>
              <div className="fade d-flex justify-content-left">
                <div className="d-flex justify-content-left">
                  Hi, I'm Adam! I am a recent graduate of the Full Stack Coding
                  bootcamp through the University of Arizona. My journey in web
                  development started back in the days of Geocities and
                  Angelfire, where I was immediately drawn in by the concept of
                  making things and colors appear on screens by writing in code.
                  I am a former professional musician and currently a restaurant
                  general manager. Both, of which have taught me about business
                  management, client relations, problem solving, organization
                  and the importance of teamwork. I have strong interests in
                  front end technologies, UI/UX design, and am always looking to
                  develop new skills. In my free time, I enjoy playing guitar,
                  hiking, fishing, camping, geocaching and DIY projects.
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center fade">
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              HTML/CSS
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              Bootstrap
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              Git Bash
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              JavaScript
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              jQuery
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              ReactJS
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              Responsive Design
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              Node.js
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              Express
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              npm
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              MySQL
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              MongoDB
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              JSON
            </span>
            <span className="badge badge-secondary text-white p-1 m-1 font-weight-light">
              AJAX
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
