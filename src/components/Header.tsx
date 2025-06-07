
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-emerald-600">VM</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'experience', 'education', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-foreground hover:text-emerald-600 transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
              Viswajith
              <span className="block text-emerald-600">Mathialagan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Engineer | C# & .NET Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building efficient, user-friendly solutions to drive success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                onClick={() => window.open('https://flowcv.com/resume/vs7sawedag', '_blank')}
              >
                Download Resume
              </Button>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://github.com/Viswajithm2001', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/viswajith-mathialagan-68749b221', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <ArrowDown 
              className="w-8 h-8 text-emerald-600 mx-auto animate-bounce cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
