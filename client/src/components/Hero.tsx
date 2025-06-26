import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  
  const subtitles = [
    "Agentic AI Innovator",
    "IoT & Edge AI Pioneer", 
    "AR/VR Systems Builder",
    "Deep Tech Entrepreneur"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          {/* CSS-based geometric animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-blue-500/20 animate-spin-slow"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 15}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${20 + i * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="glassmorphism rounded-3xl p-12 mb-8 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Profile Photo Section - Left Side */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-blue-500/30 overflow-hidden neon-glow animate-pulse-slow">
                <img 
                  src="/images/profile/harshit-profile.jpg" 
                  alt="Harshit Manik" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Title Section - Right Side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 tech-gradient-text leading-tight">
                Harshit's
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Intelligent Systems Lab</span>
              </h1>
            </div>
          </div>
          
          <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-muted-foreground min-h-[1.5em]">
            <span 
              key={currentSubtitle}
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {subtitles[currentSubtitle]}
            </span>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hi, I'm Harshit Manik — a builder at heart, passionate about Agentic AI, real-time IoT systems, 
            and futuristic automation. I build, deploy, and scale ideas that push the edge of intelligent systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="tech-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl"
            >
              <i className="fas fa-rocket mr-3"></i>
              Explore My Work
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="glassmorphism-dark border-white/20 text-foreground hover:text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-xl"
            >
              <i className="fas fa-download mr-3"></i>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
