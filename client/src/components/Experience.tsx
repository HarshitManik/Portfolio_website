import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: "research" | "internship" | "startup" | "project";
  description: string;
  achievements: string[];
  technologies: string[];
  icon: string;
  color: string;
}

const experiences: Experience[] = [
  {
    id: "hexaware",
    role: "Summer Intern",
    organization: "Hexaware Technologies",
    location: "Mumbai, India",
    duration: "June 2025 - August 2025",
    type: "internship",
    description: "Deployed RAG & Agentic AI for automation in sales and industrial pipelines, developing secure offline models.",
    achievements: [
      "Built SAS to Python Agentic AI Converter with RAG-LangChain",
      "Achieved +5% efficiency improvement in data processing",
      "Implemented secure offline model architecture",
      "Automated industrial pipeline workflows"
    ],
    technologies: ["LangChain", "RAG", "Python", "Agentic AI", "Data Processing"],
    icon: "fas fa-robot",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "thapar-ceems",
    role: "Research Associate",
    organization: "CEEMS & ECED, Thapar University",
    location: "Patiala, India",
    duration: "Dec 2024 - Present",
    type: "research",
    description: "Developing Raspberry Pi-based medical AI systems to improve diagnosis and response speed in healthcare applications.",
    achievements: [
      "Improved medical diagnosis response speed significantly",
      "Developed edge AI solutions for healthcare",
      "Implemented real-time medical monitoring systems",
      "Enhanced patient care through intelligent automation"
    ],
    technologies: ["Raspberry Pi", "Medical AI", "Edge Computing", "Python", "IoT Sensors"],
    icon: "fas fa-heartbeat",
    color: "from-red-500 to-orange-500"
  },
  {
    id: "iit-roorkee",
    role: "Research Intern",
    organization: "IIT Roorkee",
    location: "Roorkee, India",
    duration: "Jun 2024 - Aug 2024",
    type: "internship",
    description: "Developed robotic and AR/VR systems with predictive haptics, focusing on immersive technology applications.",
    achievements: [
      "Built AR-based industrial dashboard with real sensor integration",
      "Implemented thermal & pressure mapping in AR overlays",
      "Developed predictive haptic feedback systems",
      "Created immersive robotic control interfaces"
    ],
    technologies: ["Unity", "AR/VR", "Robotics", "Haptic Systems", "C#", "Sensor Integration"],
    icon: "fas fa-university",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "aeroinspect",
    role: "Co-Founder",
    organization: "AeroInspect-Solar",
    location: "India",
    duration: "2023 - Present",
    type: "startup",
    description: "AI-driven drone analytics startup improving solar efficiency by 26%. ISB pre-incubation participant.",
    achievements: [
      "Improved solar panel efficiency by 26% through AI analytics",
      "Developed autonomous drone inspection systems",
      "Participated in ISB pre-incubation program",
      "Built predictive maintenance algorithms for solar farms"
    ],
    technologies: ["Computer Vision", "Drone Analytics", "AI/ML", "Solar Technology", "IoT"],
    icon: "fas fa-rocket",
    color: "from-green-500 to-emerald-500"
  }
];

export default function Experience() {
  const getTypeIcon = (type: Experience["type"]) => {
    switch (type) {
      case "startup": return "fas fa-rocket";
      case "research": return "fas fa-microscope";
      case "internship": return "fas fa-university";
      case "project": return "fas fa-code";
      default: return "fas fa-briefcase";
    }
  };

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "startup": return "bg-green-500";
      case "research": return "bg-blue-500";
      case "internship": return "bg-purple-500";
      case "project": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-route text-white text-xl"></i>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tech-gradient-text">
              ChronoPath Journey
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Navigate through my professional evolution from research intern to startup founder, 
            each experience building towards advanced intelligent systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-orange-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="timeline-item relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="ml-0 lg:ml-20 glassmorphism border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-102">
                  {/* Timeline dot for large screens */}
                  <div className={`absolute -left-24 top-8 w-16 h-16 bg-gradient-to-br ${experience.color} rounded-full hidden lg:flex items-center justify-center shadow-lg`}>
                    <i className={`${experience.icon} text-white text-xl`}></i>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          {/* Mobile timeline dot */}
                          <div className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-full flex items-center justify-center lg:hidden`}>
                            <i className={`${experience.icon} text-white`}></i>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:tech-gradient-text transition-all duration-300">
                              {experience.role}
                            </h3>
                            <p className="text-lg text-muted-foreground">
                              {experience.organization}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <Badge className={`${getTypeColor(experience.type)} text-white border-0`}>
                            <i className={`${getTypeIcon(experience.type)} mr-2`}></i>
                            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                          </Badge>
                          
                          <div className="flex items-center text-muted-foreground">
                            <i className="fas fa-calendar mr-2"></i>
                            {experience.duration}
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="bg-white/5 border-white/20 text-foreground hover:bg-white/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">3+</div>
            <div className="text-muted-foreground text-sm">Years Experience</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">15+</div>
            <div className="text-muted-foreground text-sm">Projects Completed</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">5</div>
            <div className="text-muted-foreground text-sm">Publications</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">3</div>
            <div className="text-muted-foreground text-sm">Patents Filed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
