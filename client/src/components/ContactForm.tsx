import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useConfetti } from "@/hooks/use-confetti";
import { sendEmail } from "@/lib/emailjs";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { triggerConfetti } = useConfetti();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      
      // Trigger confetti animation
      triggerConfetti();
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or reach out via LinkedIn.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tech-gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, have questions about my research, or want to discuss 
            intelligent systems? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 tech-gradient rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">hmanik_be23@thapar.edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fab fa-linkedin text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/hmanik23" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 text-sm transition-colors"
                    >
                      /in/hmanik23
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 8958434000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Research Interests</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-brain mr-2 text-purple-500"></i>
                    Multi-Agent AI Systems
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-microchip mr-2 text-blue-500"></i>
                    IoT & Edge Computing
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-eye mr-2 text-green-500"></i>
                    Computer Vision
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-chart-line mr-2 text-orange-500"></i>
                    Predictive Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glassmorphism border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">
                        Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="glassmorphism-dark border-white/20 bg-transparent text-foreground placeholder:text-muted-foreground focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="glassmorphism-dark border-white/20 bg-transparent text-foreground placeholder:text-muted-foreground focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Subject
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="glassmorphism-dark border-white/20 bg-transparent text-foreground focus:border-blue-500">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="glassmorphism-dark border-white/20 bg-background">
                        <SelectItem value="collaboration">Research Collaboration</SelectItem>
                        <SelectItem value="consultation">Technical Consultation</SelectItem>
                        <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                        <SelectItem value="startup">Startup Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project, research, or how we can collaborate..."
                      rows={6}
                      className="glassmorphism-dark border-white/20 bg-transparent text-foreground placeholder:text-muted-foreground focus:border-blue-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full tech-gradient text-white py-4 text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-3"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-3"></i>
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-muted-foreground text-center">
                    Prefer direct contact? Reach out on{" "}
                    <a 
                      href="https://linkedin.com/in/harshitmanik" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                    >
                      LinkedIn
                    </a>
                    {" "}or{" "}
                    <a 
                      href="mailto:harshit.manik@email.com"
                      className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                    >
                      Email
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
