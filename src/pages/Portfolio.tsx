import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Aspiring Full Stack Web Developer | B.E. Electronics and Communication Engineering Student
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
                <a
                  href="https://www.linkedin.com/in/dixun-devotta-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/DixDev1621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="mailto:dixundevotta.s@gmail.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Blockchain Router */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle>Blockchain Router</CardTitle>
                    <Badge className="text-xs">Full-Stack MERN</Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["MongoDB", "Express.js", "React.js", "Node.js", "Blockchain"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a full-stack MERN application for a decentralized blockchain router to securely transfer data and prevent network manipulation. Developed a React-based frontend, implemented Node.js and Express REST APIs, used MongoDB for data storage, and integrated authentication and blockchain-based verification for secure communication.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" asChild>
                      <a href="https://dixdev1621.github.io/defi-router/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/DixDev1621/Frontend-Blockchain.git" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Frontend Repo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/DixDev1621/Backend-Blockchain.git" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Backend Repo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Waste Management System */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle>Smart Waste Management System</CardTitle>
                  </div>
                  <CardDescription className="text-xs font-medium text-primary">MERN Stack Backend + AI + IoT</CardDescription>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["MongoDB", "Express.js", "Node.js", "Arduino", "IoT"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Developed a hardware-integrated smart waste management system with a MERN stack backend to perform real-time waste classification and physical segregation. The system runs on a local server due to live camera input and direct Arduino control, and is deployable in campuses, offices, apartments, and public facilities. The modular design allows scalable installation of multiple units.
                  </p>
                  <p className="text-xs text-muted-foreground italic mb-4">Note: Local Server | Hardware-Based System</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/DixDev1621/waste_project.git" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Water Tracking Web Application */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Water Tracking Web Application</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Vite"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a responsive water intake tracking web application using React.js and TypeScript with a modern UI built using Tailwind CSS. Integrated backend services via Supabase to store and manage user hydration data efficiently.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href="https://starlit-gecko-9af8d7.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/DixDev1621/saveit-comedy-coach.git" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                { 
                  title: "Smart India Hackathon 2025 – Winner", 
                  org: "National-level winner for Fog Magnet – Fog-to-Water Conversion Hardware",
                  link: "https://drive.google.com/file/d/19Cz1rVB5uen9JHERTS-InOBfIMIbto5h/view?usp=sharing"
                },
                { 
                  title: "1st Place – IEEE IMPACTX 3.0 National-Level 24-Hour Hackathon", 
                  org: "Out of 517 teams, shortlisted among final 85",
                  link: "https://drive.google.com/file/d/1ICDvzEMJ1REuMnSp-I34zRnziDcgqjAN/view?usp=sharing"
                },
                { 
                  title: "1st Place – Debate Competition", 
                  org: "Sai Ram Engineering College (Gridex 8.0)",
                  link: "https://drive.google.com/file/d/1_I_zcO6wAYPTW4MHWg5KzeGF7qidsXT6/view?usp=sharing"
                },
                { 
                  title: "3rd Place – App Expo", 
                  org: "Theme: Crypto (Blockchain & DeFi)",
                  link: "https://drive.google.com/file/d/1YJSk0ecai-VG9l-coHKFoLHo_0AGblIJ/view?usp=sharing"
                },
                { 
                  title: "Full Stack Web Development", 
                  org: "GUVI (6 months)",
                  link: "https://drive.google.com/file/d/1dvU4wxVH61lJWYThj0Dj1gw6B1F-_I1K/view?usp=sharing"
                },
                { 
                  title: "IEEE Publication", 
                  org: "Energy Efficient Hybrid Buoy - DELCON 2025 IEEE Conference",
                  link: "https://drive.google.com/file/d/12MdgrvNZTISbx9Z7NYp71BgSazGf7drz/view?usp=sharing"
                },
                { 
                  title: "Hackathon – VIT Chennai", 
                  org: "Top 10 Finalist out of 180 teams",
                  link: "https://drive.google.com/file/d/1poe54uoxa6hXYVoJdIsqsJBgvOhzk5_D/view?usp=sharing"
                },
                { 
                  title: "DRESTEIN'25 – Poster Presentation", 
                  org: "3rd Place - Saveetha Engineering College",
                  link: "https://drive.google.com/file/d/1yrPwHPJpZpA9Y7n0xJ1RgjWezNCocgzC/view?usp=sharing"
                },
                { 
                  title: "2nd Place – Multiverse Pitch", 
                  org: "Sai Ram Engineering College (AIRO 5.0)",
                  link: "https://drive.google.com/file/d/1915ko7RvEknHB7balQs_fux5tmXsekMy/view?usp=sharing"
                }
              ].map((cert) => (
                <Card key={cert.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.org}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" variant="outline" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
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
            </div>
            <p className="text-muted-foreground text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
