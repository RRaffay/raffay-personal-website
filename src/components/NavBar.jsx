import React from "react";
import ReactDOM from "react-dom";
import MainImage from "../images/navbarLogo.png";
import LinkImage from "../images/linkedin-logo.png";
import TwitImage from "../images/twitter-logo.png";
import InstaImage from "../images/instagram-logo.png";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "./styles/navbarStyle.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" className="nav-bg" sticky="top">
      <Container bsPrefix="nav-container">
        <Navbar.Brand href="#home">
          <Link to="name-page" spy={false} smooth={true} duration={75}>
            <img src={MainImage} width="50" height="50" alt="" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <Link to="name-page" spy={false} smooth={true} duration={75}>
            <span className="nav-text-main">Raffay's Website </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="about-me-page"
              spy={false}
              smooth={true}
              offset={0}
              duration={75}
            >
              <span className="nav-text">About Me &nbsp;&nbsp;</span>
            </Link>
            <Link
              to="project-page"
              spy={false}
              smooth={true}
              offset={0}
              duration={75}
            >
              <span className="nav-text">Projects &nbsp;&nbsp;</span>
            </Link>
            <Link
              to="reach-me-page"
              spy={false}
              smooth={true}
              offset={0}
              duration={75}
            >
              <span className="nav-text">Reach Me</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          href="https://www.linkedin.com/in/raffay-rana"
          className="mr-auto"
          target="_blank"
        >
          <img src={LinkImage} width="30" height="30" alt="LinkedIn Logo" />{" "}
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
