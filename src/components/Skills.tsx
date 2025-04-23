
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const skillCategories = {
    frontend: [
      { name: "HTML5", proficiency: 95, icon: "🌐" },
      { name: "CSS3", proficiency: 90, icon: "🎨" },
      { name: "JavaScript (ES6+)", proficiency: 90, icon: "📜" },
      { name: "TypeScript", proficiency: 85, icon: "🔷" },
      { name: "React", proficiency: 90, icon: "⚛️" },
      { name: "Next.js", proficiency: 80, icon: "▲" },
      { name: "Tailwind CSS", proficiency: 95, icon: "🌬️" },
      { name: "Responsive Design", proficiency: 95, icon: "📱" }
    ],
    backend: [
      { name: "Node.js", proficiency: 85, icon: "🟢" },
      { name: "Express", proficiency: 80, icon: "🚂" },
      { name: "MongoDB", proficiency: 75, icon: "🍃" },
      { name: "PostgreSQL", proficiency: 70, icon: "🐘" },
      { name: "REST APIs", proficiency: 90, icon: "🔄" },
      // { name: "GraphQL", proficiency: 70, icon: "⬢" },
      // { name: "Firebase", proficiency: 75, icon: "🔥" },
      // { name: "Authentication", proficiency: 85, icon: "🔐" }
    ],
    tools: [
      { name: "Git/GitHub", proficiency: 90, icon: "🐙" },
      // { name: "Docker", proficiency: 65, icon: "🐳" },
      { name: "VS Code", proficiency: 95, icon: "💻" },
      // { name: "Webpack", proficiency: 70, icon: "📦" },
      // { name: "Jest", proficiency: 75, icon: "🃏" },
      // { name: "CI/CD", proficiency: 65, icon: "🔄" },
      { name: "Figma", proficiency: 80, icon: "🎨" },
      // { name: "NPM/Yarn", proficiency: 90, icon: "📦" }
    ]
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="space-y-2 text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground text-pretty">
            My technical toolkit and expertise in web development.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <Tabs defaultValue="frontend" className="w-full max-w-3xl" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools & Others</TabsTrigger>
            </TabsList>
            
            {Object.keys(skillCategories).map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {skillCategories[category].map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <h3 className="text-lg font-medium text-center w-full mb-4">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
              Web3
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              Svelte
            </span>
            <span className="px-3 py-1 rounded-full bg-theme-highlight/10 text-theme-highlight border border-theme-highlight/20">
              Python
            </span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
              AWS
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              Three.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
