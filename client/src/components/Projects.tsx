import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  results: string[];
  image: string;
  category: string;
  status: "completed" | "ongoing" | "research";
  github?: string;
  demo?: string;
  connections: string[];
}

const projects: Project[] = [
  {
    id: "sas-agentic-converter",
    title: "SAS to Python Agentic AI Converter",
    description: "Secure offline RAG-LangChain model for automated SAS to Python conversion with +5% efficiency improvement.",
    longDescription: "Developed at Hexaware Technologies as a summer intern project. Built a sophisticated RAG (Retrieval-Augmented Generation) system using LangChain to automatically convert SAS code to Python. The system operates completely offline for security compliance and achieved significant efficiency improvements in data processing workflows.",
    techStack: ["LangChain", "RAG", "Python", "Agentic AI", "NLP", "Code Generation"],
    results: ["+5% efficiency improvement", "Secure offline architecture", "Automated code conversion", "Enhanced data processing workflows"],
    image: "/images/projects/sas-python-converter.png",
    category: "Agentic AI",
    status: "completed",
    connections: ["agentic-ai", "automation", "code-generation"]
  },
  {
    id: "ar-industrial-dashboard",
    title: "AR-Based Industrial Dashboard",
    description: "Real sensor integration with AR overlays featuring thermal & pressure mapping for industrial applications.",
    longDescription: "Developed during IIT Roorkee internship, this AR-based industrial dashboard integrates real-time sensor data with immersive AR overlays. The system provides thermal mapping, pressure visualization, and predictive maintenance alerts directly in the operator's field of view, enhancing industrial safety and efficiency.",
    techStack: ["Unity", "AR/VR", "C#", "Sensor Integration", "Real-time Data", "Industrial IoT"],
    results: ["Real-time sensor visualization", "Enhanced industrial safety", "Predictive maintenance integration", "Immersive operator experience"],
    image: "/images/projects/ar-industrial-dashboard.png",
    category: "AR/VR",
    status: "completed",
    connections: ["ar-vr", "industrial-iot", "sensor-integration"]
  },
  {
    id: "breast-tumor-classification",
    title: "IoT-Based Breast Tumor Classification",
    description: "ML/DL methods achieving 96% accuracy with IoT sensor integration for enhanced medical diagnosis.",
    longDescription: "Presented at IEEE EAIC Conference, NIT Jalandhar, this IoT-based system integrates machine learning and deep learning methodologies for accurate breast tumor classification. The system combines IoT sensor data collection with advanced ML/DL algorithms, achieving exceptional classification accuracy for early detection.",
    techStack: ["Python", "IoT Sensors", "Machine Learning", "Deep Learning", "Medical Classification", "IEEE Research"],
    results: ["96% classification accuracy", "IoT sensor integration", "IEEE conference presentation", "Early detection capability"],
    image: "/images/projects/breast-tumor-classification.png",
    category: "Medical AI",
    status: "completed",
    connections: ["medical-ai", "iot", "deep-learning"]
  },
  {
    id: "glucose-monitoring-ai",
    title: "AI for Glucose Monitoring",
    description: "MQTT + Flask dashboard with 95% real-time accuracy for continuous glucose monitoring systems.",
    longDescription: "Developed at CEEMS & ECED, Thapar University, this AI-powered glucose monitoring system combines IoT sensors with machine learning algorithms to provide real-time glucose level tracking. The system uses MQTT protocol for real-time data transmission and Flask for the web dashboard, achieving 95% accuracy in glucose level predictions.",
    techStack: ["Python", "Flask", "MQTT", "Machine Learning", "IoT Sensors", "Real-time Analytics"],
    results: ["95% real-time accuracy", "Continuous monitoring capability", "MQTT-based real-time communication", "Web-based dashboard"],
    image: "/images/projects/glucose-monitoring.png",
    category: "Medical AI",
    status: "completed",
    connections: ["medical-ai", "iot", "real-time-systems"]
  },
  {
    id: "acoustic-threat-detection",
    title: "Acoustic Threat Detection",
    description: "CNN & STFT integration with Flask achieving 93% classification accuracy for security applications.",
    longDescription: "Developed at NIT Jalandhar, this acoustic threat detection system uses Convolutional Neural Networks combined with Short-Time Fourier Transform analysis to identify and classify acoustic threats in real-time. The Flask-based system processes audio signals and provides immediate threat classification with high accuracy.",
    techStack: ["Python", "CNN", "STFT", "Flask", "Audio Processing", "Deep Learning"],
    results: ["93% classification accuracy", "Real-time threat detection", "Flask web interface", "Audio signal processing"],
    image: "/images/projects/acoustic-threat.png",
    category: "Security AI",
    status: "completed",
    connections: ["security-ai", "audio-processing", "deep-learning"]
  },
  {
    id: "aeroinspect-solar",
    title: "AeroInspect-Solar",
    description: "AI-driven drone analytics improving solar efficiency by 26%. ISB pre-incubation participant.",
    longDescription: "Co-founded AeroInspect-Solar, an AI-driven drone analytics startup that revolutionizes solar panel maintenance through autonomous inspection and predictive analytics. The system uses computer vision and IoT sensors to optimize solar panel performance, resulting in significant efficiency improvements. Currently participating in ISB's pre-incubation program.",
    techStack: ["Computer Vision", "Drone Analytics", "AI/ML", "IoT Sensors", "Predictive Analytics"],
    results: ["26% improvement in solar efficiency", "ISB pre-incubation participant", "Autonomous drone inspection", "Predictive maintenance algorithms"],
    image: "/images/projects/aeroinspect-solar.png",
    category: "Startup",
    status: "ongoing",
    connections: ["drone-analytics", "solar-technology", "computer-vision"]
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ["all", "AI Research", "Biomedical AI", "Security AI", "Startup"];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "ongoing": return "bg-blue-500"; 
      case "research": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "completed": return "Completed";
      case "ongoing": return "Ongoing";
      case "research": return "Research Phase";
      default: return "Unknown";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-project-diagram text-white text-xl"></i>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tech-gradient-text">
              SystemSynth Projects
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of intelligent systems that bridge the gap between 
            cutting-edge research and real-world applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category 
                  ? "tech-gradient text-white shadow-lg" 
                  : "glassmorphism border-white/20 hover:border-white/40"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`project-card glassmorphism border-white/10 hover:border-white/20 overflow-hidden group ${
                hoveredProject === project.id ? 'scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:tech-gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit bg-white/10 text-foreground border-white/20">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs bg-white/5 border-white/20 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs bg-white/5 border-white/20 text-muted-foreground">
                      +{project.techStack.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="tech-gradient text-white hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-info-circle mr-2"></i>
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glassmorphism border-white/20">
                      <DialogHeader>
                        <DialogTitle className="text-2xl tech-gradient-text">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-foreground">Project Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-foreground">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-white/10 text-foreground border-white/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-foreground">Key Results</h4>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-4 pt-4">
                          {project.github && (
                            <Button asChild className="tech-gradient text-white">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github mr-2"></i>
                                View Code
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt mr-2"></i>
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {project.github && (
                    <Button 
                      asChild
                      size="sm" 
                      variant="outline"
                      className="border-white/20 hover:bg-white/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github mr-2"></i>
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button 
                      asChild
                      size="sm" 
                      variant="outline"
                      className="border-white/20 hover:bg-white/10"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
