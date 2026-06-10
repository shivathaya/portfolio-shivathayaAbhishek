import { useState, useEffect } from "react";
import { meta, contact, cvPath } from "../data/portfolio";

function useTypewriter(text, speed = 55, startDelay = 500) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

function Cursor({ done }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="cursor"
      style={{ opacity: done && !visible ? 0 : 1 }}
    />
  );
}

export default function Hero() {
  const { displayed, done } = useTypewriter(meta.name);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Abhishek_Shivathaya_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">


        {/* Photo + Name + Title + Badge row */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "28px", flexWrap: "wrap" }}>
          <img
            src="/photo.png"
            alt="Abhishek Shivathaya"
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              border: "2px solid #E8E8E5"
            }}
          />
          <div>
            <h1 className="hero__name" style={{ marginBottom: "6px" }}>
              {displayed}
              <Cursor done={done} />
            </h1>
            <h2 className="hero__title" style={{ marginBottom: "10px" }}>
              {meta.title}
            </h2>
            {meta.available && (
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                Open to work
              </div>
            )}
          </div>
        </div>

        <p className="hero__tagline">{meta.tagline}</p>
        <p className="hero__about">{meta.about}</p>

        <div className="hero__actions">
          <button className="btn btn--accent" onClick={() => scrollTo("#contact")}>
            Get in touch
          </button>
          <button className="btn btn--outline" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn btn--ghost" onClick={() => scrollTo("#projects")}>
            View projects →
          </button>
        </div>

        <div className="hero__socials">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hero__social-link">
            GitHub
          </a>
          <span className="hero__social-sep">·</span>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link">
            LinkedIn
          </a>
          <span className="hero__social-sep">·</span>
          <a href={`mailto:${contact.email}`} className="hero__social-link">
            Email
          </a>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}