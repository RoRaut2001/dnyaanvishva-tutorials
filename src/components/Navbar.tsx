import { useState, useEffect, useMemo } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/dtlogo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const transition = useMemo(() => ({
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }), []);

  return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full will-change-transform">
        {/* TOP BANNER */}
        <motion.div
            initial={false}
            animate={{
              height: scrolled ? 0 : "auto",
              opacity: scrolled ? 0 : 1,
              y: scrolled ? -20 : 0
            }}
            transition={transition}
            className="w-full bg-[#F6F4B2] overflow-hidden"
        >
          <div className="container mx-auto flex justify-center py-6">
            <img
                src={logo}
                alt="Dnyaanvishva Tutorials"
                className="h-24 md:h-32 object-contain"
            />
          </div>
        </motion.div>

        {/* MAIN NAV */}
        <motion.nav
            animate={{
              backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 1)",
              backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
              paddingTop: scrolled ? "0.7rem" : "0.90rem",
              paddingBottom: scrolled ? "0.7rem" : "0.90rem",
            }}
            transition={transition}
            className="w-full border-b border-border"
        >
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                {scrolled && (
                    <motion.div
                        key="nav-logo"
                        initial={{ opacity: 0, x: -10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.95 }}
                        transition={transition}
                    >
                      <Link to="/">
                        <img src={logo} alt="logo" className="h-10 w-auto" />
                      </Link>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                          to={link.href}
                          className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                              location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                          }`}
                      >
                        {link.label}
                        {location.pathname === link.href && (
                            <motion.span
                                layoutId="nav-underline"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-4"
                                transition={transition}
                            />
                        )}
                      </Link>
                    </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 pl-6 border-l border-border/60">
                <Link
                    to="/login"
                    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  Login
                </Link>
                {/* APPLY NOW AS TEXT LINK */}
                <Link
                    to="/admissions"
                    className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 active:scale-95 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden hover:bg-black/5 rounded-full transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={transition}
                    className="md:hidden overflow-hidden bg-background"
                >
                  <div className="flex flex-col p-6 gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className="text-lg"
                        >
                          {link.label}
                        </Link>
                    ))}
                    <div className="h-[1px] bg-border w-full" />
                    <Link to="/login" className="text-muted-foreground">Login</Link>
                    <Link to="/admissions" className="text-primary font-black uppercase">Apply Now</Link>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
  );
};

export default Navbar;