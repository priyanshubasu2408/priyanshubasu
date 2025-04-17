
import { ArrowRight, Code, Monitor, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 animate-float">
              <span className="text-sm font-medium">Full-Stack Web Developer</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-24 w-24 border-2 border-primary shadow-lg">
                <AvatarImage src="/profile-pic.jpg" alt="Priyanshu Basu" />
                <AvatarFallback>PB</AvatarFallback>
              </Avatar>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Hi, I'm <span className="text-gradient">Priyanshu Basu</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg text-pretty">
              I'm a passionate web developer who transforms ideas into elegant, 
              functional digital solutions. With expertise in modern web technologies, 
              I create responsive and intuitive web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="group">
                <a href="/resume.pdf" download="Priyanshu_Basu_Resume.pdf">
                  Download Resume
                  <FileDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-md">
                <div className="relative w-full h-full perspective-1000">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "0s" }}></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
                  
                  <div className="relative z-10 bg-secondary/60 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-xl rotate-3 animate-float" style={{ animationDelay: "0.5s" }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs font-mono">index.tsx</div>
                    </div>
                    <pre className="text-sm font-mono text-left text-primary-foreground/80 overflow-hidden">
                      <code>{`import React from 'react';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Hello World!</h1>
      </header>
      // ...
    </div>
  );
};

export default App;`}</code>
                    </pre>
                  </div>
                  
                  <div className="absolute z-20 top-20 -right-10 bg-secondary/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-xl -rotate-6 animate-float" style={{ animationDelay: "1s" }}>
                    <Monitor className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="absolute z-20 bottom-20 -left-10 bg-secondary/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-xl rotate-12 animate-float" style={{ animationDelay: "1.5s" }}>
                    <Code className="w-10 h-10 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
