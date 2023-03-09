import "../css/Background.css";
import "../css/Projects.css";

function ProjectsTile({ title, image }) {
  return (
    <div className="project-tile">
      <img src={image} alt={title} />
      <div className="project-tile-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

function Projects({ projects }) {
  return (
    <div className="background-image" id="projects">
      <div className="projects-container">
        <div className="project-tiles">
          {projects.map((project) => (
            <ProjectsTile key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
