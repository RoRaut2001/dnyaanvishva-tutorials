import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="font-bold text-lg text-foreground mb-3">Dnyaanvishva</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Setting the gold standard in academic coaching since 2012. We cultivate brilliance through curated learning experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Faculty Directory</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4 uppercase tracking-wider">Institution</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Campus Map</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Main Campus, Education Hub</p>
              <p>knowledge-city@dnyaanvishva.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dnyaanvishva Tutorials. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
