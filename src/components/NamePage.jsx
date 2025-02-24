import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

function NamePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary relative overflow-hidden" id="name-page">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full -top-20 -left-20 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-secondary/10 rounded-full -bottom-10 -right-10 animate-pulse delay-700" />
      </div>

      <TypeAnimation
        sequence={[
          'Raffay\'s Website',
          1000,
          'Software, Learning, Systems',
          1000,
          'Welcome!',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="font-playfair text-7xl mb-4 text-center relative z-10 text-secondary/90"
        repeat={Infinity}
      />

      <Link
        to="about-me-page"
        spy={true}
        smooth={true}
        duration={500}
        className="mt-8 animate-bounce cursor-pointer relative z-10"
      >
        <div className="text-secondary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default NamePage;
