import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a project",
      link: "asdadsa",
    },
    {
      title: "Project 2",
      description: "This is a project",
      link: "asdadsa",
    },
  ];

  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
        <div className="post-wrapper">
          {/* Project posts */}
          {projects.map((project, index) => (
            <div key={index} className="post">
              <img
                className="thumbnail"
                src="https://source.unsplash.com/random/400x200"
                alt={`Project ${index + 1}`}
              />
              <div className="post-preview">
                <h6 className="post-title">{project.title}</h6>
                <p className="post-intro">{project.description}</p>
                <a href="">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
