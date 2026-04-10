import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/dtlogo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Dnyaanvishva Tutorials" className="h-10 md:h-12 object-contain" />
          <span className="font-bold text-lg text-foreground hidden sm:inline">Dnyaanvishva Tutorials</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-4 py-2"
          >
            Account Login
          </Link>
          <Link
            to="/admissions"
            className="gradient-bg text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm shadow-primary hover:opacity-90 transition-opacity"
          >
            Apply Now
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-up">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.href ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setOpen(false)} className="block px-4 py-3 text-foreground/70 font-medium">
                Account Login
              </Link>
            </li>
            <li>
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="block mt-2 text-center gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
