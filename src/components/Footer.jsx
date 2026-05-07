import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { footer } = portfolioData;
  const footerText = footer.text.replace('{year}', new Date().getFullYear());

  return (
    <footer className="site-footer">
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;
