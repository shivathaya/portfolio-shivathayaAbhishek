import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <p className="section__label">Skills</p>
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.group} className="skills__group">
              <p className="skills__group-label">{group.group}</p>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
