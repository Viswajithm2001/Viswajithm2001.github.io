import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { Globe } from 'lucide-react'; // icon for Try It

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "Machine Learning project using Python to predict heart disease with multiple ML algorithms including Logistic Regression, Decision Tree, and Random Forest.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Visualization"],
      github: "https://github.com/Viswajithm2001/Heart-disease-prediction-using-ML",
      features: [
        "Data preprocessing and feature engineering",
        "Hyperparameter tuning and model optimization",
        "Ensemble methods for improved accuracy",
        "Feature importance visualization"
      ]
    },
    {
      title: "BlogNest",
      description: "A full-stack blogging platform built with ASP.NET Core and React (TypeScript). It allows users to create, edit, and delete blog posts, interact through comments and likes, and manage authentication with JWT.",
      technologies: [
        "C#", ".NET Core", "Entity Framework Core", "PostgreSQL",
        "React", "TypeScript", "Tailwind CSS", "Material UI"
      ],
      github: "https://github.com/Viswajithm2001/BlogNest",
      features: [
        "User authentication and authorization with JWT",
        "CRUD operations for posts with tags and images",
        "Commenting and liking system",
        "Responsive frontend with React and Tailwind",
        "Post and comment data fetched via REST API",
        "Role-based access and privacy settings"
      ]
    },
    {
      title: "MDViewer",
      description: "A lightweight, client-side Markdown editor and viewer built with React and TypeScript. MDViewer lets users open, edit, preview, and save Markdown files directly in the browser using the File System Access API, without requiring any server backend.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Marked.js",
        "File System Access API"
      ],
      github: "https://github.com/Viswajithm2001/MDViewer",
      try: "https://viswajithm2001.github.io/MDViewer/", // 👈 add try link only when available
      features: [
        "Real-time Markdown editing and preview",
        "Open and save .md files locally with File System Access API",
        "Offline and fully client-side — no backend required",
        "Responsive and minimal UI with Tailwind CSS",
        "Syntax highlighting for code blocks",
        "Supports both light and dark themes",
        "Download or export Markdown content as .md file"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications and innovative solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="mb-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-lg">{project.description}</CardDescription>
                  </div>
                  <div className="flex gap-3">
                    {project.try && (
                      <Button
                        variant="default"
                        onClick={() => window.open(project.try, '_blank')}
                        className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Try It
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(project.github, '_blank')}
                        className="hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                      >
                        {tech}
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

export default Projects;
