import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { introduction, skills, experience, additionalSkills } = portfolioData.about;
  const { about: sectionData } = portfolioData.sections;

  return (
    <section id="about" className="section">
      <div className="section-heading reveal">
        <p className="eyebrow">{sectionData.eyebrow}</p>
        <h2>{sectionData.title}</h2>
      </div>
      <div className="about-stack">
        <article className="about-block reveal">
          <h3>{sectionData.blocks.introduction}</h3>
          <p>{introduction}</p>
        </article>
        
        <article className="about-block reveal">
          <h3>{sectionData.blocks.skills}</h3>
          <ul>
            {skills.map((skillGroup, index) => (
              <li key={index}>
                <strong>{skillGroup.category}:</strong> {skillGroup.items}
              </li>
            ))}
          </ul>
        </article>
        
        <article className="about-block reveal">
          <h3>{sectionData.blocks.experience}</h3>
          {experience.map((exp, index) => (
            <div key={index}>
              <h4>{exp.title}</h4>
              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
        
        <article className="about-block reveal">
          <h3>{sectionData.blocks.additionalSkills}</h3>
          <ul>
            {additionalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
