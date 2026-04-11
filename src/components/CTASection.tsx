import { Link } from "react-router-dom";
import banner from "@/assets/dtcontact.jpg";

const CTASection = () => {
  return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">

          {/* ✅ Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-10 leading-tight">
            Ready to Curate Your{" "}
            <span className="text-red-500">Academic Future?</span>
          </h2>

          {/* ✅ Image */}
          <div className="mb-10">
            <img
                src={banner}
                alt="Contact Banner"
                className="w-full max-h-[400px] object-contain mx-auto"
                loading="lazy"
            />
          </div>

          {/* ✅ Button */}
          <div>
            <Link
                to="/admissions"
                className="inline-block bg-red-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-red-600 transition-colors"
            >
              Apply for Admission
            </Link>
          </div>

        </div>
      </section>
  );
};

export default CTASection;