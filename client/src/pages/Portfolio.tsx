import { useEffect } from "react";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import AgentBio from "@/components/AgentBio";

import Projects from "@/components/Projects";
import Skills3D from "@/components/Skills3D";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import ContactForm from "@/components/ContactForm";

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-500">
      <FloatingNav />
      
      <main>
        <Hero />
        <AgentBio />
        

        <Projects />
        <Skills3D />
        <Experience />
        <Publications />
        <ContactForm />
      </main>
      
      <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
                  <i className="fas fa-brain text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold tech-gradient-text">Harshit's Lab</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Pioneering the future of intelligent systems through AI, IoT, and immersive technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Research Areas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Agentic AI Systems</li>
                <li>IoT & Embedded ML</li>
                <li>Computer Vision</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/harshitmanik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <i className="fab fa-github text-white"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/harshitmanik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <i className="fab fa-linkedin text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Harshit Manik. Intelligent Systems Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
