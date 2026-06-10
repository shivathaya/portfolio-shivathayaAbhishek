import { useState } from "react";
import { contact, cvPath } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
    <section id="contact" className="section section--last">
      <div className="section__inner">
        <p className="section__label">Contact</p>

        <div className="contact__grid">
          <div className="contact__left">
            <h3 className="contact__heading">
              Open to the right opportunity.
            </h3>
            <p className="contact__body">
              Targeting Java Backend and Full Stack roles at MNCs — India and UAE.
              If you need someone who knows banking systems, microservices at scale,
              and can move fast, let's talk.
            </p>
            <div className="contact__cta-row">
              <a href={`mailto:${contact.email}`} className="btn btn--accent">
                Send an email
              </a>
              <button className="btn btn--outline" onClick={handleDownloadCV}>
                Download CV
              </button>
            </div>
          </div>

          <div className="contact__links">
            <ContactItem
              label="Email"
              value={contact.email}
              action={
                <button className="contact__copy" onClick={copyEmail}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              }
            />
            <ContactItem
              label="GitHub"
              value={contact.github.replace("https://", "")}
              action={
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact__copy">
                  Visit
                </a>
              }
            />
            <ContactItem
              label="LinkedIn"
              value={contact.linkedin.replace("https://", "")}
              action={
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact__copy">
                  Visit
                </a>
              }
            />
            <ContactItem label="Location" value={contact.location} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, action }) {
  return (
    <div className="contact__item">
      <div className="contact__item-top">
        <p className="contact__item-label">{label}</p>
        {action}
      </div>
      <p className="contact__item-value">{value}</p>
    </div>
  );
}
