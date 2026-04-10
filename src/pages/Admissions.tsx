import Navbar from "@/components/Navbar";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AdmissionForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Admissions;
