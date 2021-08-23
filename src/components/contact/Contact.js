import React from "react";
import "./contact.css";
import Typical from 'react-typical';

//TYPEWRITER TEXT ANIMATION

const Contact = () => {
  return (
    <div className="contact">
      <div className="typeEffect">
      <Typical
        steps={["Let's work together...", 1000]
      }
        loop={Infinity}
        wrapper="p"
      />
      </div>
      {/* CONTACT INFO */}
      <div>
        <section className="section">
          <div className="container col-sm-10 col-md-8 col-lg-12">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="d-flex justify-content-left">Get in touch...</h3>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
                  <i class="fa fa-phone fa-3x"></i>
                  <div>
                  <p className="badge socialLink font-weight-light">(480) 717-1005</p>
                  </div>
                </div>

                <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
                  <i class="fa fa-linkedin fa-3x"></i>
                  <div>
                    <a
                      href="http://www.linkedin.com/in/adamjuwig"
                      class="badge socialLink font-weight-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
                  <i class="fa fa-github fa-3x"></i>
                  <div>
                    <a
                      href="http://www.github.com/adamjuwig"
                      class="badge socialLink font-weight-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
                  <i class="fa fa-envelope fa-3x"></i>
                  <div>
                    <a
                      href="mailto:adamjuwig@gmail.com"
                      class="badge socialLink font-weight-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Email
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 pb-4">
                  <i class="fa fa-file fa-3x"></i>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1_aGNQJn2kWqFLNd4xINFBBQmTs4BivF7/view?usp=sharing"
                      class="badge socialLink font-weight-light"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
