import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { description, email, linkedin, links } = portfolioData.contact;
  const { contact: sectionData } = portfolioData.sections;

  return (
    <section id="contact" className="section contact reveal">
      <div className="section-heading">
        <p className="eyebrow">{sectionData.eyebrow}</p>
        <h2>{sectionData.title}</h2>
      </div>
      <p>{description}</p>
      <div className="contact-links">
        {links.map((link) => {
          const href =
            link.type === 'email'
              ? `mailto:${email}`
              : link.type === 'linkedin'
              ? linkedin
              : link.href;

          return (
            <a
              key={link.id}
              href={href}
              target={link.newTab ? '_blank' : undefined}
              rel={link.newTab ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
