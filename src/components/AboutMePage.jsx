import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./styles/aboutMePageStyle.css";
import MyImage from "../images/my-pic.png";
import MyCarousel from "./Carousel";
import { Link } from "react-scroll";

function AboutMePage() {
  return (
    <div className="AboutMePage" id="about-me-page">
      <Container>
        <Row>
          <Col sm={6} className="left-col">
            <h1 className="left-col-heading">About Me</h1>
            <br></br>
            <span className="left-col-text">
              Hi! My name is Raffay and I'm a senior at Duke University,
              pursuing a B.S. in Computer Science with a minor in Economics.
              <br></br>
              <br></br> Ever since I was a child, I have been fascinated by
              technology. What started as a curiosity to get the newest tech
              gadget has turned into my passion for learning about new
              technologies and understanding how they affect our lives. While
              I’m still uncertain what my future holds, I am sure it will be
              somewhere in the realm of disruption through technological
              innovation. <br></br>
              <br></br>Besides my interest in technology, I am a sports
              enthusiast and an avid reader. My favorite sports include Formula
              1, Basketball (Go Duke!), Cricket, and Soccer. While I enjoy
              reading about history, sociology, and economics, my favorite genre
              is historical fiction. Specifically, Asian historical fiction and
              some of my favorite books include The Reluctant Fundamentalist,
              The Mountains Echoed, and The Namesake.
              <br></br>
              <br></br>
              I'm always looking for new recommendations, so if you think I'd
              like something, shoot me a message{" "}
              <Link to="reach-me-page" spy={false} smooth={true} duration={75}>
                <b>below!</b>
              </Link>
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
