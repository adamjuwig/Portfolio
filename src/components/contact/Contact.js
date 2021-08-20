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

            <div className="row">
            
              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
                <i class="fa fa-phone fa-3x"></i>
                <div>(480) 717-1005</div>
              </div>

              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
              <i class="fa fa-linkedin fa-3x"></i>
              <div><a href="http://www.linkedin.com/in/adamjuwig" class="badge socialLink"target="_blank" rel="noreferrer" >LinkedIn</a></div>            
              </div> 
              
              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
              <i class="fa fa-github fa-3x"></i>
              <div><a href="http://www.github.com/adamjuwig" class="badge socialLink" target="_blank" rel="noreferrer">GitHub</a></div>            
              </div> 

              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0">
              <i class="fa fa-envelope fa-3x"></i>
              <div><a href="mailto:adamjuwig@gmail.com" class="badge socialLink" target="_blank" rel="noreferrer">Email</a></div>            
              </div> 
              
              <div className="col-lg-2 ml-auto text-center mb-5 mb-lg-0 pb-4">
              <i class="fa fa-file fa-3x"></i>
              <div><a href="https://drive.google.com/file/d/1_aGNQJn2kWqFLNd4xINFBBQmTs4BivF7/view?usp=sharing" class="badge socialLink">Resume</a></div>            
              </div>
              

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
