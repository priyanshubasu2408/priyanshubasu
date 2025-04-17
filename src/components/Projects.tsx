
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product catalog, cart, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=500&h=350&fit=crop",
      tags: ["React", "Redux", "Firebase", "Material UI"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with interactive UI elements and smooth animations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather dashboard that displays current conditions and forecasts for any location.",
      image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=500&h=350&fit=crop",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation"],
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-2 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-muted-foreground text-pretty">
            A selection of my recent web development projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-hover border-border/50 bg-background"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
