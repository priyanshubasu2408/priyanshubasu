
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-gradient">
          <span className="font-mono">Priyanshu</span>Basu
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </li>
          </ul>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/priyanshubasu2408" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/priyanshubasu/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="mailto:priyanshubasup@gmail.com">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}
      >
        <nav className="container mx-auto px-4 flex flex-col h-full">
          <ul className="flex flex-col gap-6 items-center text-xl">
            <li>
              <a 
                href="#about" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/priyanshubasu2408" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/priyanshubasu/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="mailto:priyanshubasup@gmail.com">
                <Mail size={24} />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
