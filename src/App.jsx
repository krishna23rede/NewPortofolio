import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    if (('IntersectionObserver' in window) && targets.length) {
      const observer = new IntersectionObserver((entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.14 });
      targets.forEach((node) => observer.observe(node));
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;

