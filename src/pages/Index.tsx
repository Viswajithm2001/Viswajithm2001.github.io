
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
