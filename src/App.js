import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Highlights from "./components/Highlights/Highlights";
import Interests from "./components/Interests/Interests";
import "./App.css";

class Portfolio extends Component {
  state = {
    collapsed: null,
    isGr: null
  };

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.switchLang = this.switchLang.bind(this);
    this.state = {
      collapsed: true,
      isGr: false
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  switchLang() {
    if (this.state.isGr) {
      let newState = { ...this.state.isGr, isGr: false };
      this.setState(newState);
    } else {
      let newState = { ...this.state.isGr, isGr: true };
      this.setState(newState);
    }
  }

  render() {
    // Load the right flag for language layout
    var lang_icon = !this.state.isGr ? (
      <img className="flag" src={require("./assets/images/GR.png")} alt="eng" />
    ) : (
      <img className="flag" src={require("./assets/images/GB.png")} alt="gr" />
    );

    return (
      <div className="App">
        {/* Language Switcher */}
        <div className="switcher" onClick={this.switchLang}>
          {lang_icon}
        </div>
        {/* Navbar */}
        <Navbar
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav">
          <div className="navbar-brand">
            {/* Name on navbar */}
            <span className="d-block d-lg-none">
              {this.state.isGr ? "Ευάγγελος Γκαραγκάνης" : "Vangelis Garaganis"}
            </span>
            {/* Image on navbar */}
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                style={{ cursor: "pointer" }}
                src={require("./assets/images/profile.jpg")}
                alt=""
                onClick={this.scrollToTop}
              />
            </span>
          </div>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {this.state.isGr ? "Ποιος Ειμαι" : "About"}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {this.state.isGr ? "Εκπαιδευση" : "Education"}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {this.state.isGr ? "Ικανοτητες" : "Skills"}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {this.state.isGr ? "Δουλειες Μου" : "Projects"}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="highlights"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {this.state.isGr ? "Αξιοσημειωτα" : "Highlights"}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="interests"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {this.state.isGr ? "Ενδιαφεροντα" : "Interests"}
                </Link>
              </NavItem>
              <NavItem>
                <p
                  style={{ cursor: "pointer" }}
                  className="nav-link-switcher"
                  onClick={this.switchLang}
                >
                  {this.state.isGr ? "switch to english" : "switch to greek"}
                </p>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* Container */}
        <div className="container-fluid p-1">
          {/* About Section */}
          <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
          >
            <About isgreek={this.state.isGr} />
          </section>
          {/* Education Section */}
          <hr className="m-0" />
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
          >
            <Education isgreek={this.state.isGr} />
          </section>
          {/* Skills Section */}
          <hr className="m-0" />
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
          >
            <Skills isgreek={this.state.isGr} />
          </section>
          {/* Projects Section */}
          <hr className="m-0" />
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="projects"
          >
            <Projects isgreek={this.state.isGr} />
          </section>
          {/* Highlights Section */}
          <hr className="m-0" />
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="highlights"
          >
            <Highlights isgreek={this.state.isGr} />
          </section>
          {/* Intersets Section */}
          <hr className="m-0" />
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="interests"
          >
            <Interests isgreek={this.state.isGr} />
          </section>
        </div>
      </div>
    );
  }
}

export default Portfolio;
