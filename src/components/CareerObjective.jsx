import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Briefcase, TrendingUp, Star, Shield, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CareerObjective() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const quoteRef = useRef(null);
  const cardsRef = useRef([]);
  const attributesRef = useRef(null);

  const objectives = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Entry-Level Position",
      description: "Seeking an entry-level position in a reputable commercial bank where I can apply my academic knowledge and contribute to the organization's growth."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Professional Development",
      description: "To continuously develop my skills in banking operations, financial analysis, and customer service while maintaining the highest standards of professional ethics."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Long-Term Vision",
      description: "To become a trusted banking professional and eventually take on leadership roles in the financial services industry, contributing to Nepal's economic development."
    }
  ];

  const keyAttributes = [
    { label: "Academic Excellence", desc: "Strong BBM foundation", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Banking Focus", desc: "Specialized knowledge", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Professional Ethics", desc: "High integrity", icon: <Shield className="w-5 h-5" /> },
    { label: "Learning Mindset", desc: "Continuous growth", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      });

      // Quote Block Animation
      gsap.from(quoteRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
        }
      });

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: index * 0.2
          }
        );

        // Hover Effects
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(15, 52, 96, 0.15)", duration: 0.3 });
          gsap.to(card.querySelector(".card-icon-bg"), { rotate: 15, scale: 1.1, duration: 0.4, ease: "back.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, boxShadow: "0 4px 6px rgba(0,0,0,0.05)", duration: 0.3 });
          gsap.to(card.querySelector(".card-icon-bg"), { rotate: 0, scale: 1, duration: 0.4 });
        });
      });

      // Attributes Animation
      const attrs = attributesRef.current.querySelectorAll(".attribute-card");
      gsap.fromTo(attrs,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: attributesRef.current,
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="objective" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center md:text-left">
          <span className="text-sm tracking-widest text-[#0f3460] uppercase block mb-3 font-bold">
            Professional Goals
          </span>
          <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4 font-extrabold">
            Career Objective
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full mx-auto md:mx-0" />
        </div>

        {/* Main Statement */}
        <div
          ref={quoteRef}
          className="bg-linear-to-br from-[#0f3460] to-[#16213e] rounded-3xl p-8 md:p-12 mb-16 text-white relative overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }}></div>
          </div>

          <div className="relative z-10">
            <svg className="w-16 h-16 text-white/20 mb-6 transform -translate-x-2 -translate-y-2 group-hover:scale-110 group-hover:text-white/30 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl md:text-2xl leading-relaxed text-white/95 mb-8 font-light">
              As a dedicated BBM graduate from <span className="font-semibold text-blue-200">Tribhuvan University</span>, I aspire to build a successful career in Nepal's banking and financial sector. My goal is to leverage my academic foundation in business management, coupled with a strong work ethic and passion for finance, to contribute meaningfully to a progressive commercial bank.
            </p>

            <p className="text-lg text-white/80 border-l-4 border-white/20 pl-6 italic">
              I am committed to delivering excellence in customer service, maintaining high professional standards, and continuously learning to adapt to the evolving financial landscape.
            </p>
          </div>
        </div>

        {/* Objective Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {objectives.map((objective, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white rounded-2xl p-8 border border-[#0f3460]/10 shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div className="card-icon-bg w-14 h-14 bg-linear-to-br from-[#0f3460] to-[#1a4d7a] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg transform transition-transform">
                {objective.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0a1f3d] mb-4 group-hover:text-[#0f3460] transition-colors">{objective.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{objective.description}</p>
            </div>
          ))}
        </div>

        {/* Key Attributes */}
        <div ref={attributesRef} className="bg-white rounded-2xl p-8 md:p-10 border border-[#0f3460]/10 shadow-lg">
          <h3 className="text-2xl font-bold text-[#0a1f3d] mb-8 flex items-center gap-3">
            <Star className="w-6 h-6 text-[#0f3460] fill-current" />
            Key Attributes I Bring
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAttributes.map((attr, index) => (
              <div
                key={index}
                className="attribute-card p-5 bg-[#f8f9fa] rounded-xl border border-[#0f3460]/5 hover:bg-white hover:border-[#0f3460]/30 hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-50 text-[#0f3460] rounded-lg group-hover:bg-[#0f3460] group-hover:text-white transition-colors duration-300">
                    {attr.icon}
                  </div>
                  <div className="font-bold text-[#0a1f3d] group-hover:text-[#0f3460] transition-colors">{attr.label}</div>
                </div>
                <div className="text-sm text-gray-500 pl-[3.25rem]">{attr.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
