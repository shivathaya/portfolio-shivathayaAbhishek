import { useState, useEffect } from "react";
import { contact, cvPath } from "../data/portfolio";

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Abhishek_Shivathaya_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
        >
          AS
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="btn btn--outline btn--sm" onClick={handleDownloadCV}>
            Download CV
          </button>
          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__mobile-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
            >
              {l.label}
            </a>
          ))}
          <button className="btn btn--accent btn--sm" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}
