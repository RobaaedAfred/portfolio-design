import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="MY WORK"
          title="Projects"
          text="Real projects built with React, Next.js, Node.js and MongoDB, covering everything from the UI and API to authentication and data."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;