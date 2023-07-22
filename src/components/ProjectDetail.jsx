import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[parseInt(id) - 1];
  const navigate = useNavigate();
  const projectsSectionRef = useRef();

  useEffect(() => {
    // Scroll to the projects section after rendering the component
    projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!project) {
    return <div>Project not found.</div>;
  }

  const handleGoBack = () => {
    navigate("/#projects");
  };

  return (
    <section className="s1" style={{ height: "100vh" }}>
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>{project.title}</h3>
        <div className="post">
          <img
            className="thumbnail"
            src={project.thumbnail}
            alt={project.title}
          />
          <div className="post-preview">
            <p className="post-intro">{project.description}</p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-between",
                justifyContent: "flex-start",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#17a2b8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={handleGoBack}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
