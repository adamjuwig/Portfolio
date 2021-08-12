import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h3>A little bit about me...</h3>
                  <hr />
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  Hi! My Name is Adam Juwig. I am a full stack web development
                  student based out of Tempe, AZ. I am currently enrolled in the
                  full stack coding bootcamp through the University of Arizona.
                  I am a former professional musician and currently a restaurant
                  general manager. Both, of which have taught me about business
                  management, client relations, problem solving, organization
                  and the importance of teamwork. I have strong interests in
                  front end technologies, UI & UX design, and am always looking
                  to develop new skills. In my free time, I enjoy cooking,
                  hiking, fishing, camping, geocaching and DIY projects.
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
          <span className="badge badge-secondary text-white p-1 m-1">HTML/CSS</span>
          <span className="badge badge-secondary text-white p-1 m-1">
            Bootstrap
          </span>
          <span className="badge badge-secondary text-white p-1 m-1">Git</span>
          <span className="badge badge-secondary text-white p-1 m-1">Bash</span>
          <span className="badge badge-secondary text-white p-1 m-1">
            JavaScript
          </span>
          <span className="badge badge-secondary text-white p-1 m-1">jQuery</span>
          <span className="badge badge-secondary text-white p-1 m-1">ReactJS</span>
          <span className="badge badge-secondary text-white p-1 m-1">
            Responsive Design
          </span>
          <span className="badge badge-secondary text-white p-1 m-1">Node.js</span>
          <span className="badge badge-secondary text-white p-1 m-1">Express</span>
          <span className="badge badge-secondary text-white p-1 m-1">npm</span>
          <span className="badge badge-secondary text-white p-1 m-1">MySQL</span>
          <span className="badge badge-secondary text-white p-1 m-1">MongoDB</span>
          <span className="badge badge-secondary text-white p-1 m-1">JSON</span>
          <span className="badge badge-secondary text-white p-1 m-1">AJAX</span>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default About;
