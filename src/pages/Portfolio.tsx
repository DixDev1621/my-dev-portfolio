import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Download, Home, Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    // Create mailto link
    const mailtoLink = `mailto:dixundevotta.s@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your message will be sent via your default email app.",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                DIXUN DEVOTTA S
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-border">
                <a
                  href="https://www.linkedin.com/in/dixun-devotta-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/DixDev1621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Portfolio"
                >
                  <Home className="h-5 w-5" />
                </a>
              </div>
              <Button size="sm" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center justify-center space-x-4 py-2">
                  <a
                    href="https://www.linkedin.com/in/dixun-devotta-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/DixDev1621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    <Home className="h-5 w-5" />
                  </a>
                </div>
                <Button size="sm" className="mx-4" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                DIXUN DEVOTTA S
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Aspiring Full Stack Web Developer | B.E. Electronics and Communication Engineering Student
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View Projects
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 animate-scale-in">
              <img
                src={profilePhoto}
                alt="Dixun Devotta S"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Motivated B.E. Electronics and Communication Engineering student and certified Full Stack Web Developer. 
                  Skilled in creating responsive websites using modern technologies. A passionate communicator and confident 
                  presenter with strong public speaking and teamwork abilities, eager to apply both technical and soft skills 
                  in real-world projects.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="mailto:dixundevotta.s@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                    <Mail className="h-5 w-5" />
                    dixundevotta.s@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/dixun-devotta-s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/DixDev1621" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  <a href="/" className="flex items-center gap-2 text-primary hover:underline">
                    <Home className="h-5 w-5" />
                    Portfolio
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "HTML", desc: "Markup language for structuring web pages and content" },
                  { name: "CSS", desc: "Styling language for designing beautiful, responsive layouts" },
                  { name: "JavaScript", desc: "Programming language for interactive web applications" },
                  { name: "React.js", desc: "Modern library for building dynamic user interfaces" },
                  { name: "Node.js", desc: "Runtime environment for server-side JavaScript applications" },
                  { name: "Express.js", desc: "Web framework for building RESTful APIs and backends" },
                  { name: "MongoDB", desc: "NoSQL database for scalable data storage" },
                  { name: "C", desc: "Foundational programming language for system-level coding" },
                  { name: "Python", desc: "Versatile language for scripting, automation, and development" },
                  { name: "Git", desc: "Version control system for collaborative development" },
                ].map((skill) => (
                  <Card key={skill.name}>
                    <CardContent className="pt-6">
                      <Badge variant="secondary" className="mb-2">{skill.name}</Badge>
                      <p className="text-sm text-muted-foreground">{skill.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Tools</h3>
              <Card>
                <CardContent className="pt-6">
                  <Badge variant="secondary">VS Code</Badge>
                  <p className="text-sm text-muted-foreground mt-2">Code editor for efficient development workflow</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Blockchain Router",
                  description: "Decentralized router concept using blockchain for secure data transfer",
                  github: "https://github.com/DixDev1621",
                  live: "https://defi-router-website-demo.netlify.app/"
                },
                {
                  title: "Shopping Website",
                  description: "Responsive e-commerce site with cart & authentication",
                  github: "https://github.com/DixDev1621",
                  live: "#"
                },
                {
                  title: "Smart Waste Management System",
                  description: "IoT system using Arduino + ultrasonic sensors for waste detection",
                  github: "https://github.com/DixDev1621",
                  live: "#"
                }
              ].map((project) => (
                <Card key={project.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Preview
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowMoreProjects(!showMoreProjects)}
              >
                {showMoreProjects ? "Hide" : "Show"} More Projects
              </Button>
              
              {showMoreProjects && (
                <div className="mt-6 animate-fade-in">
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-left">
                        <li className="text-muted-foreground">• ML-Based Waste Management Mini Project</li>
                        <li className="text-muted-foreground">• Published IEEE Paper: "Energy Efficient Hybrid Buoy"</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications & Achievements</h2>
            
            <div className="grid gap-4">
              {[
                { title: "1st Place – Debate Competition", org: "Sai Ram Engineering College (Gridex 8.0)" },
                { title: "3rd Place – App Expo", org: "Theme: Crypto (Blockchain & DeFi)" },
                { title: "Full Stack Web Development", org: "GUVI (6 months)" },
                { title: "IEEE Publication", org: "Energy Efficient Hybrid Buoy - DELCON 2025 IEEE Conference" }
              ].map((cert) => (
                <Card key={cert.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.org}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>B.E. Electronics and Communication Engineering</CardTitle>
                <CardDescription>Saveetha Engineering College, Chennai</CardDescription>
                <CardDescription className="text-foreground font-semibold">(2024 - 2028)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Feel free to reach out for collaborations or opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:dixundevotta.s@gmail.com" className="text-muted-foreground hover:text-primary">
                      dixundevotta.s@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://www.linkedin.com/in/dixun-devotta-s" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/DixDev1621" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-primary" />
                    <a href="/" className="text-muted-foreground hover:text-primary">
                      Portfolio
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below to contact me</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input name="name" placeholder="Your Name" required />
                    </div>
                    <div>
                      <Input name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                      <Input name="subject" placeholder="Subject" required />
                    </div>
                    <div>
                      <Textarea name="message" placeholder="Your Message" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Dixun Devotta S. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/dixun-devotta-s" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/DixDev1621" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="/" className="text-muted-foreground hover:text-primary">
                <Home className="h-5 w-5" />
              </a>
            </div>
            <Button size="sm" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
