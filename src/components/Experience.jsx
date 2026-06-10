import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <p className="section__label">Experience</p>
        <div className="exp__list">
          {experience.map((exp, i) => (
            <div key={i} className="exp__item">
              <div className="exp__meta">
                <p className="exp__period">{exp.period}</p>
                <p className="exp__company">{exp.company}</p>
                <p className="exp__role">{exp.role}</p>
              </div>
              <div className="exp__content">
                <p className="exp__project">{exp.project}</p>
                <ul className="exp__bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="exp__bullet">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
