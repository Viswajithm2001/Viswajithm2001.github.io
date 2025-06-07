
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a 
                        href="mailto:viswajithm2001@gmail.com"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                      >
                        viswajithm2001@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <a 
                        href="tel:8870306924"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                      >
                        8870306924
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Chennai, India</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button 
                      variant="outline" 
                      onClick={() => window.open('https://github.com/Viswajithm2001', '_blank')}
                      className="hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => window.open('https://www.linkedin.com/in/viswajith-mathialagan-68749b221', '_blank')}
                      className="hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in discussing new opportunities and innovative projects. 
                    Whether you're looking for a dedicated developer or want to explore collaboration 
                    possibilities, let's connect!
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={() => window.location.href = 'mailto:viswajithm2001@gmail.com?subject=Project Collaboration'}
                    >
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                      onClick={() => window.open('https://flowcv.com/resume/vs7sawedag', '_blank')}
                    >
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Viswajith Mathialagan. Built with passion and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
