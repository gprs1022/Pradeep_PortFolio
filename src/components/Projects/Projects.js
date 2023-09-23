import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Coke from "../../Assets/Projects/Coke&Code.png";
import MediStop from "../../Assets/Projects/MediStop.png";
import NetFlix from "../../Assets/Projects/NetFlix.png";
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
              imgPath={MediStop}
              isBlog={false}
              title="MediStop"
              description="MediStop is a one stop solution for all your medical needs. It is a health-tech tool which brings the whole medical world in your handset. It have a Diet Planner, Doctor Appointment System, Personal Space, and many more."
              ghLink="https://github.com/Avinash0308/MediStop-One_Stop_For_All_MediNeeds"
              demoLink="https://medistoprender.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coke}
              isBlog={false}
              title="Coke&Code"
              description="Code, Compete, Win. Build cool and crazy projects, compete with geeky minds as you, win a coke and more. The webiste basically focuses on organizing various coding contests and make you feel the real coding environment."
              ghLink="https://github.com/Avinash0308/Coke-Code"
              demoLink="https://www.gigacode.xyz/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetFlix}
              isBlog={false}
              title="NetFlix Clone"
              description="Netflix Clone is an attempt to clone the Netflix Website, where the user can 
              • Create an account using the email and can login on website.
              • Watch trailers and promos of the TV shows, web series, movies, etc"
              ghLink="https://github.com/Avinash0308/NetFlix_Clone"
              demoLink = "https://avinet.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
