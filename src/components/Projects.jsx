import { useState } from "react";
import { projects } from "../data/portfolio";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project__card ${open ? "project__card--open" : ""}`}>
      <button
        className="project__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="project__header-left">
          <span className="project__toggle">{open ? "−" : "+"}</span>
          <span className="project__name">{project.name}</span>
        </div>
        <div className="project__tags">
          {project.tech.map((t) => (
            <span key={t} className="project__tag">
              {t}
            </span>
          ))}
        </div>
      </button>

      {open && (
        <div className="project__body">
          <p className="project__desc">{project.desc}</p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <p className="section__label">Projects</p>
        <div className="project__list">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
