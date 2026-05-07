import React from 'react';
import { portfolioData } from '../data/portfolioData';

const TechStack = () => {
  const { techStack, sections } = portfolioData;

  return (
    <section className="section tech-stack" id="stack">
      <div className="section-heading reveal">
        <p className="eyebrow">{sections.techStack.eyebrow}</p>
        <h2>{sections.techStack.title}</h2>
      </div>
      <div className="stack-grid reveal">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
