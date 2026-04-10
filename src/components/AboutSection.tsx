import { Heart, BookOpen, Users, Shield } from "lucide-react";
import directorImg from "@/assets/director.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";

const pillars = [
  {
    icon: Heart,
    title: "Our Mission",
    desc: "To create an ecosystem of academic mastery where every student is empowered with the knowledge, skills, and confidence to lead in an ever-evolving world.",
    tags: ["Empower", "Master", "Lead"],
    featured: true,
  },
  {
    icon: BookOpen,
    title: "Academic Rigor",
    desc: "We maintain the highest standards of teaching, ensuring deep comprehension of every concept.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Building character and honesty in every student to foster a trustworthy professional future.",
  },
];

const AboutHero = () => (
  <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">EMPOWERING MINDS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-6 text-foreground leading-tight">
            The Academic<br /><span className="text-secondary">Curator.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Where intellectual rigor meets modern mentorship. We don't just teach subjects; we curate excellence through personalized academic pathways.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-secondary text-primary-foreground rounded-2xl px-8 py-6 text-2xl md:text-3xl font-bold leading-tight max-w-xs">
              ACADEMIC EXCELLENCE
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-secondary text-primary-foreground rounded-xl px-5 py-3 text-sm max-w-[220px] text-center">
              "Education is the movement from darkness to light."
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DirectorSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0 text-center">
            <img src={directorImg} alt="Vishwajeet Lawate Sir" loading="lazy" className="w-28 h-28 rounded-xl object-cover mx-auto mb-3" />
            <h4 className="font-bold text-foreground">Vishwajeet Lawate Sir</h4>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider">FOUNDER & DIRECTOR</p>
            <div className="w-8 h-0.5 bg-primary mx-auto mt-2" />
          </div>
          <div>
            <div className="text-4xl text-secondary mb-4">"</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">From the Director's Desk</h3>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>At Dnyaanvishva Tutorials, we believe that education is not a transactional service, but a transformational journey. My vision for this institution has always been to bridge the gap between traditional learning and contemporary excellence.</p>
              <p>Every student who enters our halls brings a unique spark. Our role as 'Academic Curators' is to provide the environment, the tools, and the inspiration to turn that spark into a beacon of success.</p>
              <p>Our commitment to your child's future is absolute. We don't just prepare them for exams; we prepare them for life.</p>
            </div>
            <p className="text-right text-muted-foreground mt-6 italic">Vishwajeet Lawate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PillarsSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Foundational Pillars</h2>
          <p className="text-muted-foreground max-w-lg">
            The core principles that drive every lecture, assignment, and interaction at Dnyaanvishva.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-primary rounded-2xl p-8 text-primary-foreground row-span-2">
          <h3 className="text-2xl font-bold mb-4">{pillars[0].title}</h3>
          <p className="text-primary-foreground/80 mb-6 leading-relaxed">{pillars[0].desc}</p>
          <div className="flex gap-2">
            {pillars[0].tags?.map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-primary-foreground/20 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
            <BookOpen size={20} className="text-secondary" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Academic Rigor</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{pillars[1].desc}</p>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Shield size={20} className="text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary mb-2">Integrity</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{pillars[2].desc}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="rounded-2xl overflow-hidden">
          <img src={mentorshipImg} alt="Student collaboration" loading="lazy" className="w-full h-64 object-cover rounded-2xl" />
        </div>
        <div className="bg-card rounded-2xl p-8 border border-border shadow-card flex flex-col justify-center">
          <h3 className="text-lg font-bold text-foreground mb-2">Personalized Mentorship</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No two students are the same. Our "Curated" approach ensures that each learner receives the specific guidance and pace they need to thrive.
          </p>
          <div className="w-12 h-0.5 bg-primary mt-4" />
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <>
    <AboutHero />
    <DirectorSection />
    <PillarsSection />
  </>
);

export default AboutSection;
