import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bhajan from "../../Assets/Projects/bhajan.png"
import tagalong from "../../Assets/Projects/tagalong.png"
import runningtracker from "../../Assets/Projects/runningtracker.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bhajan}
              isBlog={false}
              title="Bhajan Society"
              description="Using TypeScript developed an website to update client on society activities and events. It simplifies event registration, allowing users to select dates and locations for community or religious gatherings."
              ghLink="https://github.com/Praneeth-Bayana/Bhajan-Society"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tagalong}
              isBlog={false}
              title="Tag Along"
              description="A transformative solution designed to bridge the transportation gap within university communities. Tag Along provides a dynamic platform where members with vehicles can seamlessly connect with those in need of transportation."
              ghLink="https://github.com/Praneeth-Bayana/Tag-Along"
              demoLink="https://tagalong2024.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runningtracker}
              isBlog={false}
              title="Running Tracker"
              description="A website with an intuitive user dashboard for the running tracker platform, enabling users to initiate new running sessions, document past activities, and access a comprehensive history of their workouts. "
              ghLink="https://github.com/Praneeth-Bayana/Running-Tracker"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
