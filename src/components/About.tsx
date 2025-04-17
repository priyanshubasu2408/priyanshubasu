
import { CodeIcon, DatabaseIcon, GlobeIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const About = () => {
  const services = [
    {
      icon: <CodeIcon className="w-10 h-10 text-primary" />,
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with modern frameworks."
    },
    {
      icon: <DatabaseIcon className="w-10 h-10 text-primary" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs."
    },
    {
      icon: <GlobeIcon className="w-10 h-10 text-primary" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from database to user interface."
    },
    {
      icon: <UsersIcon className="w-10 h-10 text-primary" />,
      title: "UI/UX Design",
      description: "Designing intuitive, accessible, and beautiful experiences."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="space-y-2 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">About Priyanshu</h2>
          <p className="text-muted-foreground text-pretty">
            I'm a dedicated web developer with a passion for creating innovative 
            and efficient digital solutions that push the boundaries of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              As a passionate technologist, my journey in web development began 
              with a curiosity to understand how digital experiences are crafted. 
              What started as a hobby quickly transformed into a deep commitment 
              to creating meaningful, user-centric digital solutions.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              I've honed my skills across various technologies, from frontend 
              frameworks to backend architectures, always driven by the goal of 
              delivering exceptional user experiences.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              My approach blends technical expertise with creative problem-solving, 
              ensuring that every project is not just functional, but truly innovative.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
