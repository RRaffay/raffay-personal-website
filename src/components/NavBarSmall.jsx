import React, { useState } from "react";
import MainImage from "../images/navbarLogo.png";
import LinkImage from "../images/linkedin-logo.png";
import MediumImage from "../images/medium-logo.png";
import { NavLink } from "react-router-dom";

function NavBarSmall() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary sticky top-0">
      <div className="px-4 mx-auto">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <NavLink to="/my-website-app">
              <img src={MainImage} className="w-[50px] h-[50px]" alt="Logo" />
            </NavLink>
            <NavLink to="/my-website-app" className="no-underline ml-2">
              <span className="text-white font-montserrat font-bold text-xl">
                Raffay's Website
              </span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/projects" className="no-underline">
              <span className="text-white font-montserrat px-3">Projects</span>
            </NavLink>
            <a
              href="https://www.linkedin.com/in/raffay-rana"
              className="mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkImage} className="w-[30px] h-[30px]" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://medium.com/@ranaraffay"
              className="mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={MediumImage} className="w-[30px] h-[30px]" alt="Medium Logo" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/projects" className="no-underline block">
              <span className="text-white font-montserrat px-3 py-2 block">
                Projects
              </span>
            </NavLink>
            <div className="flex items-center px-3 py-2">
              <a
                href="https://www.linkedin.com/in/raffay-rana"
                className="mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkImage} className="w-[30px] h-[30px]" alt="LinkedIn Logo" />
              </a>
              <a
                href="https://medium.com/@ranaraffay"
                className="mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MediumImage} className="w-[30px] h-[30px]" alt="Medium Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarSmall;
