import React from "react";
import projectsData from "../data/projectsData.json";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="s1" id="projects">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
        <div className="post-wrapper">
          <h3 style={{textAlign: "center"}}>Coming soon...</h3>
          {/* {projectsData.map((project, index) => (
            <div key={index} className="post">
              <img
                className="thumbnail"
                src={project.thumbnail}
                alt={`Project ${index + 1}`}
              />
              <div className="post-preview">
                <h6 className="post-title">{project.title}</h6>
                <p className="post-intro">{project.description}</p>
                <Link to={`/projects/${index + 1}`}>Read more...</Link>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
