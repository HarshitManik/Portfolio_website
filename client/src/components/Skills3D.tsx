import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  SiPython, SiTensorflow, SiFlask, SiUnity, SiGooglecloud, SiArduino,
  SiPandas, SiNumpy, SiScikitlearn, SiLatex
} from "react-icons/si";
import { 
  FaRaspberryPi, FaRobot, FaEye, FaBrain, FaChartLine, 
  FaCubes, FaVrCardboard, FaCode, FaCloud, FaTools
} from "react-icons/fa";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  color: string;
  position: [number, number, number];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const skills: Skill[] = [
  // Agentic AI & Core AI/ML
  { name: "LangChain", level: 95, category: "Agentic AI", description: "Advanced RAG and agent development", color: "#10B981", position: [0, 0, 0], icon: FaRobot },
  { name: "Crew AI", level: 90, category: "Agentic AI", description: "Multi-agent system orchestration", color: "#8B5CF6", position: [0.3, 0.1, 0], icon: FaCubes },
  { name: "TensorFlow", level: 92, category: "AI/ML", description: "Deep learning and neural networks", color: "#FF6F00", position: [0.1, 0.2, 0], icon: SiTensorflow },
  { name: "Keras", level: 88, category: "AI/ML", description: "High-level neural network API", color: "#D00000", position: [0.2, 0, 0], icon: FaBrain },
  { name: "Computer Vision", level: 94, category: "AI/ML", description: "Image processing and analysis", color: "#4CAF50", position: [0, 0.3, 0], icon: FaEye },
  { name: "scikit-learn", level: 87, category: "AI/ML", description: "Machine learning algorithms", color: "#F7931E", position: [0.3, 0.2, 0], icon: SiScikitlearn },
  { name: "Predictive Analytics", level: 91, category: "AI/ML", description: "Statistical modeling and forecasting", color: "#2196F3", position: [0.1, 0.3, 0], icon: FaChartLine },
  
  // IoT & Edge Computing
  { name: "Raspberry Pi", level: 93, category: "IoT", description: "Edge computing and embedded systems", color: "#C51A4A", position: [0.4, 0, 0], icon: FaRaspberryPi },
  { name: "Arduino", level: 89, category: "IoT", description: "Microcontroller programming", color: "#00979D", position: [0.5, 0.1, 0], icon: SiArduino },
  { name: "MQTT", level: 86, category: "IoT", description: "Real-time IoT communication", color: "#660066", position: [0.4, 0.2, 0], icon: FaCode },
  { name: "Real-Time Edge", level: 90, category: "IoT", description: "Edge computing optimization", color: "#FF5722", position: [0.6, 0, 0], icon: FaCloud },
  
  // AR/VR Technologies
  { name: "Unity", level: 88, category: "AR/VR", description: "3D application development", color: "#000000", position: [0.7, 0.1, 0], icon: SiUnity },
  { name: "Vuforia", level: 85, category: "AR/VR", description: "Augmented reality SDK", color: "#1A237E", position: [0.8, 0, 0], icon: FaVrCardboard },
  { name: "AR Dashboards", level: 87, category: "AR/VR", description: "Industrial AR interfaces", color: "#9C27B0", position: [0.7, 0.2, 0], icon: FaCubes },
  
  // Programming & Tools
  { name: "Python", level: 96, category: "Programming", description: "Primary development language", color: "#3776AB", position: [0, 0.4, 0], icon: SiPython },
  { name: "Pandas", level: 90, category: "Programming", description: "Data manipulation and analysis", color: "#150458", position: [0.1, 0.5, 0], icon: SiPandas },
  { name: "NumPy", level: 89, category: "Programming", description: "Numerical computing", color: "#013243", position: [0.2, 0.4, 0], icon: SiNumpy },
  { name: "Seaborn", level: 85, category: "Programming", description: "Statistical data visualization", color: "#444444", position: [0.1, 0.6, 0], icon: FaChartLine },
  { name: "Flask", level: 88, category: "Programming", description: "Web application framework", color: "#000000", position: [0.3, 0.5, 0], icon: SiFlask },
  { name: "Google Cloud", level: 82, category: "Cloud", description: "Cloud computing platform", color: "#4285F4", position: [0.4, 0.4, 0], icon: SiGooglecloud },
  { name: "LaTeX", level: 84, category: "Tools", description: "Scientific document preparation", color: "#008080", position: [0.5, 0.5, 0], icon: SiLatex }
];

