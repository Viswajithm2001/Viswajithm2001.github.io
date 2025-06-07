
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Education
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and software engineering
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2">
                SASTRA UNIVERSITY
              </CardTitle>
              <CardDescription className="text-lg font-medium text-emerald-600">
                Undergraduate Studies
              </CardDescription>
              <span className="text-muted-foreground font-medium">
                2019 – 2023
              </span>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                Completed comprehensive undergraduate studies with focus on software engineering, 
                computer science fundamentals, and practical application development. 
                Gained strong theoretical knowledge and hands-on experience in various programming 
                languages and development methodologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
