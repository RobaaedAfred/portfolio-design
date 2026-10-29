import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
const RESUME_URL = "/resume.pdf"; // file goes in /public/resume.pdf
const HAS_RESUME = true; // change to true once you add the CV

const skills = [
  "JavaScript",
  "TypesScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Better Auth & JWT",
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">FULLSTACK DEVELOPER</p>
            <h1>
              I build <span>complete</span> web applications.
            </h1>
            <p className="hero-text">
              I'm Robaaed Afred Tanik, a full stack developer who builds fast,
              secure and user-friendly applications, from the database and API
              to the interface, using React, Next.js, Node.js and MongoDB.
            </p>
<div className="hero-actions">
  <Link className="button primary" to="/projects">
    View My Work
  </Link>
  <Link className="button secondary" to="/contact">
    Contact Me
  </Link>
  {HAS_RESUME && (
    <a
      className="button secondary"
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  )}
</div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top">
                <span></span><span></span><span></span>
              </div>
              <pre>{`const developer = {
  name: "Tanik",
  role: "Full Stack Developer",
  frontend: ["React", "Next.js", "Tailwind"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "SQL"],
  auth: ["Better Auth", "JWT"],
  available: true
};`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="WHAT I DO"
            title="Skills & technologies"
            text="A full stack toolkit for taking ideas from database to deployed product."
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>◆</span>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title="Recent projects"
            text="A few projects that show how I build across the whole stack."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>

          <div className="center">
            <Link className="button secondary" to="/projects">
              See All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;