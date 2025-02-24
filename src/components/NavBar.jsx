import React from "react";
import MainImage from "../images/navbarLogo.png";
import LinkImage from "../images/linkedin-logo.png";
import MediumImage from "../images/medium-logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" className="bg-secondary sticky top-0">
      <Container className="px-4 mx-auto">
        <Navbar.Brand href="#home">
          <NavLink to="/my-website-app">
            <img src={MainImage} className="w-[50px] h-[50px]" alt="Logo" />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Brand href="#home">
          <Link to="name-page" spy={false} smooth={true} duration={75}>
            <span className="text-white font-montserrat font-bold text-xl">
              Raffay's Website
            </span>
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
              className="cursor-pointer"
            >
              <span className="text-white font-montserrat px-3">About Me</span>
            </Link>
            {/* <Link
              to="blog-page"
              spy={false}
              smooth={true}
              offset={0}
              duration={75}
            >
              <span className="nav-text">Blog &nbsp;&nbsp;</span>
            </Link> */}
            <Link
              to="reach-me-page"
              spy={false}
              smooth={true}
              offset={0}
              duration={75}
              className="cursor-pointer"
            >
              <span className="text-white font-montserrat px-3">Reach Me</span>
            </Link>
            {/* <Link
              to="project-page"
              spy={false}
              smooth={true}
              offset={0}
              duration={75}
            >
              <span className="nav-text">Projects</span>
            </Link> */}
            <NavLink to="/projects" className="no-underline">
              <span className="text-white font-montserrat px-3">Projects</span>
            </NavLink>
          </Nav>

          <Nav.Link
            href="https://www.linkedin.com/in/raffay-rana"
            className="mr-2"
            target="_blank"
          >
            <img src={LinkImage} className="w-[30px] h-[30px]" alt="LinkedIn Logo" />
          </Nav.Link>
          <Nav.Link
            href="https://medium.com/@ranaraffay"
            className="mr-2"
            target="_blank"
          >
            <img src={MediumImage} className="w-[30px] h-[30px]" alt="Medium Logo" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
