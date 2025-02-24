import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardStack from "./CardStack";

function ProjectsPage() {
  const projectDescriptions = {
    Conmigo:
      "Created an iOS application for Duke students that allowed them to match and message other students for meals in real time. The app was built with SwiftUI as the Front-End, a Java matching algorithm deployed in Google Cloud Functions, and Database + messaging through Firebase's Firestore. For more information reach out using the section below.",
    JAPRAmazon:
      "Created an Amazon inspired website using Python, Flask, SQLAlchemy, and BootStrap. Website features included: a login/registration system, a shopping cart, a checkout system, seller system, and an inventory system",
    IMDb_Shiny:
      "Created a web application using R Shiny that allows users to interact with the IMDb movies dataset, which contains movies from 1905-2020. Explored relations include ratings with year, budget, directors and country.",
    Superbowl_Ads:
      "Wrote a report analyzing the makeup of superbowl ads in terms of their content and audience engagement. Key metrics analyzed include: ratios of likes, dislikes, and views, sentiment analysis of ad titles and description, and ad attribute analysis.",
    Eventi:
      "As students who are part of many organizations we often run into scheduling conflicts, and see a need to create a central location for planning events. Our app aims to provide a seamless central method of scheduling meetings for groups. Users use 4-Digit Event Codes to join a group and within that group. Members in the group can then fill out their availability for the event. After a set amount of time, the creator of the event will be notified of the best times for meeting and can send out a calendar entry, invite, meeting details, etc.",
    other_proj:
      "1.LinkStrand: Restricting Enzyme simulator.\n2.Autocomplete: Recommendation algorithm.\n3.Percolation: wrote a program to find the percolation threshold via Monte Carlo simulation.\n4.Wrote a compression and decompression algorithm using Huffman coding",
  };

  return (
    <div className="page-container" id="project-page">
      <Container>
        <h1 className="section-header text-center">Software Engineering</h1>
        <Row>
          <Col sm={4} className="text-center mx-[7.5%]">
            <CardStack
              text="JARPAmazon"
              description={projectDescriptions.JAPRAmazon}
              plink="https://github.com/RRaffay/JARPA"
            />
          </Col>
          <Col sm={4} className="text-center mx-[7.5%]">
            <CardStack
              text="Conmigo"
              description={projectDescriptions.Conmigo}
              plink="https://youtu.be/Z06xoUkvIkI"
            />
          </Col>
        </Row>
        <div className="my-4" />
        <Row>
          <Col sm={4} className="text-center mx-[7.5%]">
            <CardStack
              text="Eventi"
              description={projectDescriptions.Eventi}
              plink="https://youtu.be/-nJjPTXrUgc"
            />
          </Col>
          <Col sm={4} className="text-center mx-[7.5%]">
            <CardStack
              text="Others"
              description={projectDescriptions.other_proj}
            />
          </Col>
        </Row>
        <h1 className="section-header text-center">Data Science</h1>
        <Row>
          <Col sm={4} className="text-center mx-[7.5%]">
            <CardStack
              text="Superbowl Ads"
              description={projectDescriptions.Superbowl_Ads}
              plink="https://vizdata-f21.github.io/project-1-r_mageddon/"
            />
          </Col>
          <Col sm={4} className="text-center mx-[7.5%]">
            <CardStack
              text="IMDb Shiny App"
              description={projectDescriptions.IMDb_Shiny}
              plink="https://abmartha.shinyapps.io/movieanalysis/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;
