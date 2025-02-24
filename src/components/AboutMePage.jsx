import React from "react";
import MyCarousel from "./Carousel";

function AboutMePage() {
  return (
    <div className="min-h-screen bg-primary py-8" id="about-me-page">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-montserrat font-bold mb-6">About Me</h1>
            <div className="text-lg space-y-4">
              <p>
                Hi! My name is Raffay and I'm a senior at Duke University,
                pursuing a B.S. in Computer Science with a minor in Economics.
              </p>
              <p>
                Ever since I was a child, I have been fascinated by
                technology. What started as a curiosity to get the newest tech
                gadget has turned into my passion for learning about new
                technologies and understanding how they affect our lives. While
                I'm still uncertain what my future holds, I am sure it will be
                somewhere in the realm of disruption through technological
                innovation.
              </p>
              <p>
                Besides my interest in technology, I am a sports
                enthusiast and an avid reader. My favorite sports include Formula
                1, Basketball (Go Duke!), Cricket, and Soccer. While I enjoy
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
