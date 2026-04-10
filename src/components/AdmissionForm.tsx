import { useState } from "react";
import { Send, ShieldCheck, Info } from "lucide-react";

const AdmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [careerAim, setCareerAim] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-4">
              Shaping the<br /><span className="text-secondary">Academic</span><br />Elite.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Join the premier institute for 11th & 12th science. Our curriculum is curated to transform aspirants into high-achievers for NEET, JEE, and CET examinations.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {submitted ? (
            <div className="text-center py-16 bg-card rounded-2xl shadow-card border border-border">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground">We'll contact you shortly on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* 01. Candidate Profile */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">01. Candidate Profile</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Full Name" name="name" placeholder="e.g. Advait Kulkarni" required />
                  <FormInput label="Contact (WhatsApp Number)" name="whatsapp" type="tel" placeholder="10-digit mobile number" required />
                </div>
                <div className="mt-5">
                  <FormInput label="Permanent Address" name="address" placeholder="Enter your full residential address" required />
                </div>
              </div>

              {/* 02. Academic Track Record */}
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3 bg-card rounded-2xl border border-border p-8 shadow-card">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">02. Academic Track Record</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormInput label="10th Board Name" name="board" placeholder="SSC / CBSE / ICSE" required />
                    <FormInput label="10th Percentage / CGPA" name="percentage" placeholder="e.g. 94.50%" required />
                  </div>
                </div>

                <div className="md:col-span-2 bg-card rounded-2xl border border-border p-8 shadow-card">
                  <h3 className="text-lg font-bold text-primary mb-4">Career Aim</h3>
                  <div className="space-y-3">
                    {["JEE Mains/Adv", "NEET Medical", "MHT-CET / Boards"].map((aim) => (
                      <label
                        key={aim}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          careerAim === aim ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="careerAim"
                          value={aim}
                          checked={careerAim === aim}
                          onChange={(e) => setCareerAim(e.target.value)}
                          className="accent-primary"
                        />
                        <span className="text-sm font-medium text-foreground">{aim}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 03. Application Fee */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">03. Application Fee</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  To secure your priority registration, a processing fee of ₹500 is required. Please follow the instructions to complete your application.
                </p>
                <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                  <Info size={18} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">PHONEPE INSTRUCTIONS</p>
                    <p className="text-xs text-muted-foreground">Open PhonePe → Scan QR or enter UPI ID: tutorials@ybl. Once paid, please upload the screenshot or enter the Transaction ID below.</p>
                  </div>
                </div>
                <FormInput label="Transaction ID / UTR" name="transactionId" placeholder="12-digit number" required />
              </div>

              {/* Verification Notice */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6 flex items-start gap-4">
                <ShieldCheck size={24} className="text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Admissions Verification Notice</p>
                  <p className="text-xs text-muted-foreground">By submitting this form, you acknowledge that all academic details provided are true. False information may lead to cancellation of admission without refund.</p>
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <ShieldCheck size={14} /> Secure 256-bit SSL encrypted application process
                </p>
                <button
                  type="submit"
                  className="gradient-bg text-primary-foreground px-10 py-3.5 rounded-full font-semibold shadow-primary hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  Submit Application <Send size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

const FormInput = ({
  label, className = "", ...props
}: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className={className}>
    <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-input bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
    />
  </div>
);

export default AdmissionForm;
