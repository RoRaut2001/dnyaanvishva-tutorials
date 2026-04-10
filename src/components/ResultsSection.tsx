import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const students = [
  {
    name: "Aryan Kulkarni",
    img: student1,
    badge: "JEE RANK 42",
    badgeColor: "bg-secondary",
    quote: "The personalized mentorship at Dnyaanvishva changed how I approached Mathematics entirely.",
  },
  {
    name: "Siddhi Deshmukh",
    img: student2,
    badge: "NEET 680/720",
    badgeColor: "bg-primary",
    quote: "Concept clarity was my biggest win here. I never felt I was just memorizing.",
  },
  {
    name: "Rahul Mehta",
    img: student3,
    badge: "CET 99.5%",
    badgeColor: "bg-foreground",
    quote: "The test series reflected the actual difficulty perfectly. It built my confidence.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Success Gallery</h2>
          <p className="text-primary font-semibold text-sm">Stories of Grit and Excellence</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((s) => (
            <div key={s.name} className="group relative rounded-2xl overflow-hidden h-[420px] shadow-card hover:shadow-card-hover transition-all duration-300">
              <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className={`inline-block ${s.badgeColor} text-primary-foreground text-xs font-bold px-3 py-1 rounded mb-3`}>
                  {s.badge}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{s.name}</h3>
                <p className="text-primary-foreground/80 text-sm italic">"{s.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
