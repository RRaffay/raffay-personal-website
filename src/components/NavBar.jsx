import React from "react";
import MainImage from "../images/navbarLogo.png";
import LinkImage from "../images/linkedin-logo.png";
import MediumImage from "../images/medium-logo.png";
import GitHubImage from "../images/github-logo.png";

function NavBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div onClick={scrollToTop} className="cursor-pointer">
              <img src={MainImage} className="w-[50px] h-[50px]" alt="Logo" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/raffay-rana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkImage} className="w-[30px] h-[30px]" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://medium.com/@ranaraffay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={MediumImage} className="w-[30px] h-[30px]" alt="Medium Logo" />
            </a>
            <a
              href="https://github.com/RRaffay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubImage} className="w-[30px] h-[30px]" alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
