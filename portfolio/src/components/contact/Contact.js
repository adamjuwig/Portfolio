import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h3>Get in touch...</h3>
                  <hr />
                </div>
              </div>
            </div>

            <div className="row">'
            
              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 socialtag">
                <i class="fa fa-phone fa-3x"></i>
                <div>(480) 717-1005</div>
              </div>

              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 socialtag">
              <i class="fa fa-linkedin fa-3x"></i>
              <div><a href="http://www.linkedin.com/in/adamjuwig" class="badge badge-dark">LinkedIn</a></div>            
              </div> 
              
              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 socialtag">
              <i class="fa fa-github fa-3x"></i>
              <div><a href="http://www.github.adamjuwig" class="badge badge-dark">GitHub</a></div>            
              </div> 

              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 socialtag">
              <i class="fa fa-envelope fa-3x"></i>
              <div><a href="mailto:adamjuwig@gmail.com" class="badge badge-dark">Email</a></div>            
              </div> 
              
              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 pb-4 socialtag">
              <i class="fa fa-file fa-3x"></i>
              <div><a href="mailto:adamjuwig@gmail.com" class="badge badge-dark">Resume</a></div>            
              </div>
              

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
