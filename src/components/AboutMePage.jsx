import React from "react";
import MyCarousel from "./Carousel";

function AboutMePage() {
  return (
    <div className="min-h-screen bg-primary flex items-center py-8" id="about-me-page">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-playfair font-bold mb-6 text-secondary/90">About Me</h1>
            <div className="text-lg space-y-4 font-inter text-secondary/80">
              <p>
                Hi! My name is Raffay and I'm a Machine Learning Engineer at EY,
                having graduated from Duke University with a B.S. in Computer Science
                and a minor in Economics.
              </p>
              <p>
                Ever since I was a child, I have been fascinated by
                technology. What started as a curiosity to get the newest tech
                gadget has turned into my passion for learning about new
                technologies and understanding how they affect our lives. This passion
                has led me to my current role where I work on applying machine learning
                to solve complex business problems.
              </p>
              <p>
                Besides my interest in technology, I am a sports
                enthusiast and an avid reader. My favorite sports include Formula
                1, Basketball (Forever Duke!), Cricket, and Soccer. While I enjoy
                reading about history, sociology, and economics, my favorite genre
                is historical fiction. Specifically, Asian historical fiction and
                some of my favorite books include The Reluctant Fundamentalist,
                The Mountains Echoed, and The Namesake.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-start">
            <MyCarousel
              width="450"
              height="400"
              alt="Raffay"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
