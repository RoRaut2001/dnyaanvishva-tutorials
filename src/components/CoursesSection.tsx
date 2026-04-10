import { ArrowRight, GraduationCap, Stethoscope, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: GraduationCap,
    title: "IIT-JEE Main & Advanced",
    desc: "Deep conceptual dives into Physics, Chemistry, and Mathematics with advanced problem-solving clinics.",
    tag: "Class 11 & 12",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Stethoscope,
    title: "NEET Medical Prep",
    desc: "Biological sciences mastery combined with diagnostic-level reasoning for aspiring medical professionals.",
    tag: "Pre-Medical focus",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: BarChart3,
    title: "MHT-CET Excellence",
    desc: "Speed-accuracy optimization and state-level competitive training for Engineering and Pharmacy tracks.",
    tag: "State Entrance",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">Academic Pathways</h2>
            <p className="text-muted-foreground max-w-lg">
              Rigorous preparation modules designed by the Academic Curator team to ensure excellence in competitive arenas.
            </p>
          </div>
          <Link to="/admissions" className="mt-4 md:mt-0 text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
            Explore Full Curriculum <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${course.bgColor} flex items-center justify-center mb-6`}>
                <course.icon size={24} className={course.color} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground font-medium">{course.tag}</span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
