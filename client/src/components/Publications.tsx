import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "patent" | "preprint";
  status: "published" | "accepted" | "under-review" | "filed";
  abstract: string;
  keywords: string[];
  doi?: string;
  patentNumber?: string;
  citations?: number;
  impact: string;
}

const publications: Publication[] = [
  {
    id: "water-desalination",
    title: "Water desalination using PSO-ANN techniques: A critical review",
    authors: ["Harshit Manik"],
    venue: "Science Direct",
    year: 2023,
    type: "journal",
    status: "published",
    abstract: "A comprehensive critical review of water desalination techniques utilizing Particle Swarm Optimization (PSO) and Artificial Neural Networks (ANN). This study analyzes the effectiveness and optimization strategies for sustainable water treatment solutions.",
    keywords: ["Water Desalination", "PSO", "Artificial Neural Networks", "Optimization", "Sustainable Technology"],
    doi: "https://www.sciencedirect.com/science/article/pii/S2772508123000467",
    citations: 10,
    impact: "Critical analysis of sustainable water treatment optimization techniques"
  },
  {
    id: "ar-vr-sensors",
    title: "Self-powered sensors for AR/VR applications: A comprehensive review",
    authors: ["Harshit Manik"],
    venue: "Under Review",
    year: 2024,
    type: "journal",
    status: "under-review",
    abstract: "A comprehensive review examining self-powered sensor technologies for augmented and virtual reality applications, focusing on energy harvesting techniques and sensor integration strategies.",
    keywords: ["AR/VR", "Self-powered Sensors", "Energy Harvesting", "Wearable Technology", "Sensor Integration"],
    impact: "Advancing energy-efficient sensor technologies for immersive applications"
  },
  {
    id: "glucose-monitoring-ieee",
    title: "AI-Powered Predictive Analytics for Non-Invasive Glucose Monitoring",
    authors: ["Harshit Manik", "Shaurya Punj", "Mantra Gupta", "Japleen Kaur"],
    venue: "IEEE EAIC Conference, NIT Jalandhar",
    year: 2024,
    type: "conference",
    status: "published",
    abstract: "This research paper presents an AI-powered predictive analytics system for non-invasive glucose monitoring, utilizing advanced machine learning algorithms for accurate blood glucose level prediction without traditional blood sampling methods.",
    keywords: ["Glucose Monitoring", "AI Predictive Analytics", "Non-invasive", "Machine Learning", "Healthcare Technology"],
    impact: "Revolutionary approach to diabetes management through non-invasive monitoring"
  },
  {
    id: "breast-tumor-iot",
    title: "IoT based breast tumour classification using ML/DL methods",
    authors: ["Harshit Manik", "Shaurya Punj", "Mantra Gupta"],
    venue: "IEEE EAIC Conference, NIT Jalandhar",
    year: 2024,
    type: "conference",
    status: "under-review",
    abstract: "An IoT-based system for breast tumor classification utilizing machine learning and deep learning methodologies. The system integrates IoT sensors for data collection with advanced ML/DL algorithms for accurate tumor classification.",
    keywords: ["IoT", "Breast Cancer", "Machine Learning", "Deep Learning", "Medical Classification"],
    impact: "Enhanced early detection capabilities for breast cancer through IoT integration"
  },
  {
    id: "glucose-monitoring-patent",
    title: "IoT-Based RF S-Parameter Non-Invasive Glucose Monitoring System",
    authors: ["Harshit Manik"],
    venue: "Patent Filed",
    year: 2024,
    type: "patent",
    status: "filed",
    abstract: "AI-powered, non-invasive glucose tracking system using real-time analytics and RF S-parameter analysis. The system provides continuous glucose monitoring without blood sampling through electromagnetic wave propagation analysis.",
    keywords: ["IoT", "RF S-Parameters", "Glucose Monitoring", "Non-invasive", "Real-time Analytics"],
    impact: "Revolutionary healthcare technology eliminating painful blood testing for diabetes management"
  },
  {
    id: "solar-automation-preprint",
    title: "Quartz and Multi-agentic System Based Automation for Solar Farms for Optimized Cleaning",
    authors: ["Harshit Manik"],
    venue: "Preprint",
    year: 2024,
    type: "preprint",
    status: "under-review",
    abstract: "A novel approach utilizing Quartz optimization algorithms and multi-agentic systems for automated solar farm cleaning operations. The system optimizes cleaning schedules and resource allocation for maximum solar panel efficiency.",
    keywords: ["Solar Automation", "Multi-agentic Systems", "Quartz Optimization", "Solar Cleaning", "Renewable Energy"],
    impact: "Advanced automation system for enhanced solar farm efficiency and maintenance optimization"
  }
];

