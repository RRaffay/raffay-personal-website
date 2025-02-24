import React from "react";
import MainImage from "../images/navbarLogo.png";
import LinkImage from "../images/linkedin-logo.png";
import MediumImage from "../images/medium-logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/my-website-app">
              <img src={MainImage} className="w-[50px] h-[50px]" alt="Logo" />
            </NavLink>
            <Link to="name-page" spy={false} smooth={true} duration={75} className="ms-3">
              <span className="text-white font-montserrat font-bold text-xl">
                Raffay's Website
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <NavLink
              href="https://www.linkedin.com/in/raffay-rana"
              className="me-2"
              target="_blank"
            >
              <img src={LinkImage} className="w-[30px] h-[30px]" alt="LinkedIn Logo" />
            </NavLink>
            <NavLink
              href="https://medium.com/@ranaraffay"
              className="me-2"
              target="_blank"
            >
              <img src={MediumImage} className="w-[30px] h-[30px]" alt="Medium Logo" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
