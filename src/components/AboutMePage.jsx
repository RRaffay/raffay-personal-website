import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./styles/aboutMePageStyle.css";
import MyImage from "../images/my-pic.png";
import MyCarousel from "./Carousel";

function AboutMePage() {
  return (
    <div className="AboutMePage" id="about-me-page">
      <Container>
        <Row>
          <Col sm={6} className="left-col">
            <h1 className="left-col-heading">About Me</h1>
            <br></br>
            <span className="left-col-text">
              Hi! My name is Raffay and I'm currently a junior at Duke
              University, pursing a B.S. in Computer Science with a minor in
              Economics and a certificate in Markets and Management.<br></br>
              <br></br> Since a young age I have been fascinated by technology.
              What started as a curiosity for the newest tech gadget has morphed
              into my passion for learning about new technologies and
              understanding the ways they impact how we live our lives. While
              I’m still uncertain as to what exactly my future holds, I am sure
              it will be somewhere in the realm of technological innovation.{" "}
              <br></br>
              <br></br>Besides my interest in technology, I am a sports
              enthusiast and an avid reader. My favorite sports include Formula
              1, Basketball (Go Duke!), Cricket and Soccer. My favorite genre is
              historical fiction, particularly South Asian historical fiction,
              and some of favorite books include The Reluctant Fundamentalist,
              The Mountains Echoed, and The Namesake.
            </span>
          </Col>
          <Col sm={6} className="right-col">
            {/* <img
              src={MyImage}
              width="450"
              height="400"
              alt="Raffay"
              className="right-col-image"
            ></img> */}
            <MyCarousel
              width="450"
              height="400"
              alt="Raffay"
              className="right-col-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMePage;