function SkillCard({ skill, onClick, isHovered, onHover }: { 
  skill: Skill;
  onClick: (skill: Skill) => void;
  isHovered: boolean;
  onHover: (skill: Skill | null) => void;
}) {
  const size = (skill.level / 100) * 120 + 60;

  return (
    <div
      className={`skill-tag absolute cursor-pointer transition-all duration-300 ${
        isHovered ? 'scale-110 z-10' : ''
      }`}
      style={{
        left: `${skill.position[0] * 80 + 40}%`,
        top: `${skill.position[1] * 60 + 30}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      onClick={() => onClick(skill)}
      onMouseEnter={() => onHover(skill)}
      onMouseLeave={() => onHover(null)}
    >
      <div 
        className="w-full h-full rounded-full flex flex-col items-center justify-center text-white shadow-lg"
        style={{ 
          backgroundColor: skill.color,
          opacity: isHovered ? 0.9 : 0.7,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <skill.icon 
            size={size > 100 ? 32 : 24} 
            className="text-white drop-shadow-lg mb-1" 
          />
          <div className="text-xs opacity-90 font-semibold">{skill.level}%</div>
        </div>
      </div>
    </div>
  );
}

export default function Skills3D() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(skills.map(s => s.category)))];

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  // Normalize positions for 2D layout
  const normalizedSkills = filteredSkills.map((skill, index) => ({
    ...skill,
    position: [
      (index % 4) * 0.2 + 0.1, // x: 0.1, 0.3, 0.5, 0.7
      Math.floor(index / 4) * 0.25 + 0.1, // y: distribute in rows
      0 // z: not used in 2D
    ] as [number, number, number]
  }));

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-tags text-white text-xl"></i>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tech-gradient-text">
              TechTagger Skills
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my technical expertise through an interactive 3D visualization. 
            Click and drag to navigate, hover over skills for details.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category 
                  ? "tech-gradient text-white shadow-lg" 
                  : "glassmorphism border border-white/20 text-foreground hover:border-white/40"
              }`}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </div>

        {/* Interactive Skills Visualization */}
        <div className="relative">
          <div className="h-[600px] w-full glassmorphism rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-blue-900/30">
              {normalizedSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  onClick={handleSkillClick}
                  isHovered={hoveredSkill?.name === skill.name}
                  onHover={setHoveredSkill}
                />
              ))}
            </div>
          </div>

          {/* Skill Details Panel */}
          {(selectedSkill || hoveredSkill) && (
            <div className="absolute bottom-6 left-6 right-6 glassmorphism rounded-2xl p-6 animate-fade-in-up">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: (selectedSkill || hoveredSkill)?.color }}
                    ></div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {(selectedSkill || hoveredSkill)?.name}
                    </h3>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-foreground border border-white/20">
                      {(selectedSkill || hoveredSkill)?.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {(selectedSkill || hoveredSkill)?.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Proficiency:</span>
                    <div className="flex-1 max-w-xs bg-white/10 rounded-full h-2">
                      <div 
                        className="h-full tech-gradient rounded-full transition-all duration-500"
                        style={{ width: `${(selectedSkill || hoveredSkill)?.level}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold text-foreground">
                      {(selectedSkill || hoveredSkill)?.level}%
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <i className="fas fa-times text-muted-foreground"></i>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center glassmorphism rounded-2xl p-8">
            <div className="text-4xl font-bold tech-gradient-text mb-2">
              {skills.length}
            </div>
            <div className="text-muted-foreground">Technical Skills</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-8">
            <div className="text-4xl font-bold tech-gradient-text mb-2">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </div>
            <div className="text-muted-foreground">Average Proficiency</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-8">
            <div className="text-4xl font-bold tech-gradient-text mb-2">
              {categories.length - 1}
            </div>
            <div className="text-muted-foreground">Skill Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
