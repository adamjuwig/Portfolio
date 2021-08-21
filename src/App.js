import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/free-brands-svg-icons';
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Router>      
        <Navbar />        
        <Route exact path="/" component={About} />
        <Switch>          
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch>        
       <Footer />
    </Router>
   
    </>
  );
}

export default App;
