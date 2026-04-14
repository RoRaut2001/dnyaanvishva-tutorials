import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-[120px] md:pt-[200px]">
                <AboutSection />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default About;