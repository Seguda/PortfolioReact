import React, { Component } from "react";
import logo from "./logo.svg";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import AboutMe from "./components/about/about";
import ContactInfo from "./components/contact/contact";
import FooterDate from "./components/footer/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Navbar />
        <AboutMe />
        <Projects />
        <ContactInfo />
        <FooterDate />
      </div>
    );
  }
}

export default App;
