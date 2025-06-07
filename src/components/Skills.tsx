
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C#", "Python", "Java"],
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Frameworks & Platforms",
      skills: [".NET", "ASP.NET Core"],
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "APIs", "RESTful Services", "SQL"],
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Specialized Areas",
      skills: ["Document Processing", "XLSX/DOCX/PPTX/PDF", "Machine Learning", "Data Analysis"],
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable software solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105 ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
