import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20know%20about%20admissions"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 gradient-bg text-primary-foreground px-5 py-3 rounded-full flex items-center gap-2 shadow-primary animate-float hover:opacity-90 transition-opacity font-semibold text-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} /> Enquire Now
    </a>
  );
};

export default WhatsAppButton;
