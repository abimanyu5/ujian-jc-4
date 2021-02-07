import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Route exact path="/">
         
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/portofolio">
          <Portofolio />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </div>
    </Router>
  );
}

export default App;
