import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Objective", href: "#objective" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation variants for staggering children
  const desktopLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
    hover: { y: -2 },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <Motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-white py-5 shadow-md"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Motion.a
            href="#"
            className="text-xl font-semibold text-[#0f3460]"
            whileHover={{ scale: 1.05 }}
          >
            Sunistha Shrestha
          </Motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Motion.a
                key={link.name}
                href={link.href}
                className="group relative text-[#1a1a2e] hover:text-[#0f3460] transition-colors duration-300"
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={desktopLinkVariants}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0f3460] transition-all duration-300 group-hover:w-full"></span>
              </Motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0f3460]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <Motion.div
              className="md:hidden mt-4 bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <Motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-[#1a1a2e] hover:bg-gray-100 hover:text-[#0f3460]"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={mobileLinkVariants}
                >
                  {link.name}
                </Motion.a>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
}
