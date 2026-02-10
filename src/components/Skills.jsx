import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, TrendingUp, Users, Monitor, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const skillCardsRef = useRef([]);
  const certsRef = useRef(null);

  const skillCategories = [
    {
      title: "Banking & Financial Skills",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: [
        { name: "Financial Analysis", level: 20 },
        { name: "Banking Operations", level: 23 },
        { name: "Risk Management", level: 40 },
        { name: "Investment Analysis", level: 15 },
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Business Management",
      icon: <Users className="w-8 h-8" />,
      skills: [
        { name: "Strategic Planning", level: 20 },
        { name: "Project Management", level: 25 },
        { name: "Business Analytics", level: 24 },
        { name: "Organizational Behavior", level: 45 },
      ],
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "Technical Skills",
      icon: <Monitor className="w-8 h-8" />,
      skills: [
        { name: "MS Excel", level: 20 },
        { name: "Financial Software", level: 21 },
        { name: "Data Analysis Tools", level: 22 },
        { name: "Presentation Software", level: 46 },
      ],
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Soft Skills",
      icon: <Award className="w-8 h-8" />,
      skills: [
        { name: "Communication", level: 50 },
        { name: "Leadership", level: 45 },
        { name: "Problem Solving", level: 48 },
        { name: "Team Collaboration", level: 54 },
      ],
      color: "from-orange-500 to-amber-400"
    },
  ];

  const certifications = [
    "Certificate for Seminar Presentation in Career Development",
    "Digital Marketing & Professional Ethics",
    "Certificate in Microsoft Office Applications",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      });

      // Skill Cards Animation
      skillCardsRef.current.forEach((card, index) => {
        // Card Entrance
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
            delay: index * 0.1
          }
        );

        // Progress Bars Animation
        const bars = card.querySelectorAll(".progress-bar");
        const percentages = card.querySelectorAll(".percentage-text");

        bars.forEach((bar, idx) => {
          const width = bar.dataset.width;
          gsap.fromTo(bar,
            { width: 0 },
            {
              width: `${width}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
              delay: 0.2 + (idx * 0.1)
            }
          );
        });

        // Count up animation for text
        percentages.forEach((text, idx) => {
          const target = parseInt(text.dataset.value);
          gsap.fromTo(text,
            { innerText: 0 },
            {
              innerText: target,
              duration: 1.5,
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
              delay: 0.2 + (idx * 0.1),
              onUpdate: function () {
                text.innerHTML = Math.ceil(this.targets()[0].innerText) + "%";
              }
            }
          );
        });

        // Hover Effects
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out", boxShadow: "0 20px 30px rgba(0,0,0,0.1)" });
          gsap.to(card.querySelector(".category-icon"), { rotate: 360, scale: 1.2, duration: 0.5 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out", boxShadow: "none" });
          gsap.to(card.querySelector(".category-icon"), { rotate: 0, scale: 1, duration: 0.5 });
        });
      });

      // Certifications Animation
      const certItems = certsRef.current.querySelectorAll(".cert-item");
      gsap.fromTo(certsRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: certsRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(certItems,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: certsRef.current,
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-50/50 rounded-full blur-3xl mix-blend-multiply" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center md:text-left">
          <span className="text-sm tracking-widest text-[#0f3460] uppercase block mb-3 font-bold">
            Professional Competencies
          </span>
          <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4 font-extrabold">
            Skills & Expertise
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full mx-auto md:mx-0" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#0f3460]/5 transition-colors duration-300 group hover:bg-white hover:border-[#0f3460]/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`category-icon p-4 rounded-xl text-white bg-linear-to-br ${category.color} shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0a1f3d]">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-base font-medium mb-2 text-gray-700">
                      <span>{skill.name}</span>
                      <span className="percentage-text text-[#0f3460]" data-value={skill.level}>0%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`progress-bar h-full rounded-full bg-linear-to-r ${category.color}`}
                        data-width={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications - Modernized Look */}
        <div ref={certsRef} className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-[#0f3460] to-[#16213e]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

          <div className="relative p-10 md:p-14 text-white">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  <span>Recognition</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Training</h3>
                <p className="text-white/70 leading-relaxed">
                  Continuous learning and professional development achievements that strengthen my expertise.
                </p>
              </div>

              <div className="md:w-2/3 grid gap-4 w-full">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="cert-item p-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 flex items-start gap-4 hover:translate-x-2"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-white/90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
