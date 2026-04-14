import Navbar from "@/components/Navbar";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Admissions = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-[120px] md:pt-[200px]">
                <AdmissionForm />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Admissions;