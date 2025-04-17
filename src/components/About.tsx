
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
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-pretty">
            I'm a passionate web developer specializing in creating modern digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              I've always been fascinated by the intersection of technology and creativity. 
              My journey as a developer began with curiosity about how websites work, which
              led me to dive deep into HTML, CSS, and JavaScript. 
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Over the years, I've expanded my skill set to include modern frameworks and technologies, 
              allowing me to build complete web solutions from concept to deployment. I'm constantly
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              My approach combines technical expertise with a focus on user experience and design,
              ensuring that the applications I build are not only functional but also intuitive and
              enjoyable to use.
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
