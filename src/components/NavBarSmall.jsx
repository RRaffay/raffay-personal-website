import React from "react";
import MainImage from "../images/navbarLogo.png";
import LinkImage from "../images/linkedin-logo.png";
import MediumImage from "../images/medium-logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function NavBarSmall() {
  return (
    <Navbar variant="dark" expand="lg" className="bg-secondary sticky top-0">
      <Container className="px-4 mx-auto">
        <Navbar.Brand href="#home">
          <NavLink to="/my-website-app">
            <img src={MainImage} className="w-[50px] h-[50px]" alt="Logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <NavLink to="/my-website-app" className="no-underline">
            <span className="text-white font-montserrat font-bold text-xl">
              Raffay's Website
            </span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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

export default NavBarSmall;
