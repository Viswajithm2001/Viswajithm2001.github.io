
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-12"></div>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              As a software developer, I'm driven by a relentless passion for continuous growth and learning. 
              I thrive on solving complex problems and delivering impactful solutions that go beyond business goals.
            </p>
            <p>
              My focus is on crafting efficient, user-friendly applications that empower teams and drive 
              organizational success. Always eager to innovate and collaborate, I'm committed to turning 
              challenges into opportunities for meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-emerald-600 mb-2">6+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
