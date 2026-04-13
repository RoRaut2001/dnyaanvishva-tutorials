import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
        <main className="pt-[180px] md:pt-[220px]">
      <HeroSection />
      <CoursesSection />
      <ResultsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
        </main>
    </div>
  );
};

export default Index;
