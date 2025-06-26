import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
  color: string;
  section: string;
}

const agents: Agent[] = [
  {
    id: "systemsynth",
    name: "SystemSynth",
    role: "Project Architect",
    description: "I orchestrate complex technical projects, integrating sensors, ML models, and real-time analytics into cohesive intelligent systems.",
    icon: "fas fa-project-diagram",
    color: "from-blue-500 to-cyan-500",
    section: "projects"
  },
  {
    id: "techtagger", 
    name: "TechTagger",
    role: "Skills Curator",
    description: "I analyze and categorize technical competencies, creating dynamic skill maps that adapt to emerging technologies.",
    icon: "fas fa-tags",
    color: "from-purple-500 to-pink-500", 
    section: "skills"
  },
  {
    id: "chronopath",
    name: "ChronoPath",
    role: "Experience Navigator",
    description: "I chronicle professional journeys, mapping growth trajectories through research roles and startup ventures.",
    icon: "fas fa-route",
    color: "from-green-500 to-emerald-500",
    section: "experience"
  },
  {
    id: "paperpilot",
    name: "PaperPilot", 
    role: "Research Synthesizer",
    description: "I curate and present academic contributions, patents, and publications in accessible, engaging formats.",
    icon: "fas fa-file-alt",
    color: "from-orange-500 to-red-500",
    section: "publications"
  }
];

export default function AgentBio() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tech-gradient-text">
            Meet My AI Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each section is guided by a specialized AI agent, designed to provide 
            contextual insights into different aspects of my research and development work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <Card 
              key={agent.id}
              className={`glassmorphism border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer group ${
                activeAgent === agent.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveAgent(agent.id)}
              onMouseLeave={() => setActiveAgent(null)}
              onClick={() => scrollToSection(agent.section)}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${agent.color} rounded-full flex items-center justify-center relative z-10`}>
                  <i className={`${agent.icon} text-white text-2xl`}></i>
                </div>
                
                <Badge 
                  variant="secondary" 
                  className="mb-4 bg-white/10 text-foreground border-white/20"
                >
                  {agent.role}
                </Badge>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {agent.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {agent.description}
                </p>

                {/* Activation indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agent Introduction */}
        {activeAgent && (
          <div className="mt-12 text-center animate-fade-in-up">
            <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${agents.find(a => a.id === activeAgent)?.color} rounded-full flex items-center justify-center`}>
                <i className={`${agents.find(a => a.id === activeAgent)?.icon} text-white text-xl`}></i>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">
                {agents.find(a => a.id === activeAgent)?.name} is ready to guide you
              </h4>
              <p className="text-muted-foreground">
                Click to explore the {agents.find(a => a.id === activeAgent)?.section} section
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
