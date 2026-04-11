import { ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-students.jpg";
import heroImg2 from "@/assets/herosectionimage.jpeg";

const HeroSection = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center">

        {/* ✅ Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg2})` }}
        />

        {/* ✅ Dark Blur Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* ✅ Content */}
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
            Clear{" "}
            <span className="text-red-500">Basics,</span>{" "}
            Certain{" "}
            <span className="text-red-500">WIN</span>
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
            More than a tutorial center—we are a curated academic sanctuary. Providing rigorous training for JEE, NEET, and CET with a focus on conceptual mastery and personal growth.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              Begin your Journey <ArrowRight size={18} />
            </Link>
          </div>

          {/*/!* ✅ Floating Card *!/*/}
          {/*<div className="mt-10 bg-black/70 text-white rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg backdrop-blur-md">*/}
          {/*  <Target size={20} className="text-red-500" />*/}
          {/*  <div className="text-left">*/}
          {/*    <p className="font-bold text-sm">Top Selection Rate</p>*/}
          {/*    <p className="text-xs text-white/70">*/}
          {/*      Over 92% students qualified in first attempt*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </section>
  );
};

export default HeroSection;