
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const achievements = [
    {
      title: "Foundational C# with Microsoft",
      platform: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/Viswajith/foundational-c-sharp-with-microsoft",
      description: "Comprehensive certification covering C# fundamentals and Microsoft technologies"
    },
    {
      title: "RESTful Web Application using .NET ASP Core",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-929fea35-c0c1-4904-94c8-03be646362e1/",
      description: "Advanced course on building RESTful APIs with ASP.NET Core"
    },
    {
      title: "Basics of Java",
      platform: "Coding Ninjas",
      link: "https://files.codingninjas.in/certi_image4733510d80d7cf66e3a9a52476bb3bc80d0e3f.jpg",
      description: "Java programming fundamentals and object-oriented concepts"
    },
    {
      title: "Basics of Python",
      platform: "HackerRank",
      link: "https://www.hackerrank.com/certificates/8ccf882d2f5c",
      description: "Python programming essentials and data structures"
    },
    {
      title: "Basics of SQL",
      platform: "HackerRank",
      link: "https://www.hackerrank.com/certificates/d12bf7f7f593",
      description: "Database management and SQL query optimization"
    },
    {
      title: "Introduction to Programming With C#",
      platform: "HackerRank",
      link: "../../public/CourseraEATULCW1UAT6.pdf",
      description: "Mastered C# fundamentals in .NET, applying OOP principles to build scalable applications while leveraging Microsoft Copilot for enhanced code quality and productivity"
    },
    {
      title: "Foundations of Coding Back-End",
      platform: "HackerRank",
      link: "../../public/CourseraXWXU7CFKT5UF.pdf",
      description: "Learned core back-end development concepts, including problem-solving, algorithm design, and writing efficient, modular code following industry-standard practices."
    },
     {
      title: "Basics of Problem Solving",
      platform: "HackerRank",
      link: "https://www.hackerrank.com/certificates/6a7c5021d989",
      description: "Algorithmic thinking and computational problem-solving"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through recognized certifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle
                  className="text-lg text-foreground leading-tight cursor-pointer hover:text-emerald-600 transition-colors"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-emerald-600 font-medium">
                  {cert.platform}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