export default function Publications() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const types = ["all", "journal", "conference", "patent", "preprint"];

  const filteredPublications = selectedType === "all" 
    ? publications 
    : publications.filter(p => p.type === selectedType);

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getTypeColor = (type: Publication["type"]) => {
    switch (type) {
      case "journal": return "bg-blue-500";
      case "conference": return "bg-green-500";
      case "patent": return "bg-purple-500";
      case "preprint": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: Publication["status"]) => {
    switch (status) {
      case "published": return "bg-green-500";
      case "accepted": return "bg-blue-500";
      case "under-review": return "bg-yellow-500";
      case "filed": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (type: Publication["type"]) => {
    switch (type) {
      case "journal": return "fas fa-journal-whills";
      case "conference": return "fas fa-users";
      case "patent": return "fas fa-certificate";
      case "preprint": return "fas fa-file-alt";
      default: return "fas fa-file";
    }
  };

  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-file-alt text-white text-xl"></i>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tech-gradient-text">
              PaperPilot Publications
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my research contributions, patent innovations, and academic publications 
            that advance the field of intelligent systems and AI technology.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedType === type 
                  ? "tech-gradient text-white shadow-lg" 
                  : "glassmorphism border-white/20 hover:border-white/40"
              }`}
            >
              <i className={`${type !== "all" ? getTypeIcon(type as Publication["type"]) : "fas fa-list"} mr-2`}></i>
              {type === "all" ? "All Publications" : type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((publication, index) => (
            <div 
              key={publication.id}
              className="flip-card h-96"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flip-card-inner ${flippedCards.has(publication.id) ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <Card className="flip-card-front glassmorphism border-white/10 hover:border-white/20 cursor-pointer h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-2">
                        <Badge className={`${getTypeColor(publication.type)} text-white border-0`}>
                          <i className={`${getTypeIcon(publication.type)} mr-1`}></i>
                          {publication.type}
                        </Badge>
                        <Badge className={`${getStatusColor(publication.status)} text-white border-0`}>
                          {publication.status}
                        </Badge>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {publication.year}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-3">
                      {publication.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {publication.authors.join(", ")}
                    </p>

                    <p className="text-sm font-medium text-foreground mb-4">
                      {publication.venue}
                    </p>

                    <div className="flex-1 flex items-end">
                      <Button 
                        onClick={() => toggleFlip(publication.id)}
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 hover:bg-white/10"
                      >
                        <i className="fas fa-info-circle mr-2"></i>
                        View Details
                      </Button>
                    </div>

                    {publication.type === "patent" && (
                      <div className="absolute top-4 right-4">
                        <i className="fas fa-award text-yellow-500 text-xl"></i>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="flip-card-back glassmorphism-dark border-white/10 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white">Abstract</h4>
                      <Button 
                        onClick={() => toggleFlip(publication.id)}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/10"
                      >
                        <i className="fas fa-times"></i>
                      </Button>
                    </div>

                    <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-1 overflow-y-auto">
                      {publication.abstract}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Impact</h5>
                        <p className="text-xs text-gray-300">{publication.impact}</p>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Keywords</h5>
                        <div className="flex flex-wrap gap-1">
                          {publication.keywords.slice(0, 4).map((keyword) => (
                            <Badge key={keyword} variant="secondary" className="text-xs bg-white/20 text-white border-0">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {(publication.doi || publication.patentNumber) && (
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-2">Reference</h5>
                          <p className="text-xs text-gray-300 font-mono">
                            {publication.doi || publication.patentNumber}
                          </p>
                        </div>
                      )}

                      {publication.citations && (
                        <div className="flex items-center text-xs text-gray-300">
                          <i className="fas fa-quote-right mr-2"></i>
                          {publication.citations} citations
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Publications Summary */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">
              {publications.length}
            </div>
            <div className="text-muted-foreground text-sm">Total Publications</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">
              {publications.filter(p => p.type === "patent").length}
            </div>
            <div className="text-muted-foreground text-sm">Patents Filed</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">
              {publications.reduce((acc, p) => acc + (p.citations || 0), 0)}
            </div>
            <div className="text-muted-foreground text-sm">Total Citations</div>
          </div>
          
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-3xl font-bold tech-gradient-text mb-2">
              {new Set(publications.flatMap(p => p.keywords)).size}
            </div>
            <div className="text-muted-foreground text-sm">Research Areas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
