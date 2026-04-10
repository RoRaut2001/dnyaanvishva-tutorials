import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="gradient-bg rounded-3xl px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-8 leading-tight">
            Ready to Curate Your<br />Academic Future?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/about"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Download Prospectus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
