import { meta, contact } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">© {year} {meta.name}</span>
        <div className="footer__links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
        </div>
        <span className="footer__location">{meta.location}</span>
      </div>
    </footer>
  );
}
