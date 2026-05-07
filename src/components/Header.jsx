import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const { header } = portfolioData;

  return (
    <header className="site-header">
      <a className="logo" href="#home">{header.logo}</a>
      <nav>
        {header.navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.name}
          </a>
        ))}
        <a
          className="resume-btn"
          href={header.resumeBtn.href}
          download
        >
          {header.resumeBtn.label}
        </a>
      </nav>
    </header>
  );
};

export default Header;

