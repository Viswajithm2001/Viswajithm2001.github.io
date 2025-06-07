
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "Machine Learning project using Python to predict heart disease with multiple ML algorithms including Logistic Regression, Decision Tree, and Random Forest.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Visualization"],
      github: "https://github.com/Viswajith-m/Heart-disease-prediction-ML",
      features: [
        "Data preprocessing and feature engineering",
        "Hyperparameter tuning and model optimization",
        "Ensemble methods for improved accuracy",
        "Feature importance visualization"
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
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(project.github, '_blank')}
                    className="hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
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
