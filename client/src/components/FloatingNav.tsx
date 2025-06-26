import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["projects", "skills", "experience", "publications", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects", icon: "fas fa-project-diagram" },
    { id: "skills", label: "Skills", icon: "fas fa-code" },
    { id: "experience", label: "Experience", icon: "fas fa-briefcase" },
    { id: "publications", label: "Publications", icon: "fas fa-file-alt" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`floating-nav fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled ? "scrolled backdrop-blur-xl" : ""
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
        >
          <div className="w-10 h-10 tech-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <i className="fas fa-brain text-white text-lg"></i>
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold tech-gradient-text">Harshit's Lab</span>
            <div className="text-xs text-muted-foreground">Intelligent Systems</div>
          </div>
        </button>

        {/* Navigation Items */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "tech-gradient text-white shadow-lg"
                  : "text-foreground hover:text-primary hover:bg-white/10"
              }`}
            >
              <i className={`${item.icon} text-sm`}></i>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "tech-gradient text-white shadow-lg"
                    : "text-foreground hover:text-primary hover:bg-white/10"
                }`}
                title={item.label}
              >
                <i className={`${item.icon} text-sm`}></i>
              </button>
            ))}
          </div>
        </div>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            className="glassmorphism border-white/20 hover:bg-white/10 p-2"
            title="Toggle theme"
          >
            <i className={`${theme === "dark" ? "fas fa-sun" : "fas fa-moon"} text-lg`}></i>
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex tech-gradient text-white px-6 py-2 hover:shadow-lg transition-all duration-300"
          >
            <i className="fas fa-rocket mr-2"></i>
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full tech-gradient transition-all duration-300"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        ></div>
      </div>
    </nav>
  );
}
