
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Syncfusion Software Private Limited",
      period: "Mar 2024 – Present",
      description: "Specialized in C#/.NET development for document processing libraries (XLSX, DOCX, PPTX, PDF). Focused on building and optimizing APIs for document creation, reading, and editing. Collaborate with cross-functional teams to enhance performance and user experience.",
      skills: ["C#", ".NET", "Document Processing", "APIs", "Performance Optimization"]
    },
    {
      title: "IT & Web Development Intern",
      company: "Baskethunt Company",
      period: "Aug 2023 – Oct 2023",
      description: "Supported IT and web development projects, gaining hands-on experience and enhancing technical skills. Contributed to various development initiatives and learned industry best practices.",
      skills: ["Web Development", "IT Support", "Project Management", "Technical Skills"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through meaningful contributions in software development and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-600">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-emerald-600">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-emerald-50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
