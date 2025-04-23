
import { GraduationCap, School } from "lucide-react";

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto px-4">
      <div className="space-y-2 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-playfair font-bold flex items-center justify-center gap-2">
          <GraduationCap className="w-7 h-7 text-primary" />
          Education
        </h2>
        <p className="text-muted-foreground">
          My academic background and qualifications.
        </p>
      </div>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-secondary/30 rounded-lg p-6 shadow">
          <h3 className="text-xl font-playfair font-semibold flex items-center gap-2">
            <School className="w-5 h-5 text-accent" />
            Bachelor of Technology, Computer Science & Engineering
          </h3>
          <div className="text-muted-foreground text-sm mt-1">
            Netaji Subhash Engineering College, Kolkata <br />
            2021 – Present
          </div>
          <div className="mt-2 text-sm">
            Current CGPA: 8.84/10
          </div>
        </div>
        {/* Add more entries if there are more qualifications in the future */}
      </div>
    </div>
  </section>
);

export default Education;
