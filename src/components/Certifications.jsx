
import { Award, BookOpen } from "lucide-react";

const Certifications = () => (
  <section id="certifications" className="section-padding bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="space-y-2 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-playfair font-bold flex items-center justify-center gap-2">
          <Award className="w-7 h-7 text-primary" />
          Certifications &amp; Certificates
        </h2>
        <p className="text-muted-foreground">
          Recognitions and completed courses.
        </p>
      </div>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-background rounded-lg border border-border/30 p-6 shadow card-hover flex flex-col gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <BookOpen className="w-5 h-5 text-accent" />
            Cloud Computing
          </div>
          <div className="text-muted-foreground text-sm">
            <span className="font-mono">NPTEL — October 2024</span> <br />
            <a href="#" className="text-primary underline" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>

        <div className="bg-background rounded-lg border border-border/30 p-6 shadow card-hover flex flex-col gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <BookOpen className="w-5 h-5 text-accent" />
            Data Structures And Algorithm
          </div>
          <div className="text-muted-foreground text-sm">
            <span className="font-mono">Boards Infinity — July 2022</span> <br />
            <a href="#" className="text-primary underline" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>

        <div className="bg-background rounded-lg border border-border/30 p-6 shadow card-hover flex flex-col gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <BookOpen className="w-5 h-5 text-accent" />
            HTML, CSS And Javascript for Web Developers
          </div>
          <div className="text-muted-foreground text-sm">
            <span className="font-mono">Coursera — May 2024</span> <br />
            <a href="#" className="text-primary underline" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
