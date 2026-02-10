import { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Code, Briefcase, User, GraduationCap, Send, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const menuButtonRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Zap size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Education", href: "#education", icon: <GraduationCap size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code size={18} /> },
    { name: "Objective", href: "#objective", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Send size={18} /> },
  ];

  // Initial Entrance & Scroll Effect
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial Entrance
      const tl = gsap.timeline();
      tl.from(navRef.current, { y: -100, opacity: 0, duration: 1, ease: "power4.out" })
        .from(logoRef.current, { x: -20, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5")
        .from(linksRef.current, {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.4")
        .from(menuButtonRef.current, { scale: 0, opacity: 0, duration: 0.4 }, "-=0.6");

      ScrollTrigger.create({
        start: "top top",
        end: "+=50",
        onUpdate: (self) => {
          if (self.progress > 0.5) {
            gsap.to(navRef.current, {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              duration: 0.3
            });
            gsap.to([logoRef.current, ...linksRef.current, menuButtonRef.current], {
              color: "#0f3460",
              duration: 0.3
            });
          } else {
            // Top State (Transparent Bg, White Text)
            gsap.to(navRef.current, {
              backgroundColor: "transparent",
              backdropFilter: "blur(0px)",
              boxShadow: "none",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              duration: 0.3
            });
            gsap.to([logoRef.current, ...linksRef.current, menuButtonRef.current], {
              color: "#ffffff",
              duration: 0.3
            });
          }
        }
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile Menu Animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        display: "block"
      });
      gsap.fromTo(mobileLinksRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, delay: 0.1, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        display: "none",
        overwrite: true
      });
    }
  }, [isMobileMenuOpen]);

  const handleLinkHover = (e, enter) => {
    const underline = e.currentTarget.querySelector(".nav-underline");
    // Check if we are scrambled (white bg) or at top (dark bg) to decide hover color.
    // A simple approach is to use a bright blue that works on both, or check computed style.
    // However, usually pure hover colors can be set in CSS or GSAP. 
    // Let's stick to the brand blue for hover which works on both White and Dark.
    const hoverColor = "#3b82f6"; // bright blue

    // We need to revert to the correct base color on mouse leave
    // But since the ScrollTrigger controls the base color, we should rely on that or 
    // simply let the ScrollTrigger overwrite it if needed? 
    // No, on leave we need to set it back to either white or dark.
    // We can check window.scrollY.
    const isScrolled = window.scrollY > 50;
    const baseColor = isScrolled ? "#0f3460" : "#ffffff";

    if (enter) {
      gsap.to(underline, { width: "100%", duration: 0.3, ease: "power2.out", backgroundColor: hoverColor });
      gsap.to(e.currentTarget, { y: -2, color: hoverColor, duration: 0.3 });
    } else {
      gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.in" });
      gsap.to(e.currentTarget, { y: 0, color: baseColor, duration: 0.3 });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            ref={logoRef}
            href="#"
            className="text-2xl font-extrabold text-white tracking-tight relative group"
          >
            Sunistha<span className="text-blue-500">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                ref={el => linksRef.current[index] = el}
                className="relative text-white font-medium text-sm lg:text-base tracking-wide py-2"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                {link.name}
                <span className="nav-underline absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          ref={mobileMenuRef}
          className="hidden md:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl mt-4 border border-blue-100"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                ref={el => mobileLinksRef.current[index] = el}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-[#1a1a2e] hover:bg-blue-50 hover:text-[#0f3460] rounded-xl transition-all duration-300 font-medium"
              >
                <span className="text-blue-500 opacity-80">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
