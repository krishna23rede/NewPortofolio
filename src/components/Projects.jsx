import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [showMoreUnity, setShowMoreUnity] = useState(false);
  const videoRefs = useRef([]);

  const { projects, sections } = portfolioData;
  const projectSection = sections.projects;

  useEffect(() => {
    // Visible preview playback logic
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, tile) => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    const maxTilt = 5;
    const rect = tile.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tile.style.transform = `translateY(-5px) scale(1.04) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg)`;
  };

  const handleMouseLeave = (e, tile) => {
    tile.style.transform = "";
  };

  const openProjectModal = (projectId) => {
    if (window.openModal) {
      window.openModal(projectId);
    } else {
      console.log('Open modal for:', projectId);
    }
  };

  const renderProjectTile = (project, isExtra = false, showMoreState = false) => {
    return (
      <button 
        key={project.id}
        className={`project-tile ${isExtra && !showMoreState ? 'unity-extra' : ''} ${isExtra && showMoreState ? 'reveal-in' : ''}`} 
        style={{ display: isExtra && !showMoreState ? 'none' : 'block' }}
        type="button" 
        onClick={() => openProjectModal(project.id)}
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e, e.currentTarget)}
      >
        <video 
          ref={el => videoRefs.current.push(el)}
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata" 
          poster={project.poster || project.image}
        >
          <source src={project.video} type="video/mp4" />
        </video>
        <span>{project.title}</span>
      </button>
    );
  };

  return (
    <section id="projects" className="section">
      <div className="section-heading reveal">
        <p className="eyebrow">{projectSection.eyebrow}</p>
        <h2>{projectSection.title}</h2>
      </div>

      {projectSection.categories.map((category) => {
        const categoryProjects = projects.filter(p => p.category === category.id);
        const hasLimit = category.limit !== undefined;
        
        return (
          <div key={category.id} className="project-category reveal">
            <h3>{category.title}</h3>
            <div className={`tile-grid ${category.id.toLowerCase()}-grid`}>
              {categoryProjects.map((project, index) => 
                renderProjectTile(project, hasLimit && index >= category.limit, showMoreUnity)
              )}
            </div>
            {hasLimit && !showMoreUnity && categoryProjects.length > category.limit && (
              <div className="project-more-wrap">
                <button 
                  className="show-more-btn" 
                  type="button" 
                  onClick={() => setShowMoreUnity(true)}
                >
                  {category.showMoreBtn}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
