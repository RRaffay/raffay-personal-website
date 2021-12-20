import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./styles/projectsPageStyle.css";
import { Element } from "react-scroll";
import CardStack from "./CardStack";

function ProjectsPage() {
  const projectDescriptions = {
    Conmigo:
      "Created an iOS application for Duke students that allowed them to match and message other students for meals in real time. The app was built with SwiftUI as the Front-End, a Java matching algorithm deployed in Google Cloud Functions, and Database + messaging through Firebase's Firestore.",
    JAPRAmazon:
      "Created an Amazon inspired website using Python, Flask, SQLAlchemy, and BootStrap. Website features included: a login/registration system, a shopping cart, a checkout system, seller system, and an inventory system",
    IMDb_Shiny:
      "Created a web application using R Shiny that allows users to interact with the IMDb movies dataset, which contains movies from 1905-2020. Explored relations include ratings with year, budget, directors and country. The application can be found here: https://abmartha.shinyapps.io/movieanalysis/",
    Superbowl_Ads:
      "Wrote a report analyzing the makeup of superbowl ads in terms of their content and audience engagement. Key metrics analyzed include: ratios of likes, dislikes, and views, sentiment analysis of ad titles and description, and ad attribute analysis. Full writeup: https://vizdata-f21.github.io/project-1-r_mageddon/",
    other_proj:
      "1.LinkStrand: Restricting Enzyme simulator.\n2.Autocomplete: Recommendation algorithm.\n3.Percolation: wrote a program to find the percolation threshold via Monte Carlo simulation.\n4.Wrote a compression and decompression algorithm using Huffman coding",
  };

  return (
    <div className="ProjectsPage" id="project-page">
      <Container>
        <h1 className="SoftwareEng-header">Software Engineering</h1>
        <Row>
          <Col sm={4} className="col 1-swe">
            <CardStack
              text="JARPAmazon"
              description={projectDescriptions.JAPRAmazon}
            />
          </Col>
          <Col sm={4} className="col 2-swe">
            <CardStack
              text="Conmigo"
              description={projectDescriptions.Conmigo}
            />
          </Col>
          <Col sm={4} className="col 3-swe">
            <CardStack
              text="Others"
              description={projectDescriptions.other_proj}
            />
          </Col>
        </Row>
        <h1 className="DataScience-header">Data Science</h1>
        <Row className="ds-row">
          <Col sm={1} className="col 2-ds"></Col>
          <Col sm={4} className="col 1-ds">
            <CardStack
              text="Superbowl Ads"
              description={projectDescriptions.Superbowl_Ads}
            />
          </Col>
          <Col sm={2} className="col 2-ds"></Col>
          <Col sm={4} className="col 2-ds">
            <CardStack
              text="IMDb Shiny App"
              description={projectDescriptions.IMDb_Shiny}
            />
            <Col sm={1} className="col 2-ds"></Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;
