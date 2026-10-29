function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-number">0{project.id}</div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tech-list">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={project.live} target="_blank" rel="noreferrer">
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;