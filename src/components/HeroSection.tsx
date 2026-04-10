import { ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="text-xs">⚡</span> ELEVATING AMBITIONS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
              Empowering{" "}
              <span className="text-secondary">the Scholars</span>{" "}
              of Tomorrow.
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              More than a tutorial center—we are a curated academic sanctuary. Providing rigorous training for JEE, NEET, and CET with a focus on conceptual mastery and personal growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-primary hover:opacity-90 transition-opacity"
              >
                Begin your Journey <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full font-medium hover:bg-muted transition-colors"
              >
                View Pedagogy
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img src={heroImg} alt="Students at Dnyaanvishva" width={1024} height={768} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-4 right-4 bg-foreground/90 text-primary-foreground rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg">
              <Target size={20} className="text-primary" />
              <div>
                <p className="font-bold text-sm">Top Selection Rate</p>
                <p className="text-xs text-primary-foreground/70">Over 92% students qualified in first attempt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
